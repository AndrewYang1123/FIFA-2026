/* ============================================================
   i18n.js — Lightweight bilingual (繁中 / English) layer
   for the 2026 FIFA World Cup analysis site.

   Usage:
   - t('key')            -> translated plain string for current language
   - t('key', {a:'X'})   -> translated string with {a} placeholders replaced
   - tx('中文片語...')    -> best-effort substring translation of Chinese
                             strings embedded inside data arrays (country
                             names, city names, description sentences) when
                             the current language is English; returns the
                             original string untouched in Chinese mode
   - applyI18n()         -> walks the DOM applying data-i18n / data-i18n-html
                             / data-i18n-placeholder / data-i18n-title / data-i18n-tx
                             (the last applies tx() substring translation to
                             static elements containing embedded proper nouns)
   - getLang()/setLang() -> persisted via localStorage, reloads the page
   ============================================================ */

(function () {
  var LANG_KEY = 'fifa2026_lang';

  window.getLang = function () {
    return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'zh';
  };

  window.setLang = function (lang) {
    localStorage.setItem(LANG_KEY, lang === 'en' ? 'en' : 'zh');
    location.reload();
  };

  /* ---------------------------------------------------------
     Flat translation dictionary. Every key maps to {zh, en}.
     Use {placeholder} tokens for dynamic values via t(key, vars)
     --------------------------------------------------------- */
  var I18N = {
    // ---------- shared / nav ----------
    nav_schedule:   { zh: `🗓️ 賽程`,        en: `🗓️ Schedule` },
    nav_teams:      { zh: `🌍 球隊&球員`,    en: `🌍 Teams & Players` },
    nav_analysis:   { zh: `📊 分析`,         en: `📊 Analysis` },
    nav_prediction: { zh: `🔮 預測`,         en: `🔮 Prediction` },
    nav_highlights: { zh: `🎬 精華`,         en: `🎬 Highlights` },
    nav_betting:    { zh: `🎰 投注`,         en: `🎰 Betting` },
    nav_scores:     { zh: `⚡ 即時比分`,      en: `⚡ Live Scores` },
    nav_community:  { zh: `💬 社群`,          en: `💬 Community` },

    // ============================================================
    // INDEX.HTML — Schedule page
    // ============================================================
    idx_title: { zh: `2026 FIFA World Cup — 完整賽程`, en: `2026 FIFA World Cup — Full Schedule` },
    idx_hero_badge: { zh: `2026 FIFA World Cup™`, en: `2026 FIFA World Cup™` },
    idx_hero_h1: { zh: `完整賽程總覽`, en: `Complete Schedule Overview` },
    idx_hero_p1: { zh: `從首場比賽到決賽冠軍 — 48支球隊，104場比賽，一個冠軍`, en: `From the opening match to the championship final — 48 teams, 104 matches, one champion` },
    idx_hero_p2: { zh: `📍 美國 · 加拿大 · 墨西哥 &nbsp;|&nbsp; 🗓️ 2026年6月11日 — 7月23日`, en: `📍 USA · Canada · Mexico &nbsp;|&nbsp; 🗓️ Jun 11 – Jul 23, 2026` },
    idx_stat_teams: { zh: `參賽球隊`, en: `Teams` },
    idx_stat_groups: { zh: `組別數量`, en: `Groups` },
    idx_stat_matches: { zh: `總比賽場數`, en: `Matches` },
    idx_stat_venues: { zh: `比賽場館`, en: `Venues` },
    idx_stat_hosts: { zh: `主辦國家`, en: `Host Nations` },
    idx_stat_days: { zh: `比賽天數`, en: `Match Days` },
    idx_section_groups: { zh: `⚽ 分組情況 — 12組共48隊`, en: `⚽ Group Stage — 12 Groups, 48 Teams` },
    idx_section_schedule: { zh: `🗓️ 完整賽程 — 從首場到決賽`, en: `🗓️ Full Schedule — From Kickoff to Final` },
    idx_section_venues: { zh: `🏟️ 16座比賽場館`, en: `🏟️ 16 Match Venues` },
    idx_group_label: { zh: `🏆 第{id}組`, en: `🏆 Group {id}` },
    idx_host_tag: { zh: `主`, en: `Host` },
    idx_match_group: { zh: `第{group}組`, en: `Group {group}` },
    idx_venue_capacity: { zh: `容量: {cap}`, en: `Capacity: {cap}` },

    // ============================================================
    // TEAMS.HTML — Teams & players
    // ============================================================
    team_title: { zh: `2026 FIFA World Cup — 球隊與球員`, en: `2026 FIFA World Cup — Teams & Players` },
    team_hero_badge: { zh: `48支參賽球隊`, en: `48 Participating Teams` },
    team_hero_h1: { zh: `所有球隊與球員名單`, en: `All Teams & Player Rosters` },
    team_hero_p1: { zh: `2026年FIFA世界盃全部48個參賽國家及主要球員陣容`, en: `All 48 nations competing in the 2026 FIFA World Cup, with their key players` },
    team_hero_p2: { zh: `⭐ 金色標籤 = 王牌球員`, en: `⭐ Gold tag = Star Player` },
    team_stat_teams: { zh: `參賽球隊`, en: `Teams` },
    team_stat_confs: { zh: `洲際聯盟`, en: `Confederations` },
    team_stat_ppt: { zh: `每隊球員人數`, en: `Players per Team` },
    team_stat_total: { zh: `總球員人數`, en: `Total Players` },
    team_conf_all: { zh: `🌍 全部`, en: `🌍 All` },
    team_conf_conmebol: { zh: `🌎 南美洲`, en: `🌎 South America` },
    team_conf_uefa: { zh: `🌍 歐洲`, en: `🌍 Europe` },
    team_conf_caf: { zh: `🌍 非洲`, en: `🌍 Africa` },
    team_conf_afc: { zh: `🌏 亞洲`, en: `🌏 Asia` },
    team_conf_concacaf: { zh: `🌎 北美洲`, en: `🌎 North America` },
    team_conf_ofc: { zh: `🌊 大洋洲`, en: `🌊 Oceania` },
    team_search_placeholder: { zh: `🔍 搜尋球隊或球員名字...`, en: `🔍 Search teams or players...` },
    team_fifa_rank: { zh: `FIFA排名 #{rank} &nbsp;|&nbsp; {conf}`, en: `FIFA Rank #{rank} &nbsp;|&nbsp; {conf}` },
    team_coach: { zh: `👤 主帥: {coach}`, en: `👤 Coach: {coach}` },
    team_group_badge: { zh: `第{group}組`, en: `Group {group}` },
    team_key_players: { zh: `主要球員陣容`, en: `Key Players` },
    team_no_results: { zh: `找不到符合的球隊或球員`, en: `No matching teams or players found` },

    // ============================================================
    // ANALYSIS.HTML — Top 20 analysis
    // ============================================================
    an_title: { zh: `2026 FIFA World Cup — 前20強分析`, en: `2026 FIFA World Cup — Top 20 Analysis` },
    an_hero_badge: { zh: `深度分析`, en: `In-Depth Analysis` },
    an_hero_h1: { zh: `前20強球隊深度分析`, en: `Top 20 Teams: In-Depth Analysis` },
    an_hero_p: { zh: `優勢、劣勢、王牌球員及奪冠機率全面解析`, en: `A complete breakdown of strengths, weaknesses, star players and title odds` },
    an_stat1_lbl: { zh: `阿根廷 最大熱門`, en: `Argentina — Top Favorite` },
    an_stat2_lbl: { zh: `阿根廷奪冠機率`, en: `Argentina's Title Probability` },
    an_stat3_lbl: { zh: `梅西 本屆最佳球員`, en: `Messi — Tournament's Best Player` },
    an_stat4_lbl: { zh: `南美洲球隊入列`, en: `South American Teams Listed` },
    an_section_title: { zh: `📊 前20強 — 優劣分析 + 王牌球員`, en: `📊 Top 20 — Strengths, Weaknesses & Star Players` },
    an_section_sub: { zh: `奪冠機率基於FIFA排名、近期成績、歷史戰績及陣容深度綜合評估`, en: `Title probabilities are a composite estimate based on FIFA ranking, recent form, historical record and squad depth` },
    an_world_rank: { zh: `FIFA世界排名 #{wr}`, en: `FIFA World Ranking #{wr}` },
    an_title_prob: { zh: `奪冠機率`, en: `Title Probability` },
    an_strengths: { zh: `✅ 優勢`, en: `✅ Strengths` },
    an_weaknesses: { zh: `❌ 劣勢`, en: `❌ Weaknesses` },
    an_ace_label: { zh: `王牌球員 · {pos} · {club}`, en: `Star Player · {pos} · {club}` },
    an_odds_label: { zh: `彩票賠率約 {odds}`, en: `Approx. lottery odds {odds}` },

    // ============================================================
    // PREDICTION.HTML
    // ============================================================
    pred_title: { zh: `2026 FIFA World Cup — 預測 & 彩票建議`, en: `2026 FIFA World Cup — Prediction & Lottery Tips` },
    pred_hero_badge: { zh: `AI 預測分析`, en: `AI Prediction Analysis` },
    pred_hero_h1: { zh: `2026冠軍預測 & 彩票建議`, en: `2026 Champion Prediction & Lottery Tips` },
    pred_hero_p: { zh: `基於過去50年世界盃戰績深度分析 — 誰最有可能舉起大力神盃？`, en: `An in-depth analysis based on 50 years of World Cup history — who is most likely to lift the trophy?` },
    pred_podium_h2: { zh: `👑 2026冠軍預測排名`, en: `👑 2026 Champion Prediction Rankings` },
    pred_podium_p: { zh: `綜合評估：歷史戰績、現役陣容、FIFA排名、戰術體系、近期狀態`, en: `Comprehensive evaluation: historical record, current squad, FIFA ranking, tactical system, recent form` },
    pred_2nd_fav: { zh: `🥈 第二熱門`, en: `🥈 2nd Favorite` },
    pred_top_fav: { zh: `🥇 最大熱門`, en: `🥇 Top Favorite` },
    pred_3rd_fav: { zh: `🥉 第三熱門`, en: `🥉 3rd Favorite` },
    pred_title_prob_lbl: { zh: `奪冠機率`, en: `Title Probability` },
    pred_france_note: { zh: `2018冠軍 · 2022亞軍<br>姆巴佩領軍再衝冠`, en: `2018 champions · 2022 runners-up<br>Mbappé leads another title charge` },
    pred_argentina_note: { zh: `2022衛冕冠軍<br>梅西最後一舞？`, en: `Defending 2022 champions<br>Messi's last dance?` },
    pred_spain_note: { zh: `EURO 2024冠軍<br>亞馬爾橫空出世`, en: `EURO 2024 champions<br>Lamine Yamal bursts onto the scene` },
    pred_section_prob: { zh: `📈 各隊奪冠機率排名`, en: `📈 Title-Probability Rankings by Team` },
    pred_section_history: { zh: `📜 過去50年世界盃戰績 (1974–2022)`, en: `📜 50 Years of World Cup History (1974–2022)` },
    pred_section_champstats: { zh: `🏆 歷屆冠軍統計 (全部歷史)`, en: `🏆 All-Time Champions (Full History)` },
    pred_section_patterns: { zh: `🔍 歷史規律分析`, en: `🔍 Historical Pattern Analysis` },
    pred_th_year: { zh: `年份`, en: `Year` },
    pred_th_host: { zh: `主辦國`, en: `Host` },
    pred_th_champion: { zh: `🏆 冠軍`, en: `🏆 Champion` },
    pred_th_runner: { zh: `🥈 亞軍`, en: `🥈 Runner-up` },
    pred_th_third: { zh: `🥉 季軍`, en: `🥉 Third Place` },
    pred_th_goals: { zh: `進球數`, en: `Goals` },
    pred_wins_label: { zh: `{n}次`, en: `{n} titles` },

    pred_card1_h: { zh: `📊 南美洲 vs 歐洲`, en: `📊 South America vs Europe` },
    pred_card1_p: {
      zh: `在過去13屆世界盃中，歐洲球隊奪冠7次（德國4次、法國2次、義大利1次），南美洲奪冠6次（巴西3次、阿根廷2次、烏拉圭1次）。<br><br><strong style="color:var(--text)">在美洲舉辦時，南美洲球隊有明顯優勢：</strong>1978年阿根廷、1950年烏拉圭、1970年巴西都在美洲舉辦的賽事中奪冠。`,
      en: `In the last 13 World Cups, European sides have lifted the trophy 7 times (Germany 4, France 2, Italy 1), while South American sides have won 6 (Brazil 3, Argentina 2, Uruguay 1).<br><br><strong style="color:var(--text)">South American teams hold a clear edge when the tournament is hosted in the Americas:</strong> Argentina in 1978, Uruguay in 1950, and Brazil in 1970 all won on home-continent soil.`
    },
    pred_card2_h: { zh: `🔁 衛冕冠軍魔咒`, en: `🔁 The Defending-Champions Curse` },
    pred_card2_p: {
      zh: `歷史上衛冕冠軍成功衛冕的只有<strong style="color:var(--text)">義大利（1934→1938）</strong>。近年衛冕冠軍幾乎必然在小組賽或十六強被淘汰：<br>• 2018法國奪冠 → 2022小組出線但決賽輸<br>• 2014德國奪冠 → 2018小組出局<br>• 2010西班牙奪冠 → 2014小組出局`,
      en: `Only <strong style="color:var(--text)">Italy (1934→1938)</strong> has ever successfully defended a World Cup title. In recent decades, defending champions have almost always crashed out in the group stage or Round of 16:<br>• 2018 champions France → reached the 2022 final but lost<br>• 2014 champions Germany → group-stage exit in 2018<br>• 2010 champions Spain → group-stage exit in 2014`
    },
    pred_card3_h: { zh: `⚽ 熱門從未落空`, en: `⚽ The Favorites Rarely Disappoint` },
    pred_card3_p: {
      zh: `世界盃歷史上，最終冠軍幾乎都來自<strong style="color:var(--text)">開賽前排名前5的熱門</strong>。唯一例外是1966英格蘭（主場）。<br><br>2026年賠率最低的前5支球隊（阿根廷、法國、西班牙、巴西、德國）佔了約<strong style="color:var(--gold)">63%</strong>的預測奪冠機率。`,
      en: `Throughout World Cup history, the eventual champion has almost always come from the <strong style="color:var(--text)">pre-tournament top-5 favorites</strong>. The lone exception was hosts England in 1966.<br><br>The five lowest-odds teams for 2026 — Argentina, France, Spain, Brazil and Germany — together account for roughly <strong style="color:var(--gold)">63%</strong> of the predicted title probability.`
    },
    pred_card4_h: { zh: `🌎 主辦國優勢`, en: `🌎 Host-Nation Advantage` },
    pred_card4_p: {
      zh: `在美國、加拿大、墨西哥三國聯合主辦下，北美球隊尤其是<strong style="color:var(--text)">美國和墨西哥</strong>將受益於主場球迷支持。<br><br>歷史上主辦國平均進入八強的機率是非主辦國的2倍。美國年輕一代如普利西奇、雷納可能創造奇蹟。`,
      en: `With the USA, Canada and Mexico co-hosting, North American sides — especially <strong style="color:var(--text)">the USA and Mexico</strong> — stand to benefit from home-crowd support.<br><br>Historically, host nations are roughly twice as likely to reach the quarterfinals as non-hosts. The USA's rising generation — Pulisic, Reyna and others — could spring a surprise.`
    },

    pred_section_lottery: { zh: `🎰 彩票建議 — 如何投注才最划算？`, en: `🎰 Lottery Tips — How to Bet Smart` },
    pred_disclaimer_h: { zh: `⚠️ 重要聲明`, en: `⚠️ Important Disclaimer` },
    pred_disclaimer_p: { zh: `以下分析純屬統計預測，不構成真實投注建議。世界盃充滿意外，請理性對待任何預測。`, en: `The following analysis is a purely statistical projection and does not constitute real betting advice. The World Cup is full of surprises — please treat every prediction with a clear head.` },

    pred_strat1_h: { zh: `🏆 策略一：買確定性（低賠率·高概率）`, en: `🏆 Strategy 1: Bet on Certainty (Low Odds · High Probability)` },
    pred_strat1_p: { zh: `如果你想穩穩贏，選擇熱門隊冠軍 — 賠率低但機率最高`, en: `If you want a steady win, back a favorite to win it all — lower payouts, but the highest probability` },
    pred_lottery_argentina: { zh: `最大熱門 · 22%機率<br>衛冕冠軍 + 梅西`, en: `Top favorite · 22% probability<br>Defending champions + Messi` },
    pred_lottery_france: { zh: `第二熱門 · 18%機率<br>姆巴佩 + 強陣容`, en: `2nd favorite · 18% probability<br>Mbappé + a stacked squad` },
    pred_lottery_spain: { zh: `第三熱門 · 16%機率<br>EURO冠軍 + 亞馬爾`, en: `3rd favorite · 16% probability<br>EURO champions + Lamine Yamal` },
    pred_lottery_brazil: { zh: `南美洲強隊 · 12%機率<br>維尼修斯巔峰狀態`, en: `South American powerhouse · 12% probability<br>Vinícius Jr. in peak form` },

    pred_strat2_h: { zh: `💡 策略二：買平衡（中賠率·合理概率）`, en: `💡 Strategy 2: Bet on Balance (Medium Odds · Reasonable Probability)` },
    pred_strat2_p: { zh: `賠率與機率相對平衡，適合分散投注`, en: `Odds and probability are reasonably matched here — good for spreading your bets around` },
    pred_lottery_germany: { zh: `正在重建 · 5%機率<br>維爾茨+穆西亞拉`, en: `Rebuilding squad · 5% probability<br>Wirtz + Musiala` },
    pred_lottery_portugal: { zh: `平衡投注 · 8%機率<br>C羅最後世界盃`, en: `Balanced bet · 8% probability<br>Ronaldo's last World Cup` },
    pred_lottery_netherlands: { zh: `暗馬選手 · 7%機率<br>范迪克領軍`, en: `Dark horse · 7% probability<br>Led by Van Dijk` },
    pred_lottery_colombia: { zh: `Copa冠軍 · 5%機率<br>詹姆斯復甦`, en: `Copa América champions · 5% probability<br>James Rodríguez resurgence` },

    pred_strat3_h: { zh: `🎲 策略三：買冷門（高賠率·低概率）`, en: `🎲 Strategy 3: Bet on Long Shots (High Odds · Low Probability)` },
    pred_strat3_p: { zh: `小注博大賠 — 歷史上每屆都有黑馬，2022摩洛哥進了四強就是最佳例子`, en: `Small stakes, big potential payouts — every World Cup has its dark horse, and Morocco's 2022 semifinal run is the best example` },
    pred_lottery_morocco: { zh: `非洲最強 · 3%機率<br>2022四強黑馬`, en: `Africa's finest · 3% probability<br>2022 semifinal dark horse` },
    pred_lottery_uruguay: { zh: `比耶爾薩戰術 · 3%機率<br>努涅斯+瓦爾維德`, en: `Bielsa's tactics · 3% probability<br>Núñez + Valverde` },
    pred_lottery_usa: { zh: `主場優勢 · 4%機率<br>普利西奇 + 主場`, en: `Home advantage · 4% probability<br>Pulisic + home crowd` },
    pred_lottery_japan: { zh: `亞洲黑馬 · 2%機率<br>2022擊敗德國西班牙`, en: `Asia's dark horse · 2% probability<br>Beat Germany & Spain in 2022` },

    pred_verdict_h: { zh: `👑 最終預測 — 誰是2026冠軍？`, en: `👑 Final Verdict — Who Will Be 2026 Champion?` },
    pred_verdict_p: { zh: `預測冠軍首選。衛冕冠軍、梅西帶領、球隊凝聚力極強、陣容深度充足。在美洲舉辦的主場效應也對南美球隊有利。即使梅西年紀漸長，他仍是全球最頂尖的足球大腦。`, en: `Our top pick to lift the trophy. As defending champions led by Messi, Argentina has exceptional team chemistry and squad depth, and the home-continent effect of hosting in the Americas favors South American sides. Even as he ages, Messi remains one of the sharpest footballing minds on the planet.` },
    pred_verdict_prob: { zh: `奪冠機率：22%`, en: `Title Probability: 22%` },
    pred_combo_h: { zh: `📋 投注組合建議`, en: `📋 Suggested Betting Combinations` },
    pred_combo_conservative_h: { zh: `🛡️ 保守型組合`, en: `🛡️ Conservative Combo` },
    pred_combo_conservative_p: { zh: `阿根廷(50%) + 法國(30%) + 西班牙(20%)<br>預期回報：穩定低風險`, en: `Argentina (50%) + France (30%) + Spain (20%)<br>Expected return: steady, low risk` },
    pred_combo_balanced_h: { zh: `⚖️ 平衡型組合`, en: `⚖️ Balanced Combo` },
    pred_combo_balanced_p: { zh: `巴西 + 德國 + 葡萄牙 + 美國<br>預期回報：中風險中回報`, en: `Brazil + Germany + Portugal + USA<br>Expected return: medium risk, medium reward` },
    pred_combo_aggressive_h: { zh: `🎲 冒險型組合`, en: `🎲 Aggressive Combo` },
    pred_combo_aggressive_p: { zh: `摩洛哥 + 日本 + 哥倫比亞 + 美國<br>預期回報：低機率高賠率`, en: `Morocco + Japan + Colombia + USA<br>Expected return: low probability, high payout` },
    pred_closing_note: { zh: `⚠️ 足球最美的地方就是它的不可預測性。2022年沒有人預測摩洛哥會打進四強；2018年沒有人預測克羅埃西亞打進決賽。請永遠記住：任何預測都不是百分百準確的。`, en: `⚠️ The most beautiful thing about football is its unpredictability. No one foresaw Morocco reaching the 2022 semifinals, or Croatia the 2018 final. Always remember: no prediction is ever 100% certain.` },

    // ============================================================
    // HIGHLIGHTS.HTML
    // ============================================================
    hl_title: { zh: `2026 FIFA World Cup — 歷屆決賽精華`, en: `2026 FIFA World Cup — Past Finals Highlights` },
    hl_hero_badge: { zh: `近十屆決賽`, en: `Last 10 Finals` },
    hl_hero_h1: { zh: `🏆 世界盃決賽進球精華`, en: `🏆 World Cup Final Goal Highlights` },
    hl_hero_p: { zh: `從1986年到2022年 — 每屆決賽的關鍵進球記錄`, en: `From 1986 to 2022 — key goals from every World Cup final` },
    hl_notice: { zh: `⚠️ <strong>觀看說明：</strong>點擊「▶ 在 YouTube 觀看」按鈕即可跳轉至 YouTube 搜尋該屆決賽精華片段。部分影片依地區可能有版權限制。`, en: `⚠️ <strong>How to watch:</strong> Click the "▶ Watch on YouTube" button to jump to a YouTube search for that final's highlights. Some clips may carry regional copyright restrictions.` },
    hl_section_timeline: { zh: `⏱️ 快速導覽`, en: `⏱️ Quick Navigation` },
    hl_section_finals: { zh: `🎬 歷屆決賽精華影片`, en: `🎬 Final Highlight Videos` },
    hl_champion_ribbon: { zh: `🏆 冠軍：{flag} {champion}`, en: `🏆 Champion: {flag} {champion}` },
    hl_host_label: { zh: `主辦：{host} | {venue}`, en: `Host: {host} | {venue}` },
    hl_video_title: { zh: `{year} FIFA決賽精華`, en: `{year} FIFA Final Highlights` },
    hl_click_to_play: { zh: `點擊播放影片`, en: `Click to play the video` },
    hl_goals_count: { zh: `⚽ {n} 進球`, en: `⚽ {n} goals` },
    hl_goals_record: { zh: `⚽ 進球記錄`, en: `⚽ Goal Log` },
    hl_search_btn: { zh: `▶ 在 YouTube 搜尋此場決賽精華`, en: `▶ Search this final on YouTube` },
    hl_unembeddable: { zh: `此影片無法嵌入<br><span style="color:var(--accent)">點擊前往 YouTube 搜尋</span>`, en: `This video cannot be embedded here<br><span style="color:var(--accent)">Click to search for it on YouTube</span>` },
    hl_tag_pen: { zh: `PK`, en: `PEN` },
    hl_tag_og: { zh: `OG`, en: `OG` },

    // ============================================================
    // BETTING.HTML — Vancouver / BC betting guide
    // ============================================================
    bet_title: { zh: `2026 FIFA World Cup — 溫哥華彩券投注指南`, en: `2026 FIFA World Cup — Vancouver Betting Guide` },
    bet_hero_badge: { zh: `溫哥華 · BC省`, en: `Vancouver · British Columbia` },
    bet_hero_h1: { zh: `🎰 世界盃彩券投注完整指南`, en: `🎰 The Complete World Cup Betting Guide` },
    bet_hero_p: { zh: `在溫哥華如何合法投注2026 FIFA世界盃 — 平台選擇、投注方式、最佳策略`, en: `How to legally bet on the 2026 FIFA World Cup in Vancouver — platforms, bet types and winning strategies` },

    bet_disclaimer_h: { zh: `⚠️ 免責聲明`, en: `⚠️ Disclaimer` },
    bet_disclaimer_p: { zh: `以下內容僅供教育及娛樂參考用途。投注有風險，請量力而為。BC省法定投注年齡為<strong>19歲</strong>。如有賭博問題，請致電 BC Problem Gambling Helpline：<strong>1-888-795-6111</strong>（24小時免費）。`, en: `The following content is for educational and entertainment purposes only. Betting carries risk — please play within your means. The legal betting age in BC is <strong>19</strong>. If gambling becomes a problem, call the BC Problem Gambling Helpline: <strong>1-888-795-6111</strong> (free, 24 hours).` },

    bet_section1_h: { zh: `🏛️ 溫哥華合法投注平台`, en: `🏛️ Legal Betting Platforms in Vancouver` },
    bet_section1_sub: { zh: `在BC省，以下平台均受監管，合法安全`, en: `Every platform below is regulated, legal and safe to use in BC` },
    bet_p1_h: { zh: `PlayNow.com <span class="platform-badge badge-official">✅ BC省官方</span><span class="platform-badge badge-legal">🔒 BCLC授權</span>`, en: `PlayNow.com <span class="platform-badge badge-official">✅ Official BC Platform</span><span class="platform-badge badge-legal">🔒 BCLC Licensed</span>` },
    bet_p1_p1: { zh: `由BC彩票公司（BCLC）直接營運，是BC省唯一官方線上投注平台。支援體育投注（Pro·Line）、彩票、Keno等。`, en: `Operated directly by the BC Lottery Corporation (BCLC) — the only official online betting platform in BC. Supports sports betting (Pro·Line), lottery, Keno and more.` },
    bet_p1_p2: { zh: `<strong style="color:var(--text)">網址：</strong>playnow.com &nbsp;|&nbsp; <strong style="color:var(--text)">App：</strong>iOS & Android`, en: `<strong style="color:var(--text)">Website:</strong> playnow.com &nbsp;|&nbsp; <strong style="color:var(--text)">App:</strong> iOS & Android` },
    bet_p1_pill1: { zh: `🏈 體育投注`, en: `🏈 Sports Betting` },
    bet_p1_pill2: { zh: `💳 Interac存款`, en: `💳 Interac Deposits` },
    bet_p1_pill3: { zh: `🇨🇦 加幣交易`, en: `🇨🇦 CAD Transactions` },
    bet_p1_pill4: { zh: `📱 手機App`, en: `📱 Mobile App` },
    bet_p2_h: { zh: `BetMGM Canada <span class="platform-badge badge-legal">🔒 省級授權</span><span class="platform-badge badge-bonus">🎁 迎新優惠</span>`, en: `BetMGM Canada <span class="platform-badge badge-legal">🔒 Provincially Licensed</span><span class="platform-badge badge-bonus">🎁 Welcome Bonus</span>` },
    bet_p2_p1: { zh: `由BC省私人授權運營，提供豐富的足球盤口，含實時投注、特殊玩法等。2024年獲BC省私人線上博彩許可。`, en: `Privately licensed to operate in BC, with extensive football markets including live betting and specialty wagers. Received its BC private online-gambling licence in 2024.` },
    bet_p2_p2: { zh: `<strong style="color:var(--text)">特點：</strong>世界盃盤口最豐富，賠率有時優於PlayNow`, en: `<strong style="color:var(--text)">Highlights:</strong> The richest selection of World Cup markets — odds sometimes beat PlayNow's` },
    bet_p2_pill1: { zh: `📊 實時投注`, en: `📊 Live Betting` },
    bet_p2_pill2: { zh: `💰 最高$1,000迎新`, en: `💰 Up to $1,000 Welcome Bonus` },
    bet_p2_pill3: { zh: `⚽ 足球專區`, en: `⚽ Football Hub` },
    bet_p3_h: { zh: `Bet365 Canada <span class="platform-badge badge-legal">🔒 省級授權</span>`, en: `Bet365 Canada <span class="platform-badge badge-legal">🔒 Provincially Licensed</span>` },
    bet_p3_p1: { zh: `全球最大線上投注平台之一，在BC省獲私人授權。賠率競爭力強，足球選項最多，含串關、亞盤、大小球等多種玩法。`, en: `One of the world's largest online betting platforms, privately licensed in BC. Highly competitive odds and the broadest football markets, including parlays, Asian handicaps and over/under bets.` },
    bet_p3_p2: { zh: `<strong style="color:var(--text)">特點：</strong>全球最多足球盤口，實時直播+投注`, en: `<strong style="color:var(--text)">Highlights:</strong> The most football markets worldwide, plus live streaming + in-play betting` },
    bet_p3_pill1: { zh: `🌍 全球足球`, en: `🌍 Global Football` },
    bet_p3_pill2: { zh: `📺 賽事直播`, en: `📺 Live Streaming` },
    bet_p3_pill3: { zh: `🔄 現金兌換`, en: `🔄 Cash Out` },
    bet_p4_h: { zh: `FanDuel Canada <span class="platform-badge badge-legal">🔒 省級授權</span><span class="platform-badge badge-bonus">🎁 迎新優惠</span>`, en: `FanDuel Canada <span class="platform-badge badge-legal">🔒 Provincially Licensed</span><span class="platform-badge badge-bonus">🎁 Welcome Bonus</span>` },
    bet_p4_p1: { zh: `美式體育投注巨頭，在BC省獲授權。界面友好，適合新手，含每日獎勵和增強賠率促銷。`, en: `A giant of American sports betting, licensed in BC. Beginner-friendly interface, with daily rewards and odds-boost promotions.` },
    bet_p4_p2: { zh: `<strong style="color:var(--text)">特點：</strong>新手友好，促銷活動多，增強賠率`, en: `<strong style="color:var(--text)">Highlights:</strong> Beginner-friendly, frequent promotions, boosted odds` },
    bet_p4_pill1: { zh: `👶 新手友好`, en: `👶 Beginner Friendly` },
    bet_p4_pill2: { zh: `📈 增強賠率`, en: `📈 Boosted Odds` },
    bet_p4_pill3: { zh: `🎁 每日促銷`, en: `🎁 Daily Promos` },
    bet_inperson_h: { zh: `💡 實體投注選項`, en: `💡 In-Person Betting Options` },
    bet_inperson_p: { zh: `溫哥華市內也可前往<strong>Save-On-More（BC彩券合作零售商）</strong>或 BCLC 授權彩票零售點購買 Pro·Line 世界盃投注單。在 7-Eleven、Shoppers Drug Mart 等地均可找到。需要現金或 Debit 付款。`, en: `In Vancouver you can also visit a <strong>Save-On-More (BC lottery retail partner)</strong> or any BCLC-licensed lottery retailer to buy Pro·Line World Cup betting slips — available at 7-Eleven, Shoppers Drug Mart and similar locations. Cash or debit payment required.` },

    bet_section2_h: { zh: `📋 如何開戶（以PlayNow.com為例）`, en: `📋 How to Register (Using PlayNow.com as an Example)` },
    bet_step1_h: { zh: `訪問 PlayNow.com`, en: `Visit PlayNow.com` },
    bet_step1_p: { zh: `前往 <a href="https://www.playnow.com" target="_blank">playnow.com</a> 點擊「開戶」。必須是BC省居民，年齡19歲以上。`, en: `Go to <a href="https://www.playnow.com" target="_blank">playnow.com</a> and click "Register." You must be a BC resident aged 19 or over.` },
    bet_step2_h: { zh: `填寫個人資料`, en: `Fill in Your Details` },
    bet_step2_p: { zh: `輸入全名、出生日期、SIN（Social Insurance Number）後4位、BC省地址、電子郵件及手機號碼。`, en: `Enter your full name, date of birth, the last 4 digits of your SIN (Social Insurance Number), BC address, email and phone number.` },
    bet_step3_h: { zh: `身份驗證（KYC）`, en: `Identity Verification (KYC)` },
    bet_step3_p: { zh: `上傳有效身份證件：BC駕照、BC Services Card 或護照。通常幾分鐘內自動審核通過。`, en: `Upload a valid ID — a BC driver's licence, BC Services Card, or passport. Verification is usually automatic and takes just minutes.` },
    bet_step4_h: { zh: `存款`, en: `Make a Deposit` },
    bet_step4_p: { zh: `支援 Interac e-Transfer（最常用）、Visa Debit、預付卡。最低存款通常 $10 加幣。`, en: `Supports Interac e-Transfer (most common), Visa Debit and prepaid cards. The minimum deposit is usually CAD $10.` },
    bet_step5_h: { zh: `找到世界盃賽事`, en: `Find World Cup Matches` },
    bet_step5_p: { zh: `點擊「體育」→「Soccer/足球」→「FIFA World Cup 2026」即可看到所有可投注賽事。`, en: `Click "Sports" → "Soccer/Football" → "FIFA World Cup 2026" to see every match available for betting.` },
    bet_step6_h: { zh: `選擇投注並確認`, en: `Place and Confirm Your Bet` },
    bet_step6_p: { zh: `點選你想投注的結果，輸入金額，查看潛在獲利，點擊「下注」確認。記得截圖保存投注單！`, en: `Tap the outcome you want to back, enter your stake, review the potential payout, then tap "Place Bet" to confirm. Remember to screenshot your bet slip!` },

    bet_section3_h: { zh: `🎲 投注種類詳細說明`, en: `🎲 Bet Types Explained in Detail` },
    bet_risk_label: { zh: `風險：`, en: `Risk:` },

    bet_t1_h: { zh: `獨贏/勝負平（Moneyline / 1X2）`, en: `Match Result (Moneyline / 1X2)` },
    bet_t1_p: { zh: `最簡單的投注方式。選擇主隊贏（1）、平局（X）或客隊贏（2）。`, en: `The simplest bet of all — pick the home team to win (1), a draw (X), or the away team to win (2).` },
    bet_t1_odds: { zh: `賠率約 1.5x – 8x`, en: `Odds approx. 1.5x – 8x` },
    bet_t1_ex: { zh: `例：阿根廷 vs 法國<br>阿根廷贏 = 2.10x<br>平局 = 3.50x<br>法國贏 = 3.20x<br>投$100 買阿根廷 → 贏回$210`, en: `E.g.: Argentina vs France<br>Argentina win = 2.10x<br>Draw = 3.50x<br>France win = 3.20x<br>Bet $100 on Argentina → return $210` },

    bet_t2_h: { zh: `大小球（Over/Under）`, en: `Over/Under (Total Goals)` },
    bet_t2_p: { zh: `預測一場比賽的總進球數是「大於」還是「小於」某個數字（通常為2.5球）。不需要猜誰贏。`, en: `Predict whether a match's total goals will land "over" or "under" a set number (usually 2.5). No need to call the winner.` },
    bet_t2_odds: { zh: `賠率約 1.8x – 2.1x`, en: `Odds approx. 1.8x – 2.1x` },
    bet_t2_ex: { zh: `例：決賽大/小 2.5球<br>大球（3球或以上）= 1.90x<br>小球（2球或以下）= 1.90x<br>投$100 → 贏回$190`, en: `E.g.: Final, Over/Under 2.5 goals<br>Over (3+ goals) = 1.90x<br>Under (2 or fewer) = 1.90x<br>Bet $100 → return $190` },

    bet_t3_h: { zh: `亞洲讓球盤（Asian Handicap）`, en: `Asian Handicap` },
    bet_t3_p: { zh: `對強隊讓球，如強隊讓-1球，即強隊需贏兩球你才算贏。平衡強弱差距，賠率更接近2倍。`, en: `Gives the stronger side a goal handicap — e.g. a -1 handicap means they must win by two clear goals for your bet to land. It levels the gap and pushes odds closer to 2x.` },
    bet_t3_odds: { zh: `賠率約 1.85x – 2.05x`, en: `Odds approx. 1.85x – 2.05x` },
    bet_t3_ex: { zh: `例：阿根廷讓-1球<br>若阿根廷贏1球 = 退款<br>若阿根廷贏2球+ = 贏<br>若阿根廷贏0或輸 = 輸<br>投$100 → 贏回約$195`, en: `E.g.: Argentina at a -1 handicap<br>Argentina wins by 1 = push (refund)<br>Argentina wins by 2+ = win<br>Argentina draws or loses = lose<br>Bet $100 → return approx. $195` },

    bet_t4_h: { zh: `串關（Parlay / Accumulator）`, en: `Parlay (Accumulator)` },
    bet_t4_p: { zh: `將多場比賽的預測組合在一起，全部猜中才贏，但賠率相乘，潛在回報極高。`, en: `Bundle predictions from several matches into one bet — every leg has to land for it to pay out, but the odds multiply for potentially huge returns.` },
    bet_t4_odds: { zh: `賠率約 4x – 500x+`, en: `Odds approx. 4x – 500x+` },
    bet_t4_ex: { zh: `例：3串關<br>阿根廷贏×法國贏×巴西贏<br>各2.0x → 合計8.0x<br>投$50 → 贏回$400<br><strong>但只要一場猜錯就全輸</strong>`, en: `E.g.: 3-leg parlay<br>Argentina win × France win × Brazil win<br>2.0x each → combined 8.0x<br>Bet $50 → return $400<br><strong>But get just one leg wrong and you lose it all</strong>` },

    bet_t5_h: { zh: `冠軍投注（Futures / Outright）`, en: `Outright Winner (Futures)` },
    bet_t5_p: { zh: `在賽事開始前預測最終冠軍。賠率最高，但需等待整個賽事結束。`, en: `Predict the eventual champion before the tournament kicks off. The biggest payouts on offer — but you'll wait until the whole tournament wraps up.` },
    bet_t5_odds: { zh: `賠率約 3x – 30x+`, en: `Odds approx. 3x – 30x+` },
    bet_t5_ex: { zh: `例：2026世界盃冠軍<br>阿根廷 = 3.50x<br>法國 = 4.00x<br>巴西 = 5.50x<br>摩洛哥 = 20x<br>投$100 買摩洛哥 → 贏$2000！`, en: `E.g.: 2026 World Cup champion<br>Argentina = 3.50x<br>France = 4.00x<br>Brazil = 5.50x<br>Morocco = 20x<br>Bet $100 on Morocco → win $2,000!` },

    bet_t6_h: { zh: `實時投注（Live / In-Play）`, en: `Live (In-Play) Betting` },
    bet_t6_p: { zh: `比賽進行中實時下注。賠率隨比賽情況不斷變動，需要快速判斷。`, en: `Place bets while the match is underway. Odds shift constantly with the action, so you need to think on your feet.` },
    bet_t6_odds: { zh: `賠率即時變動`, en: `Odds update in real time` },
    bet_t6_ex: { zh: `例：0-0 第60分鐘<br>阿根廷贏（+30分鐘）= 2.8x<br>繼續平局 = 3.2x<br>法國贏 = 3.5x<br>比賽越激烈賠率變動越大`, en: `E.g.: 0-0 in the 60th minute<br>Argentina win (final 30 min) = 2.8x<br>Draw continues = 3.2x<br>France win = 3.5x<br>The more frantic the match, the bigger the swings` },

    bet_t7_h: { zh: `第一個入球球員（First Goalscorer）`, en: `First Goalscorer` },
    bet_t7_p: { zh: `預測比賽中第一個入球的球員。賠率高，需要了解各球員得分能力。`, en: `Predict who scores the match's first goal. High payouts, but you'll need to know each player's scoring threat.` },
    bet_t7_odds: { zh: `賠率約 5x – 25x`, en: `Odds approx. 5x – 25x` },
    bet_t7_ex: { zh: `例：決賽首個入球球員<br>梅西 = 6x<br>姆巴佩 = 5x<br>努涅斯 = 9x<br>亞馬爾 = 8x<br>投$50 買梅西 → 贏$300`, en: `E.g.: First scorer in the final<br>Messi = 6x<br>Mbappé = 5x<br>Núñez = 9x<br>Lamine Yamal = 8x<br>Bet $50 on Messi → win $300` },

    bet_t8_h: { zh: `半場/全場（Half-Time / Full-Time）`, en: `Half-Time / Full-Time` },
    bet_t8_p: { zh: `同時預測半場和全場結果。例如：半場平局，全場阿根廷贏。難度高但賠率豐厚。`, en: `Predict both the half-time and full-time results in one go — e.g. draw at the break, Argentina win at the final whistle. Tough to call, but the payouts are rich.` },
    bet_t8_odds: { zh: `賠率約 4x – 20x`, en: `Odds approx. 4x – 20x` },
    bet_t8_ex: { zh: `例：HT平局 / FT阿根廷贏<br>= 約 5.5x<br>投$100 → 贏回$550<br>歷史上決賽這種情況不少見`, en: `E.g.: HT Draw / FT Argentina win<br>= approx. 5.5x<br>Bet $100 → return $550<br>This pattern has shown up in finals before` },

    bet_section4_h: { zh: `🧠 最佳投注策略與建議`, en: `🧠 Best Betting Strategies & Recommendations` },
    bet_principles_h: { zh: `💡 策略核心原則`, en: `💡 Core Strategy Principles` },
    bet_principles_p: {
      zh: `1. <strong style="color:var(--text)">設定固定預算（Bankroll）</strong>：決定你願意投入的「娛樂預算」，絕不超過這個數字<br>2. <strong style="color:var(--text)">每注不超過總預算的5%</strong>：分散風險，避免一次輸光<br>3. <strong style="color:var(--text)">比較多平台賠率</strong>：同一場賽事不同平台賠率可差10-15%，選最高的<br>4. <strong style="color:var(--text)">看數據不看感情</strong>：不要因為喜歡某隊就盲目押注<br>5. <strong style="color:var(--text)">記錄每一注</strong>：追蹤投注歷史，分析哪種玩法對你最有效`,
      en: `1. <strong style="color:var(--text)">Set a fixed bankroll</strong>: Decide on an "entertainment budget" you can afford and never exceed it<br>2. <strong style="color:var(--text)">Never stake more than 5% of your bankroll on one bet</strong>: spread the risk so a single loss can't wipe you out<br>3. <strong style="color:var(--text)">Compare odds across platforms</strong>: the same match can carry 10–15% odds differences between sites — always take the best price<br>4. <strong style="color:var(--text)">Trust the data, not your heart</strong>: don't bet blindly just because you love a team<br>5. <strong style="color:var(--text)">Log every single bet</strong>: track your history and work out which approaches actually pay off for you`
    },
    bet_strategy_th: { zh: `策略 / 適合人群 / 建議投入 / 潛在回報 / 風險 / 推薦指數`, en: `Strategy / Best For / Suggested Stake / Potential Return / Risk / Rating` },
    bet_th_strategy: { zh: `策略`, en: `Strategy` },
    bet_th_audience: { zh: `適合人群`, en: `Best For` },
    bet_th_stake: { zh: `建議投入`, en: `Suggested Stake` },
    bet_th_return: { zh: `潛在回報`, en: `Potential Return` },
    bet_th_risk: { zh: `風險`, en: `Risk` },
    bet_th_rating: { zh: `推薦指數`, en: `Rating` },
    bet_row1_name: { zh: `熱門隊冠軍單注`, en: `Favorite to Win Outright` },
    bet_row1_sub: { zh: `阿根廷/法國/西班牙`, en: `Argentina / France / Spain` },
    bet_row1_aud: { zh: `新手、保守型`, en: `Beginners, conservative bettors` },
    bet_row1_risk: { zh: `低`, en: `Low` },
    bet_row2_name: { zh: `大小球（2.5球）`, en: `Over/Under (2.5 goals)` },
    bet_row2_sub: { zh: `每場比賽獨立`, en: `Independent, per-match bets` },
    bet_row2_aud: { zh: `分析型，懂足球`, en: `Analytical bettors who know the game` },
    bet_row2_stake: { zh: `$20–$100/場`, en: `$20–$100/match` },
    bet_row2_risk: { zh: `低`, en: `Low` },
    bet_row3_name: { zh: `2串關（熱門×熱門）`, en: `2-Leg Parlay (Favorite × Favorite)` },
    bet_row3_sub: { zh: `兩隊贏 組合`, en: `Combo of two teams to win` },
    bet_row3_aud: { zh: `有經驗，想提高回報`, en: `Experienced bettors chasing bigger returns` },
    bet_row3_risk: { zh: `中`, en: `Medium` },
    bet_row4_name: { zh: `黑馬冠軍（少量）`, en: `Dark-Horse Champion (Small Stake)` },
    bet_row4_sub: { zh: `摩洛哥/美國/日本`, en: `Morocco / USA / Japan` },
    bet_row4_aud: { zh: `投機型，愛冒險`, en: `Speculative, risk-loving bettors` },
    bet_row4_risk: { zh: `高`, en: `High` },
    bet_row5_name: { zh: `第一入球球員`, en: `First Goalscorer` },
    bet_row5_sub: { zh: `梅西/姆巴佩`, en: `Messi / Mbappé` },
    bet_row5_aud: { zh: `足球迷，熟悉球員`, en: `Football fans who know the players` },
    bet_row5_risk: { zh: `中高`, en: `Medium-High` },
    bet_row6_name: { zh: `實時投注`, en: `Live (In-Play) Betting` },
    bet_row6_sub: { zh: `比賽進行中`, en: `During the match` },
    bet_row6_aud: { zh: `有豐富投注經驗`, en: `Bettors with deep experience` },
    bet_row6_return: { zh: `可變`, en: `Variable` },
    bet_row6_risk: { zh: `高`, en: `High` },
    bet_row7_name: { zh: `3+ 串關`, en: `3+ Leg Parlay` },
    bet_row7_sub: { zh: `多場組合`, en: `Multi-match combo` },
    bet_row7_aud: { zh: `娛樂目的`, en: `Just for fun` },
    bet_row7_risk: { zh: `非常高`, en: `Very High` },

    bet_kelly_h: { zh: `📐 凱利公式 — 科學計算投注金額`, en: `📐 The Kelly Criterion — Sizing Your Bet Scientifically` },
    bet_kelly_intro: { zh: `凱利公式幫助計算最優投注比例，在期望值為正時最大化長期回報：`, en: `The Kelly Criterion calculates the optimal stake fraction, maximizing long-run returns whenever the expected value is positive:` },
    bet_kelly_explain: {
      zh: `其中：<br><strong style="color:var(--text)">f*</strong> = 建議投注比例（佔總預算）<br><strong style="color:var(--text)">b</strong> = 淨賠率（如賠率2.0，則b=1）<br><strong style="color:var(--text)">p</strong> = 你估計的獲勝機率（如50%=0.5）<br><strong style="color:var(--text)">q</strong> = 輸的機率（1-p）`,
      en: `Where:<br><strong style="color:var(--text)">f*</strong> = the suggested fraction of your bankroll to stake<br><strong style="color:var(--text)">b</strong> = net odds (e.g. decimal odds of 2.0 means b = 1)<br><strong style="color:var(--text)">p</strong> = your estimated probability of winning (e.g. 50% = 0.5)<br><strong style="color:var(--text)">q</strong> = the probability of losing (1 − p)`
    },
    bet_kelly_example: {
      zh: `<strong>實例：</strong>阿根廷冠軍，賠率3.5x（b=2.5），你估計獲勝機率30%（p=0.3，q=0.7）<br>f* = (2.5×0.3 - 0.7) / 2.5 = (0.75-0.7)/2.5 = <strong style="color:var(--accent)">0.02 = 2%</strong><br>若你的預算是$500，建議投注：<strong style="color:var(--gold)">$10</strong>`,
      en: `<strong>Example:</strong> Argentina to win the title at 3.5x odds (b = 2.5), and you estimate a 30% chance of winning (p = 0.3, q = 0.7)<br>f* = (2.5 × 0.3 − 0.7) / 2.5 = (0.75 − 0.7)/2.5 = <strong style="color:var(--accent)">0.02 = 2%</strong><br>With a $500 bankroll, the suggested stake is: <strong style="color:var(--gold)">$10</strong>`
    },
    bet_kelly_note: { zh: `實踐上建議使用「半凱利」（f*/2），降低波動性`, en: `In practice, many bettors use "Half Kelly" (f*/2) to reduce swings` },

    bet_parlay_h: { zh: `🔢 串關計算示例：$100 投注 3串關`, en: `🔢 Parlay Math Example: $100 on a 3-Leg Parlay` },
    bet_parlay_row1: { zh: `阿根廷贏（賠率2.10x）`, en: `Argentina win (2.10x odds)` },
    bet_parlay_row2: { zh: `巴西贏（賠率1.95x）`, en: `Brazil win (1.95x odds)` },
    bet_parlay_row3: { zh: `法國贏（賠率2.05x）`, en: `France win (2.05x odds)` },
    bet_parlay_row4: { zh: `合計賠率`, en: `Combined odds` },
    bet_parlay_row5: { zh: `投注金額`, en: `Stake` },
    bet_parlay_row6: { zh: `潛在獲利`, en: `Potential payout` },

    bet_section5_h: { zh: `💰 建議投注金額（按預算類型）`, en: `💰 Suggested Stakes by Budget Type` },
    bet_budget_total: { zh: `總預算`, en: `Total Bankroll` },
    bet_budget_cons_h: { zh: `🛡️ 保守型`, en: `🛡️ Conservative` },
    bet_budget_cons_d: { zh: `每注 $10–$20<br>選擇熱門隊或大小球<br>最多同時2串關<br>以娛樂為主，嚴格控制`, en: `$10–$20 per bet<br>Stick to favorites or over/under<br>At most a 2-leg parlay<br>Treat it as entertainment — stay disciplined` },
    bet_budget_bal_h: { zh: `⚖️ 平衡型`, en: `⚖️ Balanced` },
    bet_budget_bal_d: { zh: `每注 $20–$50<br>組合多種投注類型<br>留10%賭黑馬<br>比賽分析後再決定`, en: `$20–$50 per bet<br>Mix several bet types<br>Keep 10% for dark-horse picks<br>Decide only after analyzing the matchup` },
    bet_budget_agg_h: { zh: `🎯 進取型`, en: `🎯 Aggressive` },
    bet_budget_agg_d: { zh: `每注 $50–$200<br>多平台比較賠率<br>使用凱利公式<br>需要豐富足球知識`, en: `$50–$200 per bet<br>Compare odds across platforms<br>Apply the Kelly Criterion<br>Requires deep football knowledge` },

    bet_combos_h: { zh: `🏆 針對2026世界盃的最佳投注組合建議`, en: `🏆 Recommended Betting Combos for the 2026 World Cup` },
    bet_combo_a_h: { zh: `🥇 組合A：穩健型（預算$200）`, en: `🥇 Combo A: Steady (Budget $200)` },
    bet_combo_a_i1: { zh: `🇦🇷 阿根廷奪冠`, en: `🇦🇷 Argentina to win it all` },
    bet_combo_a_i1p: { zh: `$50投→$175`, en: `$50 → $175` },
    bet_combo_a_i2: { zh: `🇫🇷 法國奪冠`, en: `🇫🇷 France to win it all` },
    bet_combo_a_i2p: { zh: `$30投→$120`, en: `$30 → $120` },
    bet_combo_a_i3: { zh: `🇪🇸 西班牙奪冠`, en: `🇪🇸 Spain to win it all` },
    bet_combo_a_i3p: { zh: `$20投→$90`, en: `$20 → $90` },
    bet_combo_a_i4: { zh: `小球（小組賽多場）`, en: `Under (multiple group matches)` },
    bet_combo_a_i4p: { zh: `$50×6場→$570`, en: `$50 × 6 matches → $570` },
    bet_combo_a_note: { zh: `策略：主押熱門冠軍+小球穩定收益`, en: `Strategy: anchor on favorites to win it all, plus steady under-bets for consistent returns` },
    bet_combo_b_h: { zh: `🥈 組合B：平衡型（預算$300）`, en: `🥈 Combo B: Balanced (Budget $300)` },
    bet_combo_b_i1: { zh: `🇧🇷 巴西奪冠`, en: `🇧🇷 Brazil to win it all` },
    bet_combo_b_i1p: { zh: `$50投→$275`, en: `$50 → $275` },
    bet_combo_b_i2: { zh: `梅西首場進球`, en: `Messi to score in the opener` },
    bet_combo_b_i2p: { zh: `$30投→$180`, en: `$30 → $180` },
    bet_combo_b_i3: { zh: `2串關×3組`, en: `2-leg parlay × 3 sets` },
    bet_combo_b_i3p: { zh: `$50×3→$600`, en: `$50 × 3 → $600` },
    bet_combo_b_i4: { zh: `🇲🇦 摩洛哥黑馬`, en: `🇲🇦 Morocco dark horse` },
    bet_combo_b_i4p: { zh: `$10投→$200`, en: `$10 → $200` },
    bet_combo_b_note: { zh: `策略：中高風險，平衡回報潛力`, en: `Strategy: medium-high risk with balanced reward potential` },
    bet_combo_c_h: { zh: `🥉 組合C：娛樂型（預算$100）`, en: `🥉 Combo C: Just for Fun (Budget $100)` },
    bet_combo_c_i1: { zh: `🇦🇷 阿根廷冠軍`, en: `🇦🇷 Argentina champion` },
    bet_combo_c_i1p: { zh: `$30投→$105`, en: `$30 → $105` },
    bet_combo_c_i2: { zh: `姆巴佩金靴`, en: `Mbappé Golden Boot` },
    bet_combo_c_i2p: { zh: `$20投→$80`, en: `$20 → $80` },
    bet_combo_c_i3: { zh: `🇺🇸 美國進八強`, en: `🇺🇸 USA to reach the quarterfinals` },
    bet_combo_c_i3p: { zh: `$20投→$50`, en: `$20 → $50` },
    bet_combo_c_i4: { zh: `趣味串關`, en: `Fun parlay` },
    bet_combo_c_i4p: { zh: `$10投→$150`, en: `$10 → $150` },
    bet_combo_c_note: { zh: `策略：小額娛樂，享受比賽過程`, en: `Strategy: small stakes — just enjoy the ride` },

    bet_section6_h: { zh: `💎 專業投注小技巧`, en: `💎 Pro Betting Tips` },
    bet_tip1_h: { zh: `📊 比較賠率`, en: `📊 Compare the Odds` },
    bet_tip1_p: { zh: `同一場賽事，PlayNow、BetMGM、Bet365的賠率可能差10-15%。投注前務必比較，選最高賠率。差1.9x vs 2.1x，長期影響巨大。`, en: `For the same match, PlayNow, BetMGM and Bet365 can differ by 10–15% in their odds. Always compare before betting and pick the best price — the gap between 1.9x and 2.1x adds up enormously over time.` },
    bet_tip2_h: { zh: `🎁 善用迎新優惠`, en: `🎁 Make the Most of Welcome Bonuses` },
    bet_tip2_p: { zh: `BetMGM、FanDuel等提供首次存款匹配優惠（如存$100送$100）。世界盃期間通常有特別促銷。注意「流水要求」條款。`, en: `BetMGM, FanDuel and others offer first-deposit matches (e.g. deposit $100, get $100). Special World Cup promos are common — just watch for the "wagering requirement" fine print.` },
    bet_tip3_h: { zh: `⏰ 早鳥投注冠軍`, en: `⏰ Bet Early on the Champion` },
    bet_tip3_p: { zh: `世界盃冠軍的賠率在開賽後會隨著球隊表現快速變動。早早鎖定熱門隊的高賠率，比等到淘汰賽後更划算。`, en: `Championship odds move quickly once the tournament starts, tracking team form. Locking in a favorite's price early is usually better value than waiting for the knockout rounds.` },
    bet_tip4_h: { zh: `📉 避免「追數」`, en: `📉 Avoid "Chasing Losses"` },
    bet_tip4_p: { zh: `輸了之後加大投注金額想補回損失，是最常見的錯誤。每注按計劃金額投注，輸了就是娛樂成本，不要「報仇」。`, en: `Raising your stake after a loss to win the money back is the most common mistake of all. Stick to your planned stake — a loss is simply the cost of entertainment, not something to avenge.` },
    bet_tip5_h: { zh: `🔄 現金兌換功能`, en: `🔄 Use the Cash-Out Feature` },
    bet_tip5_p: { zh: `Bet365等平台提供「提前結算」(Cash Out)。如果你的投注正在贏，可以提前兌現，不必等比賽結束。適合實時投注。`, en: `Platforms like Bet365 offer a "Cash Out" option — if your bet is winning, you can lock in a payout early instead of waiting for the final whistle. Great for live betting.` },
    bet_tip6_h: { zh: `🚫 設定存款限額`, en: `🚫 Set a Deposit Limit` },
    bet_tip6_p: { zh: `PlayNow等平台允許設定每日/每週存款上限。建議所有用戶都設置這個功能，強迫自己控制預算，防止過度投注。`, en: `Platforms like PlayNow let you set daily/weekly deposit caps. We recommend every user turn this on — it forces budget discipline and helps prevent overspending.` },

    bet_responsible_h: { zh: `🛡️ 責任投注`, en: `🛡️ Bet Responsibly` },
    bet_responsible_p: {
      zh: `投注應該是娛樂，不是賺錢的工具。請記住：<br><br>• 只用你能承受損失的金錢投注<br>• 不要借錢投注<br>• 不要讓投注影響你的生活和關係<br>• 如需幫助，請聯繫：<strong>BC Responsible &amp; Problem Gambling Program</strong><br>&nbsp;&nbsp;電話：<strong>1-888-795-6111</strong>（免費，24小時）<br>&nbsp;&nbsp;網站：<strong>bcresponsiblegambling.ca</strong>`,
      en: `Betting should be entertainment, not a way to make money. Remember:<br><br>• Only bet what you can afford to lose<br>• Never borrow money to bet<br>• Don't let betting affect your life or relationships<br>• If you need help, contact: <strong>BC Responsible &amp; Problem Gambling Program</strong><br>&nbsp;&nbsp;Phone: <strong>1-888-795-6111</strong> (free, 24 hours)<br>&nbsp;&nbsp;Website: <strong>bcresponsiblegambling.ca</strong>`
    },

    // ============================================================
    // SCORES.HTML — Live / final scores (new page)
    // ============================================================
    score_title: { zh: `2026 FIFA World Cup — 即時比分`, en: `2026 FIFA World Cup — Live Scores` },
    score_hero_badge: { zh: `每日更新`, en: `Updated Daily` },
    score_hero_h1: { zh: `⚡ 各隊最終比分追蹤`, en: `⚡ Final Score Tracker` },
    score_hero_p: { zh: `賽事開打後（2026年6月11日起），本頁將每日自動更新所有完場賽事的最終比分`, en: `Once the tournament kicks off (from June 11, 2026), this page will be updated automatically every day with the final score of every completed match` },
    score_section_standings: { zh: `📊 小組積分榜`, en: `📊 Group Standings` },
    score_qualify_legend: { zh: `綠色側邊欄 = 晉級小組第16強（前兩名）`, en: `Green bar = qualified for Round of 16 (top 2 per group)` },
    score_section_latest: { zh: `📋 最新賽果`, en: `📋 Latest Results` },
    score_updated_label: { zh: `最後更新：{date}`, en: `Last updated: {date}` },
    score_tab_results:   { zh: `📋 最新賽果`, en: `📋 Results` },
    score_tab_standings: { zh: `📊 小組積分`, en: `📊 Standings` },
    score_tab_knockout:  { zh: `🏆 淘汰賽`,   en: `🏆 Knockout` },
    score_empty_title: { zh: `🕐 賽事尚未開始`, en: `🕐 The Tournament Hasn't Started Yet` },
    score_empty_body: { zh: `2026 FIFA World Cup 將於 <strong style="color:var(--accent)">2026年6月11日</strong> 在墨西哥城 Estadio Azteca 開踢（東道主墨西哥 vs 波蘭）。從開幕日當天起，本頁會<strong style="color:var(--gold)">每日自動更新</strong>所有已完賽事的最終比分 — 記得隨時回來查看！同時也別忘了到<a href="prediction.html">🔮 預測頁面</a>查看誰最有可能奪冠。`, en: `The 2026 FIFA World Cup kicks off on <strong style="color:var(--accent)">June 11, 2026</strong> at Estadio Azteca in Mexico City (hosts Mexico vs Poland). Starting on opening day, this page will be <strong style="color:var(--gold)">refreshed automatically every day</strong> with the final score of every completed match — check back often! And don't forget to visit the <a href="prediction.html">🔮 Prediction page</a> to see who's most likely to lift the trophy.` },
    score_status_final: { zh: `已完賽`, en: `FINAL` },
    score_status_scheduled: { zh: `未開賽`, en: `SCHEDULED` },
    score_col_date: { zh: `日期`, en: `Date` },
    score_col_match: { zh: `對戰`, en: `Match` },
    score_col_score: { zh: `比分`, en: `Score` },
    score_col_round: { zh: `階段`, en: `Round` },
    score_col_venue: { zh: `場地`, en: `Venue` },
    score_note: { zh: `📡 比分資料每日自動擷取並更新，若有錯誤或延遲，請以 FIFA 官方網站 (fifa.com) 公告為準。`, en: `📡 Scores are fetched and refreshed automatically each day. In case of any error or delay, please refer to the official FIFA website (fifa.com) for the authoritative result.` },

    // ============================================================
    // COMMUNITY.HTML — Fan community / comments page
    // ============================================================
    community_title:        { zh: `2026 FIFA World Cup — 球迷社群`, en: `2026 FIFA World Cup — Fan Community` },
    community_hero_badge:   { zh: `球迷交流`, en: `Fan Zone` },
    community_hero_h1:      { zh: `💬 球迷互動區`, en: `💬 Fan Community Hub` },
    community_hero_p:       { zh: `分享你的觀點、預測與熱情 — 和全球球迷一起討論 2026 世界盃`, en: `Share your views, predictions and passion — join fellow fans to discuss the 2026 World Cup` },
    community_section_polls:{ zh: `🗳️ 快速投票`, en: `🗳️ Quick Polls` },
    community_polls_sub:    { zh: `投出你的看法，看看球迷們怎麼想`, en: `Cast your vote and see what fans think` },
    community_poll1_q:      { zh: `🏆 誰會奪得 2026 世界盃冠軍？`, en: `🏆 Who will win the 2026 World Cup?` },
    community_poll2_q:      { zh: `🌟 你最看好的黑馬隊伍？`, en: `🌟 Which team will be the biggest dark horse?` },
    community_poll3_q:      { zh: `⚽ 你最期待哪場比賽？`, en: `⚽ Which match are you most excited to watch?` },
    community_poll_vote_btn:{ zh: `投票`, en: `Vote` },
    community_poll_total:   { zh: `{n} 票`, en: `{n} votes` },
    community_poll_thanks:  { zh: `✅ 感謝你的投票！`, en: `✅ Thanks for voting!` },
    community_section_discuss:{ zh: `💬 留言討論`, en: `💬 Comments & Discussion` },
    community_discuss_sub:  { zh: `分享你的觀點、預測或對賽事的任何想法！`, en: `Share your thoughts, predictions, or anything about the tournament!` },
    community_rules_h:      { zh: `📋 社群守則`, en: `📋 Community Guidelines` },
    community_rules_p:      {
      zh: `• 友善討論，尊重不同看法<br>• 歡迎分享球隊資訊與賽事分析<br>• 禁止發布不實訊息或垃圾內容<br>• 讓這裡成為球迷交流的最佳空間 ⚽`,
      en: `• Be respectful and friendly to all fans<br>• Share team news, analysis and predictions<br>• No misinformation or spam<br>• Let's make this the best fan space for 2026 ⚽`
    },
    community_disqus_setup: {
      zh: `💡 留言系統設定中 — 如果看不到留言框，請參考頁面底部的設定說明。`,
      en: `💡 Comment system loading — if you don't see the comment box, see the setup note at the bottom of the page.`
    },

    // INDEX.HTML — visitor counter label
    idx_stat_visitors: { zh: `瀏覽人數`, en: `Visitors` }
  };

  /* ---------------------------------------------------------
     t(key, vars) — dictionary lookup with {placeholder} support
     --------------------------------------------------------- */
  window.t = function (key, vars) {
    var lang = getLang();
    var entry = I18N[key];
    var str = entry ? (entry[lang] || entry.zh) : key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        str = str.split('{' + k + '}').join(vars[k]);
      });
    }
    return str;
  };

  /* ---------------------------------------------------------
     ZH_EN_TERMS — substring-level translations for Chinese
     fragments embedded inside data arrays (FINALS, probData…):
     country / host / city names plus full description sentences.
     Sorted longest-first so e.g. "墨西哥城" matches before "墨西哥".
     --------------------------------------------------------- */
  var ZH_EN_TERMS = {
    // --- full description sentences (longest, matched first) ---
    '史上最精彩決賽！姆巴佩帽子戲法，梅西最終奪冠': `The greatest final ever! Mbappé's hat-trick wasn't enough — Messi lifts the trophy at last`,
    '法國4-2擊敗克羅埃西亞，姆巴佩成最年輕決賽進球者': `France beat Croatia 4-2, with Mbappé becoming the youngest scorer in a World Cup final`,
    '格策加時絕殺，德國首次以統一之名奪得大力神盃': `Götze's extra-time winner gives a unified Germany its first World Cup title`,
    '伊涅斯塔加時絕殺，西班牙首奪世界盃冠軍': `Iniesta's extra-time winner gives Spain their first-ever World Cup title`,
    '齊達內頭槌事件！義大利點球勝出奪冠': `The Zidane headbutt final! Italy win it on penalties`,
    '羅納度雙響，巴西奪第五座世界盃': `Ronaldo's brace seals Brazil's fifth World Cup title`,
    '齊達內頭槌雙響，法國主場首奪世界盃': `Zidane's first-half double powers France to their first World Cup title on home soil`,
    '史上首次0-0決賽，點球大戰！羅伯特·巴喬錯失決定性點球': `The first-ever scoreless final goes to penalties — Roberto Baggio misses the decisive spot-kick`,
    '布雷姆第85分鐘點球決定命運，西德奪第三座世界盃': `Brehme's 85th-minute penalty seals West Germany's third World Cup title`,
    '馬拉多納領軍！阿根廷3-2逆境奪冠，布魯查加絕殺': `Led by Maradona, Argentina come from behind to win 3-2 as Burruchaga scores the decider`,
    '巴貝托·馬爾蒂尼錯失點球': `Roberto Baggio misses the decisive penalty`,

    // --- host / country / team names ---
    '韓國/日本': `Korea/Japan`,
    '西德': `West Germany`,
    '阿根廷': `Argentina`,
    '克羅埃西亞': `Croatia`,
    '法國': `France`,
    '巴西': `Brazil`,
    '德國': `Germany`,
    '西班牙': `Spain`,
    '義大利': `Italy`,
    '荷蘭': `Netherlands`,
    '烏拉圭': `Uruguay`,
    '葡萄牙': `Portugal`,
    '比利時': `Belgium`,
    '哥倫比亞': `Colombia`,
    '摩洛哥': `Morocco`,
    '墨西哥城': `Mexico City`,
    '墨西哥': `Mexico`,
    '美國': `USA`,
    '日本': `Japan`,
    '韓國': `South Korea`,
    '丹麥': `Denmark`,
    '塞內加爾': `Senegal`,
    '卡達': `Qatar`,
    '俄羅斯': `Russia`,
    '南非': `South Africa`,
    '其他隊伍': `Other Teams`,
    '其他': `Other`,

    // --- host-city fragments inside venue strings ---
    '莫斯科': `Moscow`,
    '里約': `Rio de Janeiro`,
    '約翰尼斯堡': `Johannesburg`,
    '柏林': `Berlin`,
    '橫濱': `Yokohama`,
    '聖丹尼': `Saint-Denis`,
    '洛杉磯': `Los Angeles`,
    '羅馬': `Rome`
  };
  var ZH_KEYS_SORTED = Object.keys(ZH_EN_TERMS).sort(function (a, b) { return b.length - a.length; });

  window.tx = function (str) {
    if (getLang() !== 'en' || !str) return str;
    var out = String(str);
    for (var i = 0; i < ZH_KEYS_SORTED.length; i++) {
      var zh = ZH_KEYS_SORTED[i];
      if (out.indexOf(zh) !== -1) out = out.split(zh).join(ZH_EN_TERMS[zh]);
    }
    return out;
  };

  /* ---------------------------------------------------------
     applyI18n() — translate static markup marked with
     data-i18n / data-i18n-html / data-i18n-placeholder / data-i18n-title
     --------------------------------------------------------- */
  window.applyI18n = function (root) {
    var scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    scope.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    scope.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    scope.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.title = t(el.getAttribute('data-i18n-title'));
    });
    // substring-level translation for static markup containing embedded
    // Chinese proper nouns (country/city names) via the ZH_EN_TERMS map
    scope.querySelectorAll('[data-i18n-tx]').forEach(function (el) {
      el.textContent = tx(el.textContent);
    });
    var titleKey = document.body.getAttribute('data-page-title');
    if (titleKey) document.title = t(titleKey);
    document.documentElement.lang = (getLang() === 'en') ? 'en' : 'zh-TW';
  };

  /* ---------------------------------------------------------
     initLangToggle() — inject the EN / 中文 switch into the nav
     --------------------------------------------------------- */
  window.initLangToggle = function () {
    var navInner = document.querySelector('.nav-inner');
    if (!navInner || navInner.querySelector('.lang-toggle')) return;
    var wrap = document.createElement('div');
    wrap.className = 'lang-toggle';
    wrap.innerHTML = '<button type="button" data-lang="zh">中文</button><button type="button" data-lang="en">EN</button>';
    navInner.appendChild(wrap);
    var lang = getLang();
    wrap.querySelectorAll('button').forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-lang');
        if (target !== getLang()) setLang(target);
      });
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    initLangToggle();
    applyI18n();
  });
})();
