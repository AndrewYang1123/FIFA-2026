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

  { date:'Jun 12', round:'Matchday 1',
    home:'USA',      homeFlag:'🇺🇸', homeScore:4,
    away:'Paraguay', awayFlag:'🇵🇾', awayScore:1,
    venue:'SoFi Stadium',
    goals:[
      { team:'away', scorer:'Bobadilla (OG)', minute:"7'"    },
      { team:'home', scorer:'F. Balogun',     minute:"30'"   },
      { team:'home', scorer:'F. Balogun',     minute:"45+5'" },
      { team:'away', scorer:'Mauricio',       minute:"73'"   },
      { team:'home', scorer:'G. Reyna',       minute:"90+8'" },
    ],
    description:
      '美國在主場 SoFi 球場震撼揭幕！第 7 分鐘巴拉圭後衛自摩球率先破門，' +
      'Balogun 此後連入兩球——30 分鐘一槌，加時補時再補一球，半場以 3:0' +
      '領先。下半場巴拉圭扳一城，但 Reyna 補時梅開二度，美國以 4:1 寫下' +
      '世界盃史上最大勝仗。Balogun 成為自 1930 年以來首位在世盃單場進兩球的美國球員。',
    descriptionEn:
      'The USMNT lit up SoFi Stadium in a historic World Cup opener! An own goal in the 7th ' +
      'minute set the tone, then Folarin Balogun became the first American to score multiple ' +
      'World Cup goals since 1930 — netting on 30\' and 45+5\' to make it 3-0 at the break. ' +
      'Paraguay pulled one back, but Gio Reyna\'s stoppage-time strike sealed a stunning 4-1 ' +
      'rout: the USMNT\'s biggest-ever World Cup win, 32 years after USA \'94.' },

  { date:'Jun 13', round:'Matchday 1',
    home:'Qatar',       homeFlag:'🇶🇦', homeScore:1,
    away:'Switzerland', awayFlag:'🇨🇭', awayScore:1,
    venue:"Levi's Stadium",
    goals:[
      { team:'away', scorer:'B. Embolo (pen)', minute:"17'" },
      { team:'home', scorer:'M. Muheim (OG)',  minute:"90+4'" },
    ],
    description:
      '卡塔爾在世界盃史上首次奪得積分，戲劇性情節令人咋舌！' +
      'Embolo 在 17 分鐘主射十二碼破門，瑞士率先領先。' +
      '就在傷停補時第 4 分鐘，卡塔爾拋入高球，瑞士後衛 Muheim 不慎頭槌自摩，' +
      '讓地主以 1:1 平手告終——卡塔爾球迷欣喜若狂，慶祝隊史首個世盃積分。',
    descriptionEn:
      'Qatar made history at Levi\'s Stadium — their first-ever World Cup point! ' +
      'Breel Embolo converted a 17th-minute penalty to put Switzerland ahead, ' +
      'and the Swiss looked set to collect all three points. But deep into stoppage time (90+4\'), ' +
      'Switzerland\'s Miro Muheim deflected a Qatar cross into his own net, ' +
      'sending the Qatar fans into raptures and stunning the Swiss.' },

  { date:'Jun 13', round:'Matchday 1',
    home:'Brazil',  homeFlag:'🇧🇷', homeScore:1,
    away:'Morocco', awayFlag:'🇲🇦', awayScore:1,
    venue:'MetLife Stadium',
    goals:[
      { team:'away', scorer:'I. Saibari',   minute:"21'" },
      { team:'home', scorer:'Vinícius Jr.', minute:"32'" },
    ],
    description:
      '巨星對決，精彩紛呈！摩洛哥 Saibari 在 21 分鐘精妙挑射，' +
      '輕鬆騙過門將 Alisson，率先以閃電反擊破網。' +
      '但巴西不甘示弱——Vinícius Jr. 11 分鐘後個人突破，' +
      '一腳弧線球高射入網扳平，展現世界頂級球星的個人能力。' +
      '兩隊平分秋色，均積 1 分，C 組形勢大開。',
    descriptionEn:
      'A classic encounter at MetLife Stadium! Morocco\'s Ismael Saibari chipped ' +
      'Alisson Becker brilliantly in the 21st minute to finish a devastating counter-attack. ' +
      'But Brazil answered through Vinícius Jr. in the 32nd — a stunning solo run ' +
      'capped with a curling finish into the roof of the net. ' +
      'Both giants share the points; Group C is wide open.' },

  { date:'Jun 13', round:'Matchday 1',
    home:'Haiti',    homeFlag:'🇭🇹', homeScore:0,
    away:'Scotland', awayFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayScore:1,
    venue:'Gillette Stadium',
    goals:[
      { team:'away', scorer:'J. McGinn', minute:"28'" },
    ],
    description:
      '蘇格蘭 28 年等待終結！McGinn 在第 28 分鐘接應隊友傳球後射門，' +
      '皮球擦防守球員偏轉入網——這是蘇格蘭自 1998 年世界盃後的首粒進球，' +
      '相隔整整 10,244 天。海地全力抵抗但未能破門，' +
      '蘇格蘭以 1:0 勝出，憑巴西與摩洛哥握手言和之利，登上 C 組榜首。',
    descriptionEn:
      'Scotland end a 28-year World Cup goalscoring drought! John McGinn\'s ' +
      '28th-minute effort deflected past the helpless Johny Placide — ' +
      'the Tartan Army\'s first World Cup goal in 10,244 days (since Craig Burley in France \'98). ' +
      'Haiti fought hard but couldn\'t convert their chances. ' +
      'Scotland top Group C after Brazil and Morocco cancelled each other out.' },

  { date:'Jun 13', round:'Matchday 1',
    home:'Australia', homeFlag:'🇦🇺', homeScore:2,
    away:'Türkiye',   awayFlag:'🇹🇷', awayScore:0,
    venue:'BC Place',
    goals:[
      { team:'home', scorer:'N. Irankunda', minute:"27'" },
      { team:'home', scorer:'C. Metcalfe',  minute:"75'" },
    ],
    description:
      '澳洲以精彩的反擊戰術震撼 BC Place！20 歲的 Irankunda 在第 27 分鐘' +
      '率先破門，成為澳洲史上最年輕的世界盃進球球員。' +
      '中場 Metcalfe 在第 75 分鐘射入一腳強勁的低射，鎖定勝局。' +
      '門將 Ryan 全場攔下 8 次射門，澳洲 D 組開局完美，' +
      '令土耳其重返世界盃（睽違 24 年）的首戰以潰敗收場。',
    descriptionEn:
      'Australia delivered a counterattacking masterclass at BC Place in Vancouver! ' +
      'Teenage sensation Nestory Irankunda scored in the 27th minute to become the youngest ' +
      'Australian to net at a World Cup, before Connor Metcalfe drilled home a powerful ' +
      'low shot in the 75th to seal a commanding 2-0 win. Goalkeeper Mathew Ryan made eight ' +
      'saves to keep a clean sheet. A perfect Group D start for the Socceroos, ' +
      'while Türkiye\'s long-awaited World Cup return ends in disappointment.' },

  { date:'Jun 14', round:'Matchday 1',
    home:'Germany',  homeFlag:'🇩🇪', homeScore:7,
    away:'Curaçao',  awayFlag:'🇨🇼', awayScore:1,
    venue:'NRG Stadium',
    goals:[
      { team:'home', scorer:'L. Nmecha',      minute:"6'"    },
      { team:'away', scorer:'Q. Comenecia',   minute:"21'"   },
      { team:'home', scorer:'N. Schlotterbeck', minute:"38'" },
      { team:'home', scorer:'K. Havertz (pen)', minute:"45+5'" },
      { team:'home', scorer:'J. Musiala',     minute:"47'"   },
      { team:'home', scorer:'J. Brown',       minute:"68'"   },
      { team:'home', scorer:'D. Undav',       minute:"78'"   },
      { team:'home', scorer:'K. Havertz',     minute:"88'"   },
    ],
    description:
      '德國以狂轟 7 球的超強姿態揭開世界盃序幕！Nmecha 僅花 6 分鐘率先破門，' +
      '庫拉索雖靠 Comenecia 一度令比數為 1:1，但德國此後如入無人之境。' +
      'Havertz 梅開二度（含一個十二碼），Musiala、Schlotterbeck、Brown 及 Undav' +
      '各建一功，最終以 7:1 狂勝創造世界盃佳績。庫拉索首度闖入世界盃便飽嚐苦果。',
    descriptionEn:
      'Germany put on a dazzling display at NRG Stadium in Houston — their biggest-ever ' +
      'World Cup win! Nmecha struck in just the 6th minute, and although Comenecia briefly ' +
      'leveled for debutants Curaçao, Die Mannschaft ran riot. Havertz scored twice ' +
      '(including a penalty), with Schlotterbeck, Musiala, Brown, and Undav also on target ' +
      'in a stunning 7-1 rout. A record-breaking statement of intent from Germany.' },

  { date:'Jun 14', round:'Matchday 1',
    home:'Netherlands', homeFlag:'🇳🇱', homeScore:2,
    away:'Japan',       awayFlag:'🇯🇵', awayScore:2,
    venue:'AT&T Stadium',
    goals:[
      { team:'home', scorer:'V. van Dijk',    minute:"50'"   },
      { team:'away', scorer:'K. Nakamura',    minute:"57'"   },
      { team:'home', scorer:'C. Summerville', minute:"64'"   },
      { team:'away', scorer:'D. Kamada',      minute:"89'"   },
    ],
    description:
      '精彩刺激的 F 組揭幕戰！荷蘭 van Dijk 下半場率先破門，' +
      '日本 Nakamura 迅速扳平；Summerville 再度讓荷蘭領先後，' +
      '老將 Kamada 在第 89 分鐘頭球扳平，讓日本在最後一刻搶回一分。' +
      '兩隊同積 1 分，F 組格局大開。',
    descriptionEn:
      'A pulsating Group F opener at AT&T Stadium in Dallas! Van Dijk headed the Dutch ' +
      'ahead in the 50th minute, but Keito Nakamura\'s deflected effort leveled it in the 57th. ' +
      'Crysencio Summerville restored the Dutch lead in the 64th, only for Daichi Kamada ' +
      'to head home a dramatic 89th-minute equalizer and snatch a point for Japan. ' +
      'Both teams share the spoils in a thrilling draw.' },

  { date:'Jun 14', round:'Matchday 1',
    home:'Ivory Coast', homeFlag:'🇨🇮', homeScore:1,
    away:'Ecuador',     awayFlag:'🇪🇨', awayScore:0,
    venue:'Lincoln Financial Field',
    goals:[
      { team:'home', scorer:'Amad Diallo', minute:"90'" },
    ],
    description:
      '象牙海岸靠後備球員 Amad Diallo 在第 90 分鐘的絕殺，' +
      '驚險擊退厄瓜多爾！Diallo 接應 Singo 右路突破後的傳球，' +
      '以左腳精準側射破網，終結厄瓜多爾長達 19 場不敗的神話。' +
      '象牙海岸時隔多年再度闖入世界盃，首戰即以戲劇性方式三分到手。',
    descriptionEn:
      'Ivory Coast snatched all three points with a stoppage-time sucker punch at Lincoln ' +
      'Financial Field in Philadelphia! Substitute Amad Diallo sidefooted home clinically ' +
      'in the 90th minute after Wilfried Singo\'s lung-busting run down the right, ' +
      'ending Ecuador\'s remarkable 19-game unbeaten run and giving the Elephants a ' +
      'dramatic Group E opening-day victory.' },

  { date:'Jun 14', round:'Matchday 1',
    home:'Sweden',  homeFlag:'🇸🇪', homeScore:5,
    away:'Tunisia', awayFlag:'🇹🇳', awayScore:1,
    venue:'Estadio BBVA',
    goals:[
      { team:'home', scorer:'Y. Ayari',      minute:"7'"    },
      { team:'home', scorer:'A. Isak',        minute:"30'"   },
      { team:'away', scorer:'O. Rekik',       minute:"43'"   },
      { team:'home', scorer:'V. Gyokeres',    minute:"59'"   },
      { team:'home', scorer:'M. Svanberg',    minute:"84'"   },
      { team:'home', scorer:'Y. Ayari',       minute:"90+6'" },
    ],
    description:
      '瑞典在 Estadio BBVA 以 5:1 大勝突尼西亞，震撼 F 組！' +
      'Ayari 第 7 分鐘遠射率先破網，Isak 30 分鐘擴大領先；' +
      '突尼西亞 Rekik 43 分鐘一度追回一球，但 Gyokeres 59 分鐘再入一球，' +
      '換人上場的 Svanberg 僅 18 秒即射門建功，Ayari 在傷時補時第 6 分鐘' +
      '補上第二個遠射，完美落幕。Isak 與 Gyokeres 的鋒線組合令人印象深刻。',
    descriptionEn:
      'Sweden made a stunning Group F statement at Estadio BBVA in Monterrey, thrashing ' +
      'Tunisia 5-1! Yasin Ayari opened with a long-range rocket in the 7th minute, ' +
      'Isak doubled it in the 30th, and although Omar Rekik pulled one back for Tunisia just ' +
      'before half-time, Gyokeres restored the two-goal cushion in the 59th. ' +
      'Substitute Svanberg scored just 18 seconds after coming on in the 84th, ' +
      'and Ayari blasted home a second long-ranger deep in stoppage time to cap a ' +
      'magnificent five-star performance.' },

  { date:'Jun 15', round:'Matchday 1',
    home:'Spain',      homeFlag:'🇪🇸', homeScore:0,
    away:'Cape Verde', awayFlag:'🇨🇻', awayScore:0,
    venue:'Mercedes-Benz Stadium',
    goals:[],
    description:
      '西班牙在亞特蘭大未能破門，與佛得角悶和 0:0！' +
      '衛冕歐洲冠軍主宰控球卻屢遭密集防守所阻，' +
      'Yamal、Olmo 及 Williams 均無功而返。' +
      '佛得角門將全場撲救出色，H 組首輪最大冷門誕生。',
    descriptionEn:
      'Spain were held to a goalless draw by Cape Verde in Atlanta — ' +
      'one of the biggest shocks of Matchday 1! ' +
      'The European champions dominated possession but were repeatedly frustrated ' +
      'by a disciplined Cape Verde low block. Yamal, Olmo and Williams all failed to ' +
      'find a way through as the Sharks earned a famous point. Group H is wide open.' },

  { date:'Jun 15', round:'Matchday 1',
    home:'Belgium',    homeFlag:'🇧🇪', homeScore:1,
    away:'Egypt',      awayFlag:'🇪🇬', awayScore:1,
    venue:'Lumen Field',
    goals:[
      { team:'away', scorer:'E. Ashour',    minute:"19'" },
      { team:'home', scorer:'M. Hany (OG)', minute:"66'" },
    ],
    description:
      '比利時與埃及平分秋色，Lukaku 的影響力不容小覷！' +
      '埃及 Ashour 19 分鐘率先破門；下半場 Lukaku 替補出場後立刻製造威脅，' +
      '埃及後衛 Mohamed Hany 在第 66 分鐘於壓迫下不慎打入自家球，' +
      '令比賽終以 1:1 收場。G 組首輪懸念未解。',
    descriptionEn:
      'Belgium and Egypt share the spoils in Seattle in a feisty Group G opener! ' +
      'Emam Ashour fired Egypt ahead in the 19th minute. ' +
      'Belgium introduced Lukaku from the bench and the pressure paid off — ' +
      'Mohamed Hany turned into his own net in the 66th minute under a Lukaku challenge. ' +
      'Both sides settled for a point; Group G remains wide open.' },

  { date:'Jun 15', round:'Matchday 1',
    home:'Saudi Arabia', homeFlag:'🇸🇦', homeScore:1,
    away:'Uruguay',      awayFlag:'🇺🇾', awayScore:1,
    venue:'Hard Rock Stadium',
    goals:[
      { team:'home', scorer:'A. Al-Amri', minute:"41'" },
      { team:'away', scorer:'M. Araújo',  minute:"80'" },
    ],
    description:
      '沙特阿拉伯與烏拉圭上演一場精彩的 H 組對決！' +
      'Al-Amri 在第 41 分鐘遠射破門，為沙特帶來半場領先優勢。' +
      '但烏拉圭馬拉度納式前鋒 Araújo 在第 80 分鐘挺身而出，' +
      '頭槌扳平比分，讓兩隊各取一分。',
    descriptionEn:
      'Saudi Arabia and Uruguay play out a tense 1-1 draw at Hard Rock Stadium in Miami! ' +
      'Al-Amri struck a fine long-range effort in the 41st minute to put Saudi Arabia ahead at ' +
      'the break. But Uruguay hit back through Matías Araújo\'s 80th-minute header to level, ' +
      'denying Saudi Arabia their first World Cup win in over a decade. ' +
      'Both teams take a point apiece in Group H.' },

  { date:'Jun 15', round:'Matchday 1',
    home:'Iran',        homeFlag:'🇮🇷', homeScore:2,
    away:'New Zealand', awayFlag:'🇳🇿', awayScore:2,
    venue:'SoFi Stadium',
    goals:[
      { team:'away', scorer:'E. Just',      minute:"7'"  },
      { team:'home', scorer:'Rezaeian',     minute:"32'" },
      { team:'away', scorer:'E. Just',      minute:"54'" },
      { team:'home', scorer:'Mohebbi',      minute:"64'" },
    ],
    description:
      '伊朗與紐西蘭在 SoFi 球場奉獻 G 組最精彩的揭幕戰！' +
      'Just 第 7 分鐘閃電破門為全白衣率先破網，' +
      'Rezaeian 32 分鐘扳平；Just 下半場再入第二球令紐西蘭再度領先，' +
      'Mohebbi 64 分鐘為伊朗再追平。' +
      '兩支初次相遇的球隊均展現頑強鬥志，以 2:2 平分結束。',
    descriptionEn:
      'A gripping Group G thriller at SoFi Stadium in Los Angeles as Iran and New Zealand ' +
      'play out an enthralling 2-2 draw! Emre Just struck in just the 7th minute to put the ' +
      'All Whites ahead. Rezaeian equalized for Iran in the 32nd, only for Just to grab his ' +
      'second of the game in the 54th. Mohebbi leveled for Iran in the 64th to make it 2-2 — ' +
      'a result that leaves Group G delightfully unpredictable.' },

  { date:'Jun 16', round:'Matchday 1',
    home:'France',  homeFlag:'🇫🇷', homeScore:3,
    away:'Senegal', awayFlag:'🇸🇳', awayScore:1,
    venue:'MetLife Stadium',
    goals:[
      { team:'home', scorer:'K. Mbappé',  minute:"66'"   },
      { team:'home', scorer:'B. Barcola', minute:"82'"   },
      { team:'away', scorer:'I. Mbaye',   minute:"90+5'" },
      { team:'home', scorer:'K. Mbappé',  minute:"90+6'" },
    ],
    description:
      '姆巴佩梅開二度，成為法國隊史最佳射手！' +
      '姆巴佩 66 分鐘接應 Olise 精準傳球破門，率先為法國打破僵局；' +
      'Barcola 82 分鐘接 Rabiot 傳球挑射擴大優勢。' +
      '塞內加爾 Mbaye 90+5 分鐘一度拉近差距，' +
      '但姆巴佩補時第 6 分鐘遠射封頂，以 3:1 鎖定勝局。' +
      '此役姆巴佩國家隊進球達 58 球，超越 Giroud 成為法國隊史頭號射手。',
    descriptionEn:
      'Mbappé delivers a masterclass at MetLife Stadium as France open with a 3-1 win over Senegal! ' +
      'He broke the deadlock in the 66th minute, darting across the box to finish a brilliant Olise through ball. ' +
      'Barcola made it 2-0 in the 82nd with a cool chip over Mendy. ' +
      'Mbaye pulled one back for Senegal in the 90+5th, but Mbappé sealed it with a long-range strike in 90+6. ' +
      'His brace took him to 58 France goals — surpassing Giroud as Les Bleus\' all-time top scorer.' },

  { date:'Jun 16', round:'Matchday 1',
    home:'Iraq',   homeFlag:'🇮🇶', homeScore:1,
    away:'Norway', awayFlag:'🇳🇴', awayScore:4,
    venue:'Gillette Stadium',
    goals:[
      { team:'away', scorer:'E. Haaland',   minute:"29'"   },
      { team:'home', scorer:'A. Hussein',   minute:"39'"   },
      { team:'away', scorer:'E. Haaland',   minute:"43'"   },
      { team:'away', scorer:'L. Óstigard',  minute:"76'"   },
      { team:'away', scorer:'A. Hussein (OG)', minute:"90+6'" },
    ],
    description:
      '哈蘭德世界盃首秀即梅開二度，挪威大勝伊拉克！' +
      '哈蘭德 29 分鐘率先破門，伊拉克 Hussein 39 分鐘頭球扳平；' +
      '但哈蘭德 43 分鐘再入一球令挪威半場 2:1 領先。' +
      'Óstigard 76 分鐘頭球擴大差距，Hussein 補時自摩為挪威送上大禮，' +
      '終以 4:1 完勝。哈蘭德終於在世界盃舞台上留下印記。',
    descriptionEn:
      'Erling Haaland finally gets his World Cup goals — and he arrives with a brace! ' +
      'Haaland opened the scoring in the 29th minute before Hussein equalized for Iraq in the 39th. ' +
      'But Haaland struck again just before half-time in the 43rd to restore Norway\'s lead. ' +
      'Óstigard headed home an Ødegaard corner in the 76th, and Hussein completed a nightmare game ' +
      'with a stoppage-time own goal to seal a 4-1 Norway rout. Group I is Norway\'s to lose.' },

  { date:'Jun 16', round:'Matchday 1',
    home:'Argentina', homeFlag:'🇦🇷', homeScore:3,
    away:'Algeria',   awayFlag:'🇩🇿', awayScore:0,
    venue:'Arrowhead Stadium',
    goals:[
      { team:'home', scorer:'L. Messi', minute:"17'" },
      { team:'home', scorer:'L. Messi', minute:"60'" },
      { team:'home', scorer:'L. Messi', minute:"76'" },
    ],
    description:
      '梅西世界盃首個帽子戲法，傳奇再添新章！' +
      '17 分鐘一腳遠射轟開僵局，60 分鐘補射擴大領先，' +
      '76 分鐘招牌弧線球三球封頂，完成世界盃史上最年長的帽子戲法（38 歲）。' +
      '此役他世界盃進球達 16 球，追平 Klose 的歷史紀錄，' +
      '並創下第 200 次代表阿根廷出賽的里程碑。',
    descriptionEn:
      'Messi makes history at Arrowhead Stadium — his first-ever World Cup hat-trick! ' +
      'A long-range rocket in the 17th, a composed tap-in in the 60th, and a trademark curling finish ' +
      'in the 76th saw Argentina cruise to a 3-0 win over Algeria. ' +
      'At 38, Messi became the oldest player to score a World Cup hat-trick and drew level with ' +
      'Miroslav Klose on 16 World Cup goals — the all-time record. ' +
      'It was also his 200th cap for Argentina. An all-time great night.' },

  { date:'Jun 16', round:'Matchday 1',
    home:'Austria', homeFlag:'🇦🇹', homeScore:3,
    away:'Jordan',  awayFlag:'🇯🇴', awayScore:1,
    venue:"Levi's Stadium",
    goals:[
      { team:'home', scorer:'R. Schmid',        minute:"20'"   },
      { team:'away', scorer:'A. Olwan',          minute:"50'"   },
      { team:'home', scorer:'Y. Al-Arab (OG)',   minute:"76'"   },
      { team:'home', scorer:'M. Arnautović (pen)', minute:"90+12'" },
    ],
    description:
      '奧地利 36 年來世界盃首勝！Schmid 20 分鐘遠射率先破門，' +
      '約旦 Olwan 50 分鐘精妙弧線球扳平——成為約旦史上首粒世界盃進球，' +
      '寫下歷史。Al-Arab 76 分鐘角球中烏龍再度讓奧地利領先，' +
      '補時 Arnautović 主射十二碼鎖定勝局。奧地利 J 組開局完美。',
    descriptionEn:
      'Austria end a 36-year World Cup winless run at Levi\'s Stadium in Santa Clara! ' +
      'Romano Schmid curled a stunning long-ranger into the top corner in the 20th minute. ' +
      'Jordan\'s Ali Olwan equalized in the 50th with a beautiful curling effort — ' +
      'the first goal in Jordanian World Cup history. ' +
      'An own goal from Al-Arab on 76 minutes restored Austria\'s lead, ' +
      'and Arnautović converted a VAR-awarded penalty deep in stoppage time to seal a 3-1 win.' },
];

const SCORES_UPDATED = '2026-06-17';

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
