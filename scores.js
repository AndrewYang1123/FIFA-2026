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

const FINAL_SCORES = [
  // Populated automatically by the daily score-update job.
  // Example of what an entry will look like once added:
  // { date: 'Jun 11', round: 'Matchday 1', home: 'Mexico', away: 'Poland',
  //   homeFlag: '🇲🇽', awayFlag: '🇵🇱', homeScore: 2, awayScore: 1,
  //   venue: 'Estadio Azteca' }
];

const SCORES_UPDATED = '2026-06-05';

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

  renderUpdatedTag();
  renderScores();
})();
