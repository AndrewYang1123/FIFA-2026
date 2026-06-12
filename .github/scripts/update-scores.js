#!/usr/bin/env node
/**
 * Auto-update scores.js with the latest FIFA World Cup 2026 results.
 * Runs daily at 09:00 PDT via GitHub Actions.
 *
 * Requires env var: APIFOOTBALL_KEY  (from api-football.com free tier)
 *
 * Logic:
 *   1. Load .github/scripts/processed-fixtures.json to know what's already saved.
 *   2. Fetch all FT (finished) WC 2026 fixtures from api-football.com.
 *   3. For each new fixture: fetch goal/card events, build an entry object.
 *   4. Append new entries to FINAL_SCORES in scores.js.
 *   5. Update SCORES_UPDATED date.
 *   6. Save updated processed-fixtures.json.
 */

const https    = require('https');
const fs       = require('fs');
const path     = require('path');

// ── Config ────────────────────────────────────────────────────────────────
const API_KEY   = process.env.APIFOOTBALL_KEY;
const LEAGUE_ID = 1;      // FIFA World Cup on api-football.com
const SEASON    = 2026;

if (!API_KEY) {
  console.error('ERROR: APIFOOTBALL_KEY environment variable is not set.');
  process.exit(1);
}

// ── Flag emoji map (all 48 WC 2026 qualifiers) ───────────────────────────
const FLAGS = {
  'Mexico':'🇲🇽', 'South Africa':'🇿🇦', 'South Korea':'🇰🇷', 'Korea Republic':'🇰🇷',
  'Czechia':'🇨🇿', 'Czech Republic':'🇨🇿', 'United States':'🇺🇸', 'USA':'🇺🇸',
  'Canada':'🇨🇦', 'Brazil':'🇧🇷', 'Argentina':'🇦🇷', 'France':'🇫🇷',
  'England':'🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Germany':'🇩🇪', 'Spain':'🇪🇸', 'Portugal':'🇵🇹',
  'Netherlands':'🇳🇱', 'Belgium':'🇧🇪', 'Italy':'🇮🇹', 'Japan':'🇯🇵',
  'Australia':'🇦🇺', 'Morocco':'🇲🇦', 'Senegal':'🇸🇳', 'Ghana':'🇬🇭',
  'Cameroon':'🇨🇲', 'Nigeria':'🇳🇬', 'Egypt':'🇪🇬', 'Saudi Arabia':'🇸🇦',
  'Iran':'🇮🇷', 'Qatar':'🇶🇦', 'Poland':'🇵🇱', 'Croatia':'🇭🇷',
  'Serbia':'🇷🇸', 'Switzerland':'🇨🇭', 'Austria':'🇦🇹', 'Denmark':'🇩🇰',
  'Uruguay':'🇺🇾', 'Colombia':'🇨🇴', 'Ecuador':'🇪🇨', 'Peru':'🇵🇪',
  'Chile':'🇨🇱', 'Venezuela':'🇻🇪', 'Paraguay':'🇵🇾', 'Bolivia':'🇧🇴',
  'New Zealand':'🇳🇿', 'Indonesia':'🇮🇩', 'Ukraine':'🇺🇦', 'Slovakia':'🇸🇰',
  'Hungary':'🇭🇺', 'Romania':'🇷🇴', 'Greece':'🇬🇷', 'Turkey':'🇹🇷',
  'Tunisia':'🇹🇳', 'Algeria':'🇩🇿', 'Mali':'🇲🇱', "Ivory Coast":"🇨🇮",
  "Côte d'Ivoire":'🇨🇮', 'Congo':'🇨🇬', 'DR Congo':'🇨🇩',
  'Costa Rica':'🇨🇷', 'Panama':'🇵🇦', 'Honduras':'🇭🇳', 'Jamaica':'🇯🇲',
  'Bahrain':'🇧🇭', 'Iraq':'🇮🇶', 'Uzbekistan':'🇺🇿',
};

// Normalise API team names to match the names used in our data.js
const NORMALIZE = {
  'Korea Republic': 'South Korea',
  'Czech Republic': 'Czechia',
  'IR Iran':        'Iran',
  'United States':  'United States',
};

function normName(n) { return NORMALIZE[n] || n; }

// ── Helpers ───────────────────────────────────────────────────────────────
function apiGet(endpoint) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      { hostname: 'v3.football.api-sports.io', path: endpoint,
        headers: { 'x-apisports-key': API_KEY } },
      (res) => {
        let raw = '';
        res.on('data', c => raw += c);
        res.on('end', () => {
          try { resolve(JSON.parse(raw)); }
          catch (e) { reject(new Error('JSON parse error: ' + e.message)); }
        });
      }
    );
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Request timeout')); });
  });
}

function formatDate(iso) {
  // "2026-06-11T20:00:00+00:00" → "Jun 11"
  return new Date(iso).toLocaleDateString('en-US',
    { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

function formatRound(round) {
  const m = round.match(/Group Stage - (\d+)/i);
  if (m) return 'Matchday ' + m[1];
  if (/round of 32/i.test(round))  return 'Round of 32';
  if (/round of 16/i.test(round))  return 'Round of 16';
  if (/quarter/i.test(round))      return 'Quarter-final';
  if (/semi/i.test(round))         return 'Semi-final';
  if (/3rd|third/i.test(round))    return '3rd Place';
  if (/final/i.test(round))        return 'Final';
  return round;
}

function esc(str) {
  // Escape single quotes for JS string literals
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Serialise one match entry to JS source (no JSON.stringify — keeps style consistent)
function serializeEntry(m) {
  const lines = [
    `  { date:'${esc(m.date)}', round:'${esc(m.round)}',`,
    `    home:'${esc(m.home)}', homeFlag:'${m.homeFlag}', homeScore:${m.homeScore},`,
    `    away:'${esc(m.away)}', awayFlag:'${m.awayFlag}', awayScore:${m.awayScore},`,
    `    venue:'${esc(m.venue)}'`,
  ];

  if (m.goals && m.goals.length) {
    lines[lines.length - 1] += ',';
    const gs = m.goals.map(g =>
      `{ team:'${g.team}', scorer:'${esc(g.scorer)}', minute:"${g.minute}" }`
    ).join(', ');
    lines.push(`    goals:[${gs}]`);
  }
  if (m.cards && m.cards.length) {
    lines[lines.length - 1] += ',';
    const cs = m.cards.map(c =>
      `{ team:'${c.team}', player:'${esc(c.player)}', minute:"${c.minute}", type:'red' }`
    ).join(', ');
    lines.push(`    cards:[${cs}]`);
  }

  lines.push('  }');
  return lines.join('\n');
}

// ── Main ──────────────────────────────────────────────────────────────────
async function main() {
  const root          = path.join(__dirname, '../..');
  const scoresPath    = path.join(root, 'scores.js');
  const processedPath = path.join(__dirname, 'processed-fixtures.json');

  // Load already-processed fixture IDs
  const processed = fs.existsSync(processedPath)
    ? JSON.parse(fs.readFileSync(processedPath, 'utf8'))
    : {};
  console.log(`Previously processed: ${Object.keys(processed).length} fixtures`);

  // Also build a set of home|away|date keys already present in scores.js
  // so we never duplicate a match that was entered manually
  const scoresRaw = fs.readFileSync(scoresPath, 'utf8');
  const existingKeys = new Set();
  const rowPattern = /home:'([^']+)'.*?away:'([^']+)'.*?date:'([^']+)'/gs;
  let rm;
  while ((rm = rowPattern.exec(scoresRaw)) !== null) {
    existingKeys.add(`${rm[1]}|${rm[2]}|${rm[3]}`);
  }

  // Fetch all finished WC 2026 matches
  console.log('Calling api-football.com…');
  const data = await apiGet(`/fixtures?league=${LEAGUE_ID}&season=${SEASON}&status=FT`);

  if (!data.response) {
    console.error('Unexpected API response:', JSON.stringify(data).slice(0, 300));
    process.exit(1);
  }
  console.log(`API returned ${data.response.length} finished fixture(s)`);

  const newEntries = [];

  for (const fixture of data.response) {
    const id = String(fixture.fixture.id);

    if (processed[id]) {
      console.log(`  [skip] ${fixture.teams.home.name} vs ${fixture.teams.away.name} (already saved)`);
      continue;
    }
    const matchKey = `${normName(fixture.teams.home.name)}|${normName(fixture.teams.away.name)}|${formatDate(fixture.fixture.date)}`;
    if (existingKeys.has(matchKey)) {
      console.log(`  [skip] ${matchKey} (already in scores.js — marking as processed)`);
      processed[id] = fixture.fixture.date.split('T')[0];
      continue;
    }

    const home = normName(fixture.teams.home.name);
    const away = normName(fixture.teams.away.name);
    console.log(`  [new]  ${home} ${fixture.goals.home}–${fixture.goals.away} ${away}`);

    // Fetch goal / card events for this match
    let goals = [], cards = [];
    try {
      const ev = await apiGet(`/fixtures/events?fixture=${id}`);
      for (const e of (ev.response || [])) {
        const isHome = normName(e.team.name) === home;
        const side   = isHome ? 'home' : 'away';
        const min    = e.time.elapsed + (e.time.extra ? '+' + e.time.extra : '') + "'";

        if (e.type === 'Goal') {
          if (e.detail === 'Missed Penalty') continue;
          const scorer = e.detail === 'Own Goal'
            ? e.player.name + ' (OG)'
            : e.player.name;
          goals.push({ team: side, scorer, minute: min });
        }
        if (e.type === 'Card' && e.detail === 'Red Card') {
          // Use last name only for brevity
          const lastName = e.player.name.split(' ').slice(-1)[0];
          cards.push({ team: side, player: lastName, minute: min, type: 'red' });
        }
      }
    } catch (err) {
      console.warn(`  [warn] Could not fetch events for fixture ${id}: ${err.message}`);
    }

    const entry = {
      date:      formatDate(fixture.fixture.date),
      round:     formatRound(fixture.league.round),
      home,
      homeFlag:  FLAGS[home]  || '🏳️',
      homeScore: fixture.goals.home,
      away,
      awayFlag:  FLAGS[away]  || '🏳️',
      awayScore: fixture.goals.away,
      venue:     fixture.fixture.venue.name || '',
    };
    if (goals.length) entry.goals = goals;
    if (cards.length) entry.cards = cards;

    newEntries.push(entry);
    processed[id] = fixture.fixture.date.split('T')[0]; // store date for reference
  }

  if (newEntries.length === 0) {
    console.log('No new matches today — scores.js is already up to date.');
    return;
  }

  // Append new entries to FINAL_SCORES in scores.js
  let content = fs.readFileSync(scoresPath, 'utf8');
  const today = new Date().toISOString().split('T')[0];

  // Insert before the closing ]; that ends FINAL_SCORES
  const endPattern = /(\n\];\s*\n\s*const SCORES_UPDATED)/;
  if (!endPattern.test(content)) {
    console.error('ERROR: Could not find FINAL_SCORES end marker in scores.js');
    process.exit(1);
  }

  const newBlock = newEntries.map(e => ',\n' + serializeEntry(e)).join('');
  content = content
    .replace(endPattern, newBlock + '\n$1')
    .replace(/const SCORES_UPDATED = '[^']+';/, `const SCORES_UPDATED = '${today}';`);

  fs.writeFileSync(scoresPath, content, 'utf8');
  fs.writeFileSync(processedPath, JSON.stringify(processed, null, 2), 'utf8');

  console.log(`✅  Added ${newEntries.length} new match(es). scores.js updated.`);
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
