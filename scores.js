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
    venue:'Estadio Azteca' }
];

const SCORES_UPDATED = '2026-06-11';

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

    var rows = FINAL_SCORES.map(function (m) {
      return `
        <tr>
          <td>${tx(m.date)}</td>
          <td>
            <div class="match-cell">
              <span>${m.homeFlag} ${tx(m.home)}</span>
              <span class="score-val">${m.homeScore} – ${m.awayScore}</span>
              <span>${tx(m.away)} ${m.awayFlag}</span>
            </div>
          </td>
          <td><span class="status-pill status-final">${t('score_status_final')}</span></td>
          <td>${tx(m.round)}</td>
          <td>${tx(m.venue)}</td>
        </tr>`;
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

    grid.innerHTML = GROUPS.map(function(g) {
      var label = t('idx_group_label', { id: g.id });
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
        '<div class="group-block-hdr">' + label + '</div>' +
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

  renderUpdatedTag();
  renderStandings();
  renderScores();
})();
