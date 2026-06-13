/* ============================================================
   scores.js — FIFA 2026 World Cup daily final-score tracker
   ------------------------------------------------------------
   This file backs scores.html. It exposes two pieces of state
   that the DAILY AUTOMATED UPDATE JOB is expected to rewrite
   once the tournament kicks off on 2026-06-11:

     FINAL_SCORES   Array of completed-match result objects.
                    The job APPENDS one entry per match as soon
                    as that match finishes. Shape of each entry:
                      {
                        date:      'Jun 11',          // display date (matches data.js SCHEDULE format)
                        round:     'Matchday 1',      // e.g. 'Matchday 2', 'Round of 16', 'Final'…
                        home:      'Mexico',          // English team name
                        away:      'Poland',
                        homeFlag:  '🇲🇽',
                        awayFlag:  '🇵🇱',
                        homeScore: 2,
                        awayScore: 1,
                        venue:     'Estadio Azteca'
                      }

     SCORES_UPDATED  ISO date string 'YYYY-MM-DD' marking the
                     last time this file was refreshed. The job
                     rewrites it on every run; the page displays
                     it to visitors as "Last updated: …".

   Until the opening match kicks off, FINAL_SCORES stays empty
   and the page shows a "tournament hasn't started yet" notice
   instead of an empty table.
   ============================================================ */

// Shape of each entry (the daily job appends one per finished match):
// { date:'Jun 11', round:'Matchday 1',
//   home:'Mexico', homeFlag:'🇲🇽', homeScore:2,
//   away:'South Africa', awayFlag:'🇿🇦', awayScore:0,
//   venue:'SoFi Stadium' }
const FINAL_SCORES = [
  { date:'Jun 11', round:'Matchday 1',
    home:'Mexico',       homeFlag:'🇲🇽', homeScore:2,
    away:'South Africa', awayFlag:'🇿🇦', awayScore:0,
    venue:'Estadio Azteca',
    goals:[
      { team:'home', scorer:'Julián Quiñones', minute:"9'"  },
      { team:'home', scorer:'Raúl Jiménez',    minute:"67'" },
    ],
    cards:[
      { team:'away', player:'S. Sithole', minute:"49'",   type:'red' },
      { team:'away', player:'T. Zwane',   minute:"84'",   type:'red' },
      { team:'home', player:'C. Montes',  minute:"90+2'", type:'red' },
    ],
    description:
      '墨西哥在主場 Azteca 球場震撼揭幕！Quiñones 閃電 9 分鐘破網，率先為地主隊開分；' +
      '下半場 Jiménez 以精準頭槌鎖定勝局。南非雖連吃兩紅牌仍頑強抵抗，功虧一簣——' +
      '墨西哥以完美姿態揭開 2026 世界盃序幕。',
    descriptionEn:
      'Mexico lit up the Azteca with a commanding opener! Quiñones struck in just the 9th minute ' +
      'to score the first World Cup goal on home soil, then Jiménez sealed it with a powerful ' +
      '67th-minute header. South Africa had two men sent off but fought bravely — ' +
      'the hosts delivered the perfect start to 2026.' },

  { date:'Jun 11', round:'Matchday 1',
    home:'South Korea', homeFlag:'🇰🇷', homeScore:2,
    away:'Czechia',     awayFlag:'🇨🇿', awayScore:1,
    venue:'Estadio Akron',
    goals:[
      { team:'away', scorer:'L. Krejčí',    minute:"59'" },
      { team:'home', scorer:'Hwang In-Beom', minute:"67'" },
      { team:'home', scorer:'Oh Hyeon-Gyu', minute:"80'" },
    ],
    description:
      '南韓展現教科書級別的後來居上！捷克 Krejčí 59 分鐘頭槌率先破網，' +
      '但太極虎毫不示弱——Hwang In-Beom 67 分鐘精妙弧線扳平，' +
      '換人上場的 Oh Hyeon-Gyu 80 分鐘冷靜收尾一槌定音。南韓完美逆轉，' +
      '與墨西哥並列 A 組榜首。',
    descriptionEn:
      'South Korea delivered a stunning second-half comeback at Estadio Akron! ' +
      'Krejčí gave Czechia the lead with a powerful 59th-minute header, but the Taeguk Warriors ' +
      'fought back — Hwang In-Beom clipped home a beautiful equalizer in the 67th, ' +
      'and substitute Oh Hyeon-Gyu sealed all three points with a cool 80th-minute finish. ' +
      'South Korea share the top of Group A with Mexico.' },

  { date:'Jun 12', round:'Matchday 1',
    home:'Canada',               homeFlag:'🇨🇦', homeScore:1,
    away:'Bosnia and Herzegovina', awayFlag:'🇧🇦', awayScore:1,
    venue:'BMO Field',
    goals:[
      { team:'away', scorer:'J. Lukić',   minute:"21'" },
      { team:'home', scorer:'C. Larin',   minute:"78'" },
    ],
    description:
      '加拿大在主場 BMO Field 創造歷史！Lukić 21 分鐘頭槌令地主先落後，' +
      '全場球迷屏息以待。候補球員 Larin 78 分鐘入替後僅花 2 分鐘便精準射門扳平，' +
      'BMO Field 全場沸騰。加拿大首次在主場世界盃奪積分，寫下美麗的里程碑。',
    descriptionEn:
      'Canada made history at a packed BMO Field! Lukić\'s 21st-minute header put Bosnia ' +
      'ahead and silenced the home crowd, but substitute Cyle Larin — on the pitch for just ' +
      '2 minutes — fired home a stunning 78th-minute equalizer to send the stadium into ' +
      'pandemonium. Canada\'s first-ever World Cup point on home soil: a moment to remember.' },
];

const SCORES_UPDATED = '2026-06-12';

// 12 distinct header gradient colours for groups A → L
var GRP_COLORS = [
  'linear-gradient(135deg,#0d2a5c,#0a3a28)',  // A - navy / forest
  'linear-gradient(135deg,#3a0d6e,#1a0840)',  // B - violet
  'linear-gradient(135deg,#0d4a1a,#063a28)',  // C - forest green
  'linear-gradient(135deg,#6e1010,#4a0808)',  // D - crimson
  'linear-gradient(135deg,#5c3a0d,#3a2508)',  // E - amber
  'linear-gradient(135deg,#0d205c,#0a0a4a)',  // F - royal blue
  'linear-gradient(135deg,#5c0d48,#3a0830)',  // G - magenta
  'linear-gradient(135deg,#1a0d6e,#0d0a5a)',  // H - indigo
  'linear-gradient(135deg,#0d4a4a,#083038)',  // I - teal
  'linear-gradient(135deg,#6e2a0d,#4a1808)',  // J - burnt orange
  'linear-gradient(135deg,#10185c,#080a4a)',  // K - midnight
  'linear-gradient(135deg,#0d5a2a,#083a1a)',  // L - emerald
];

// Knockout round schedule (key must match FINAL_SCORES round field)
var KO_ROUNDS = [
  { key:'Round of 32',   zh:'32強賽',      en:'Round of 32',    dates:'Jul 2–5',   total:16 },
  { key:'Round of 16',   zh:'16強賽',      en:'Round of 16',    dates:'Jul 6–8',   total:8  },
  { key:'Quarter-final', zh:'八強賽 (QF)', en:'Quarter-finals', dates:'Jul 10–11', total:4  },
  { key:'Semi-final',    zh:'準決賽 (SF)', en:'Semi-finals',    dates:'Jul 14–15', total:2  },
  { key:'3rd Place',     zh:'季軍戰',      en:'3rd Place',      dates:'Jul 21',    total:1  },
  { key:'Final',         zh:'🏆 決賽',     en:'🏆 The Final',   dates:'Jul 23',    total:1  },
];

(function () {
  function renderUpdatedTag() {
    var tag = document.getElementById('updated-tag');
    if (tag) tag.textContent = t('score_updated_label', { date: SCORES_UPDATED });
  }

  function renderScores() {
    var area = document.getElementById('scores-area');
    if (!area) return;

    if (!FINAL_SCORES || FINAL_SCORES.length === 0) {
      area.innerHTML = `
        <div class="empty-box fade-in">
          <div class="emoji">🕐</div>
          <h3>${t('score_empty_title')}</h3>
          <p>${t('score_empty_body')}</p>
        </div>`;
      return;
    }

    var isEn = getLang() === 'en';
    var rows = FINAL_SCORES.map(function (m) {
      // Build detail row (goals, cards, description)
      var evts = [];
      (m.goals || []).forEach(function(g) {
        evts.push('<span class="evt-goal">⚽ ' + g.scorer + ' ' + g.minute + '</span>');
      });
      (m.cards || []).forEach(function(c) {
        if (c.type === 'red')
          evts.push('<span class="evt-red">🟥 ' + c.player + ' ' + c.minute + '</span>');
      });
      var eventsHTML = evts.length
        ? '<div class="match-events">' + evts.join('') + '</div>' : '';
      var desc = isEn ? (m.descriptionEn || m.description || '') : (m.description || '');
      var descHTML = desc ? '<div class="match-desc">' + desc + '</div>' : '';
      var detailRow = (eventsHTML || descHTML)
        ? '<tr><td colspan="5" class="match-detail">' + eventsHTML + descHTML + '</td></tr>'
        : '';

      return `<tr>
          <td>${tx(m.date)}</td>
          <td><div class="match-cell">
            <span>${m.homeFlag} ${tx(m.home)}</span>
            <span class="score-val">${m.homeScore} – ${m.awayScore}</span>
            <span>${tx(m.away)} ${m.awayFlag}</span>
          </div></td>
          <td><span class="status-pill status-final">${t('score_status_final')}</span></td>
          <td>${tx(m.round)}</td>
          <td>${tx(m.venue)}</td>
        </tr>` + detailRow;
    }).join('');

    area.innerHTML = `
      <div class="score-table-wrap fade-in">
        <table class="score-table">
          <thead>
            <tr>
              <th>${t('score_col_date')}</th>
              <th>${t('score_col_match')}</th>
              <th></th>
              <th>${t('score_col_round')}</th>
              <th>${t('score_col_venue')}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  // ── Group standings ────────────────────────────────────────
  function computeStandings() {
    var data = {};
    GROUPS.forEach(function(g) {
      g.teams.forEach(function(t) {
        data[t.name] = { groupId:g.id, flag:t.flag, mp:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 };
      });
    });
    FINAL_SCORES.forEach(function(m) {
      var h = data[m.home], a = data[m.away];
      if (!h || !a || h.groupId !== a.groupId) return;
      h.mp++; a.mp++;
      h.gf += m.homeScore; h.ga += m.awayScore;
      a.gf += m.awayScore; a.ga += m.homeScore;
      if (m.homeScore > m.awayScore)       { h.w++; h.pts += 3; a.l++; }
      else if (m.homeScore === m.awayScore) { h.d++; h.pts++;    a.d++; a.pts++; }
      else                                 { h.l++;              a.w++; a.pts += 3; }
    });
    return data;
  }

  function renderStandings() {
    var grid = document.getElementById('standings-grid');
    if (!grid || typeof GROUPS === 'undefined') return;
    var st = computeStandings();
    var isEn = getLang() === 'en';

    grid.innerHTML = GROUPS.map(function(g, gi) {
      var label = t('idx_group_label', { id: g.id });
      var hdrStyle = 'style="background:' + (GRP_COLORS[gi] || GRP_COLORS[0]) + '"';
      var sorted = g.teams.map(function(t) {
        return Object.assign({ name: t.name },
          st[t.name] || { flag:t.flag, mp:0,w:0,d:0,l:0,gf:0,ga:0,pts:0 });
      }).sort(function(a, b) {
        if (b.pts !== a.pts) return b.pts - a.pts;
        var gd = (b.gf - b.ga) - (a.gf - a.ga);
        if (gd !== 0) return gd;
        if (b.gf !== a.gf) return b.gf - a.gf;
        return a.name < b.name ? -1 : 1;
      });

      var rows = sorted.map(function(tm, i) {
        var gd = tm.gf - tm.ga;
        return '<tr class="srow' + (i < 2 ? ' qualify' : '') + '">' +
          '<td class="scol-pos">' + (i + 1) + '</td>' +
          '<td class="scol-team">' + tm.flag + ' <span>' + tm.name + '</span></td>' +
          '<td>' + tm.mp + '</td><td>' + tm.w + '</td><td>' + tm.d + '</td><td>' + tm.l + '</td>' +
          '<td>' + tm.gf + '</td><td>' + tm.ga + '</td>' +
          '<td class="scol-gd">' + (gd > 0 ? '+' : '') + gd + '</td>' +
          '<td class="scol-pts">' + tm.pts + '</td>' +
          '</tr>';
      }).join('');

      return '<div class="group-block">' +
        '<div class="group-block-hdr" ' + hdrStyle + '>' + label + '</div>' +
        '<div class="table-scroll"><table class="stand-tbl">' +
          '<thead><tr class="stand-hrow">' +
            '<th>#</th><th class="th-team">' + (isEn ? 'Team' : '球隊') + '</th>' +
            '<th title="Matches Played">MP</th><th title="Wins">W</th>' +
            '<th title="Draws">D</th><th title="Losses">L</th>' +
            '<th title="Goals For">GF</th><th title="Goals Against">GA</th>' +
            '<th title="Goal Difference">GD</th><th title="Points">Pts</th>' +
          '</tr></thead>' +
          '<tbody>' + rows + '</tbody>' +
        '</table></div>' +
      '</div>';
    }).join('');
  }

  // ── Knockout stage ─────────────────────────────────────
  function renderKnockout() {
    var area = document.getElementById('knockout-area');
    if (!area) return;
    var isEn = getLang() === 'en';

    // Collect results grouped by knockout round key
    var koMap = {};
    FINAL_SCORES.forEach(function(m) {
      KO_ROUNDS.forEach(function(r) {
        if (m.round === r.key) {
          if (!koMap[r.key]) koMap[r.key] = [];
          koMap[r.key].push(m);
        }
      });
    });

    var hasAny = KO_ROUNDS.some(function(r) { return koMap[r.key] && koMap[r.key].length > 0; });

    var roundCards = KO_ROUNDS.map(function(r) {
      var isFinal = r.key === 'Final';
      var label = isEn ? r.en : r.zh;
      var results = koMap[r.key] || [];
      var matchHTML = results.length > 0
        ? results.map(function(m) {
            return '<div class="ko-match">' +
              '<span class="ko-team">' + m.homeFlag + ' ' + tx(m.home) + '</span>' +
              '<span class="ko-score">' + m.homeScore + ' – ' + m.awayScore + '</span>' +
              '<span class="ko-team right">' + tx(m.away) + ' ' + m.awayFlag + '</span>' +
              '</div>';
          }).join('')
        : '<div class="ko-tbd">🔒 ' + r.total + (isEn ? ' matches — pending' : ' 場賽事 — 待確定') + '</div>';

      return '<div class="ko-round-card' + (isFinal ? ' ko-final' : '') + '">' +
        '<div class="ko-round-hdr"><span>' + label + '</span><span class="ko-dates">' + r.dates + '</span></div>' +
        '<div class="ko-round-body">' + matchHTML + '</div>' +
        '</div>';
    }).join('');

    var banner = !hasAny
      ? '<div class="ko-coming-soon">' +
          '<div class="ko-icon">🏆</div>' +
          '<p>' + (isEn ? 'Knockout stage begins July 2, 2026' : '淘汰賽將於 2026年7月2日 開始') + '</p>' +
          '<p style="font-size:0.76rem;margin-top:0.5rem;color:var(--muted)">' +
            (isEn ? 'Group stage results will determine the bracket.' : '小組賽結果將決定淘汰賽對陣。') + '</p>' +
          '</div>'
      : '';

    area.innerHTML = banner + '<div class="ko-grid">' + roundCards + '</div>';
  }

  // ── Tab switching ───────────────────────────────────────
  document.querySelectorAll('[data-stab]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-stab]').forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
      btn.classList.add('active');
      var pane = document.getElementById('stab-' + btn.dataset.stab);
      if (pane) pane.classList.add('active');
    });
  });

  renderUpdatedTag();
  renderStandings();
  renderScores();
  renderKnockout();
})();
