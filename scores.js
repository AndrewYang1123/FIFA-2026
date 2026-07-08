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

  // ── Matchday 1, Day 7 — Jun 17 ───────────────────────────────────────────
  { date:'Jun 17', round:'Matchday 1',
    home:'Portugal', homeFlag:'🇵🇹', homeScore:1,
    away:'DR Congo', awayFlag:'🇨🇩', awayScore:1,
    venue:'NRG Stadium',
    goals:[
      { team:'home', scorer:'João Neves', minute:"6'"    },
      { team:'away', scorer:'Y. Wissa',   minute:"45+5'" },
    ],
    description:
      '葡萄牙意外被世盃首秀的剛果民主共和國逼平！Neves 6 分鐘頭槌先開紀錄，' +
      '但 Wissa 在半場結束前補時一槌扳平，寫下剛果史上首粒世盃進球。' +
      'C 羅縱橫全場仍未能破門，K 組局勢懸念盡增。',
    descriptionEn:
      'Portugal were held by World Cup debutants DR Congo! Neves headed in the 6th minute, ' +
      'but Wissa stunned Ronaldo and co. with a stoppage-time equaliser right before the break — ' +
      'Congo DR\'s first-ever World Cup goal. Group K is suddenly wide open.' },

  { date:'Jun 17', round:'Matchday 1',
    home:'England',  homeFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore:4,
    away:'Croatia',  awayFlag:'🇭🇷', awayScore:2,
    venue:'AT&T Stadium',
    goals:[
      { team:'home', scorer:'H. Kane',       minute:"12'"   },
      { team:'away', scorer:'M. Baturina',   minute:"36'"   },
      { team:'home', scorer:'H. Kane',       minute:"42'"   },
      { team:'away', scorer:'P. Musa',       minute:"45+5'" },
      { team:'home', scorer:'J. Bellingham', minute:"47'"   },
      { team:'home', scorer:'M. Rashford',   minute:"85'"   },
    ],
    description:
      '英格蘭與克羅埃西亞奉獻本屆最精彩對決！Kane 12 分鐘罰球先開紀錄，' +
      '克羅埃西亞連追兩球令比賽陷入膠著；Bellingham 下半場開球後 2 分鐘即閃電還擊，' +
      'Rashford 85 分鐘一槌鎖定 4:2 勝局。英格蘭強勢登頂 L 組。',
    descriptionEn:
      'England and Croatia served up a World Cup classic in Dallas! Kane\'s early penalty, ' +
      'two Croatian equalisers, then Bellingham\'s thunderbolt just 2 minutes after half-time ' +
      'before Rashford sealed a brilliant 4-2 win. England top Group L in a match that had everything.' },

  { date:'Jun 17', round:'Matchday 1',
    home:'Ghana',  homeFlag:'🇬🇭', homeScore:1,
    away:'Panama', awayFlag:'🇵🇦', awayScore:0,
    venue:'BMO Field',
    goals:[
      { team:'home', scorer:'C. Yirenkyi', minute:"90+5'" },
    ],
    description:
      '世界盃最戲劇性的一刻！巴拿馬主導全場卻未能把握機會，' +
      '迦納替補球員 Yirenkyi 在第 90+5 分鐘突破禁區輕鬆推射，' +
      '以本屆最后時刻絕殺令全場目瞪口呆，奪下三分。',
    descriptionEn:
      'Ghana stole the most dramatic win of the tournament so far! Panama controlled the game ' +
      'throughout but couldn\'t score, and substitute Yirenkyi tapped home a stunning 90+5\' winner — ' +
      'one of the latest decisive goals in World Cup history.' },

  { date:'Jun 17', round:'Matchday 1',
    home:'Uzbekistan', homeFlag:'🇺🇿', homeScore:1,
    away:'Colombia',   awayFlag:'🇨🇴', awayScore:3,
    venue:'Estadio Azteca',
    goals:[
      { team:'away', scorer:'D. Muñoz',    minute:"40'"   },
      { team:'home', scorer:'Fayzullaev',  minute:"60'"   },
      { team:'away', scorer:'Luis Díaz',   minute:"65'"   },
      { team:'away', scorer:'J. Campaz',   minute:"90+9'" },
    ],
    description:
      '哥倫比亞在 Azteca 球場強勢出征！Muñoz 率先破網，烏茲別克敢死隊迅速扳平，' +
      '但 Luis Díaz 5 分鐘後精彩重奪優勢，Campaz 深入補時再補一球蓋棺論定。' +
      '哥倫比亞領跑 K 組，葡萄牙意外平局使小組競爭更激烈。',
    descriptionEn:
      'Colombia made a statement at the Azteca! After Muñoz\'s opener and Fayzullaev\'s quick equaliser, ' +
      'Luis Díaz restored the lead with a brilliant strike and Campaz killed it off deep in ' +
      'stoppage time. Colombia top Group K — Portugal\'s earlier draw leaves the group wide open.' },

  // ── Matchday 2, Day 1 — Jun 18 ───────────────────────────────────────────
  { date:'Jun 18', round:'Matchday 2',
    home:'Czechia',      homeFlag:'🇨🇿', homeScore:1,
    away:'South Africa', awayFlag:'🇿🇦', awayScore:1,
    venue:'Mercedes-Benz Stadium',
    goals:[
      { team:'home', scorer:'M. Sadilek', minute:"6'"  },
      { team:'away', scorer:'T. Mokoena', minute:"83'" },
    ],
    description:
      '捷克的領先被南非最後關頭逆轉！Sadilek 6 分鐘閃電破門，捷克穩穩主導全場，' +
      '但 Mokoena 83 分鐘冷靜主射十二碼扳平，南非奪下寶貴一分，A 組頂部競爭更趨激烈。',
    descriptionEn:
      'South Africa snatched a vital late point! Sadilek gave Czechia the lead in just 6 minutes, ' +
      'but Mokoena\'s cool 83rd-minute penalty rescued a draw for Bafana Bafana — ' +
      'keeping Group A tightly contested with Mexico already through.' },

  { date:'Jun 18', round:'Matchday 2',
    home:'Switzerland',            homeFlag:'🇨🇭', homeScore:4,
    away:'Bosnia and Herzegovina', awayFlag:'🇧🇦', awayScore:1,
    venue:'SoFi Stadium',
    goals:[
      { team:'home', scorer:'J. Manzambi', minute:"74'"   },
      { team:'home', scorer:'R. Vargas',   minute:"84'"   },
      { team:'home', scorer:'J. Manzambi', minute:"90'"   },
      { team:'away', scorer:'E. Mahmic',   minute:"90+3'" },
      { team:'home', scorer:'G. Xhaka',    minute:"90+7'" },
    ],
    cards:[
      { team:'away', player:'T. Muharemovic', minute:"80'", type:'red' },
    ],
    description:
      '瑞士下半場強勢爆發，最後 16 分鐘四球橫掃！80 分鐘波赫球員遭紅牌逐出後，' +
      '替補球員 Manzambi 連入兩球，Vargas 中距離炸門，Xhaka 補時主射十二碼蓋棺，' +
      '波赫僅能在混亂中扳回一城。瑞士昂首登頂 B 組。',
    descriptionEn:
      'Switzerland erupted in the final 16 minutes! After Bosnia\'s Muharemovic saw red on 80\', ' +
      'sub Manzambi struck twice, Vargas added a stunning long-range effort, and Xhaka ' +
      'converted a late penalty. All four Swiss goals came after the 74th minute — a stunning blitz.' },

  { date:'Jun 18', round:'Matchday 2',
    home:'Canada', homeFlag:'🇨🇦', homeScore:6,
    away:'Qatar',  awayFlag:'🇶🇦', awayScore:0,
    venue:'BC Place',
    goals:[
      { team:'home', scorer:'C. Larin',   minute:"16'"   },
      { team:'home', scorer:'J. David',   minute:"29'"   },
      { team:'home', scorer:'J. David',   minute:"45+3'" },
      { team:'home', scorer:'N. Saliba',  minute:"64'"   },
      { team:'away', scorer:'Manai (OG)', minute:"75'"   },
      { team:'home', scorer:'J. David',   minute:"90+2'" },
    ],
    cards:[
      { team:'away', player:'H. Ahmed',  minute:"33'", type:'red' },
      { team:'away', player:'A. Madibo', minute:"51'", type:'red' },
    ],
    description:
      '加拿大在主場 BC Place 締造歷史！Jonathan David 大四喜領銜演出，' +
      '卡達兩名球員先後遭紅牌逐出，楓葉隊以 6:0 狂掃，創下 CONCACAF 球隊世界盃史上最大勝仗。' +
      'Koné 受傷離場令人揪心，但 BC Place 全場沸騰，加拿大積四分領跑 B 組。',
    descriptionEn:
      'Canada made history at BC Place! Jonathan David\'s four goals — a hat-trick and more — ' +
      'headlined a stunning 6-0 demolition. Qatar were reduced to nine men with two red cards, ' +
      'and Canada secured the biggest win by a CONCACAF nation in World Cup history, ' +
      'topping Group B with four points.' },

  { date:'Jun 18', round:'Matchday 2',
    home:'Mexico',      homeFlag:'🇲🇽', homeScore:1,
    away:'South Korea', awayFlag:'🇰🇷', awayScore:0,
    venue:'Estadio Akron',
    goals:[
      { team:'home', scorer:'L. Romo', minute:"50'" },
    ],
    description:
      '墨西哥以最幸運的進球率先確定晉級！南韓門將 Kim 出迎時與後衛相撞失誤，球滾進禁區，' +
      'Romo 50 分鐘面對空門輕鬆推射。墨西哥成為本屆首支晉級 32 強的球隊，' +
      '以六分完美領跑 A 組，揭幕戰光芒再現。',
    descriptionEn:
      'Mexico clinched their knockout spot in the luckiest fashion! South Korea keeper Kim ' +
      'collided with his own defender while rushing off his line, leaving Romo to tap into ' +
      'an empty net on 50 minutes. Mexico are the first team to qualify at World Cup 2026, ' +
      'topping Group A with a perfect six points.' },

  // ── Matchday 2, Day 2 — Jun 19 ───────────────────────────────────────────
  { date:'Jun 19', round:'Matchday 2',
    home:'USA',       homeFlag:'🇺🇸', homeScore:2,
    away:'Australia', awayFlag:'🇦🇺', awayScore:0,
    venue:'Lumen Field',
    goals:[
      { team:'home', scorer:'Burgess (OG)', minute:"11'" },
      { team:'home', scorer:'A. Freeman',   minute:"46'" },
    ],
    description:
      '美國以穩健姿態淘汰澳洲，確定 D 組出線！11 分鐘 Balogun 左路突破傳中，' +
      '澳洲後衛 Burgess 不慎烏龍入網率先為美國送分；' +
      '下半場開賽後 Freeman 在禁區前沿補射落網，鎖定 2:0 勝局。' +
      '美國積 6 分完美領跑 D 組，Christian Pulisic 缺陣亦無損美軍戰力。',
    descriptionEn:
      'The USMNT secured their knockout berth with a commanding 2-0 win over Australia at Lumen Field! ' +
      'Cameron Burgess turned a Folarin Balogun cross into his own net in the 11th minute, ' +
      'and Alex Freeman headed home a rebound just after half-time to seal the victory. ' +
      'The US top Group D with six points despite Pulisic sitting out through injury — ' +
      'a perfect Group D record heading into the final matchday.' },

  { date:'Jun 18', round:'Matchday 2',
    home:'Türkiye',  homeFlag:'🇹🇷', homeScore:0,
    away:'Paraguay', awayFlag:'🇵🇾', awayScore:1,
    venue:"Levi's Stadium",
    goals:[
      { team:'away', scorer:'M. Galarza', minute:"2'" },
    ],
    cards:[
      { team:'away', player:'M. Almirón', minute:"45+3'", type:'red' },
    ],
    description:
      '巴拉圭以最驚險方式奪勝！Galarza 開賽僅 2 分鐘便以一腳 25 米遠射破網，' +
      '成為本屆最快進球之一。然而半場前 Almirón 因遮嘴慶祝觸犯 FIFA 新規遭紅牌驅逐，' +
      '十人巴拉圭浴血奮戰守住一球優勢，最終淘汰土耳其，D 組局面大逆轉。',
    descriptionEn:
      'Paraguay held on for a stunning 1-0 win after the most bizarre red card of the tournament! ' +
      'Galarza\'s stunning 25-metre strike in the 2nd minute gave them the lead, but Almirón was ' +
      'controversially sent off in stoppage time for covering his mouth — under FIFA\'s new rule. ' +
      'Ten-man Paraguay ground out the win to eliminate Türkiye.' },

  // ── Matchday 2, Day 2 (cont.) — Jun 19 ──────────────────────────────────
  { date:'Jun 19', round:'Matchday 2',
    home:'Scotland', homeFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', homeScore:0,
    away:'Morocco',  awayFlag:'🇲🇦', awayScore:1,
    venue:'Gillette Stadium',
    goals:[
      { team:'away', scorer:'I. Saibari', minute:"2'" },
    ],
    description:
      '摩洛哥閃電 2 分鐘破門，蘇格蘭全場追趕無果！Saibari 接 Brahim Díaz 妙傳後' +
      '不停球直接勁射入頂角，71 秒便成功破網——本屆世盃最快致勝進球紀錄。' +
      '摩洛哥防守嚴密，蘇格蘭下半場密攻皆被化解，C 組頂部之爭白熱化。',
    descriptionEn:
      'Morocco stunned Scotland with a 71-second opener — the fastest winning goal in a 1-0 result ' +
      'in World Cup history! Saibari fired home a first-time finish from Brahim Díaz\'s pass, ' +
      'and Morocco\'s resolute defending held out Scotland\'s second-half pressure throughout.' },

  { date:'Jun 19', round:'Matchday 2',
    home:'Brazil', homeFlag:'🇧🇷', homeScore:3,
    away:'Haiti',  awayFlag:'🇭🇹', awayScore:0,
    venue:'Lincoln Financial Field',
    goals:[
      { team:'home', scorer:'M. Cunha',      minute:"23'"   },
      { team:'home', scorer:'M. Cunha',      minute:"36'"   },
      { team:'home', scorer:'Vinícius Jr',   minute:"45+3'" },
    ],
    description:
      '巴西上半場三球橫掃，Cunha 梅開二度大放異彩！23 分鐘混亂中率先破網，' +
      '36 分鐘再以精妙左腳抽射追加，Vinícius Júnior 在傷停時間再補一球，' +
      '半場已奠定勝局。下半場安塞洛蒂換人保存體力，巴西穩居 C 組榜首。',
    descriptionEn:
      'Brazil were devastating in the first half! Cunha netted a brace — a scrappy opener in the 23rd ' +
      'and a brilliant left-footed finish in the 36th — before Vinícius Jr. sealed it in stoppage time. ' +
      'Brazil top Group C on goal difference, with Haiti now eliminated.' },

  // ── Matchday 2, Day 3 — Jun 20 ───────────────────────────────────────────
  { date:'Jun 20', round:'Matchday 2',
    home:'Netherlands', homeFlag:'🇳🇱', homeScore:5,
    away:'Sweden',      awayFlag:'🇸🇪', awayScore:1,
    venue:'NRG Stadium',
    goals:[
      { team:'home', scorer:'B. Brobbey',     minute:"5'"  },
      { team:'home', scorer:'B. Brobbey',     minute:"17'" },
      { team:'home', scorer:'C. Gakpo',       minute:"47'" },
      { team:'home', scorer:'C. Gakpo',       minute:"54'" },
      { team:'away', scorer:'A. Elanga',      minute:"59'" },
      { team:'home', scorer:'C. Summerville', minute:"89'" },
    ],
    description:
      '荷蘭在休斯頓震撼全場，5:1 大破瑞典！Brobbey 17 分鐘內連入兩球奠定基調，' +
      'Gakpo 下半場接力梅開二度，Summerville 最後破門錦上添花。' +
      '瑞典 Elanga 僅留一粒安慰球，荷蘭以暴力足球昂首領跑 F 組。',
    descriptionEn:
      'The Netherlands were electric — Brobbey\'s brace inside 17 minutes set the tone for a ' +
      'dominant 5-1 demolition! Gakpo added a second-half double before Summerville finished it off. ' +
      'Elanga\'s consolation was merely a footnote. Netherlands lead Group F in style.' },

  { date:'Jun 20', round:'Matchday 2',
    home:'Germany',     homeFlag:'🇩🇪', homeScore:2,
    away:'Ivory Coast', awayFlag:'🇨🇮', awayScore:1,
    venue:'BMO Field',
    goals:[
      { team:'away', scorer:'F. Kessié', minute:"30'"   },
      { team:'home', scorer:'D. Undav',  minute:"68'"   },
      { team:'home', scorer:'D. Undav',  minute:"90+4'" },
    ],
    description:
      '德國最後一刻驚魂逆轉！象牙海岸隊長 Kessié 30 分鐘強勢破網，' +
      '地主如坐針氈。替補球員 Undav 68 分鐘出場後即扳平，' +
      '並在第 90+4 分鐘再度一槌定音，全場沸騰。德國以鬥志奪下 E 組關鍵三分。',
    descriptionEn:
      'Germany snatched a dramatic late comeback! Ivory Coast captain Kessié gave the Elephants ' +
      'a shock lead that held until the 68th minute when super-sub Undav equalised — then struck ' +
      'again in the 94th minute to seal a barely deserved but crucial victory for Germany.' },

  { date:'Jun 20', round:'Matchday 2',
    home:'Ecuador',  homeFlag:'🇪🇨', homeScore:0,
    away:'Curaçao',  awayFlag:'🇨🇼', awayScore:0,
    venue:'Arrowhead Stadium',
    description:
      '本屆最精彩的門將表演！庫拉索門將 Eloy Room 全場獨力撐起，完成多達 15 次神撲，' +
      '令厄瓜多 26 腳射門全部告終。厄瓜多以 75% 控球率主導全場，卻功虧一簣，' +
      '庫拉索以 0:0 奪得世界盃歷史首積分。',
    descriptionEn:
      'One of the great World Cup goalkeeping performances! Curaçao keeper Eloy Room made 15 saves ' +
      'to earn a historic first-ever World Cup point, denying Ecuador 26 times despite 75% possession ' +
      'and Valencia\'s golden chances. A stunning shutout that shocked Group E.' },

  { date:'Jun 20', round:'Matchday 2',
    home:'Tunisia', homeFlag:'🇹🇳', homeScore:0,
    away:'Japan',   awayFlag:'🇯🇵', awayScore:4,
    venue:'Estadio BBVA',
    goals:[
      { team:'away', scorer:'D. Kamada', minute:"4'"  },
      { team:'away', scorer:'A. Ueda',   minute:"31'" },
      { team:'away', scorer:'J. Ito',    minute:"69'" },
      { team:'away', scorer:'A. Ueda',   minute:"83'" },
    ],
    description:
      '日本大開殺戒，4:0 橫掃突尼西亞！Kamada 4 分鐘閃電破門，創日本世盃最快入球紀錄；' +
      'Ueda 梅開二度加上 Ito 第 69 分鐘冷靜推射，' +
      '日本完成大勝，突尼西亞出局，並寫下日本世界盃史上最大勝仗。',
    descriptionEn:
      'Japan were ruthless! Kamada struck in the 4th minute — the fastest goal in Japan\'s World Cup ' +
      'history — then Ueda\'s brace and Ito\'s cool finish completed a dominant 4-0 victory. ' +
      'Japan set a new record for their biggest ever World Cup win; Tunisia are eliminated.' },

  // ── Jun 21 ──────────────────────────────────────────────────────────────

  { date:'Jun 21', round:'Matchday 2',
    home:'Spain',        homeFlag:'🇪🇸', homeScore:4,
    away:'Saudi Arabia', awayFlag:'🇸🇦', awayScore:0,
    venue:'Mercedes-Benz Stadium',
    goals:[
      { team:'home', scorer:'L. Yamal',      minute:"11'" },
      { team:'home', scorer:'M. Oyarzabal',  minute:"21'" },
      { team:'home', scorer:'M. Oyarzabal',  minute:"23'" },
      { team:'away', scorer:'Al-Tambakti OG',minute:"49'" },
    ],
    description:
      '西班牙終於爆發！17 歲天才 Lamine Yamal 首粒世界盃進球（第 11 分鐘），' +
      'Oyarzabal 在 21、23 兩分鐘連下兩城完成上半場屠殺，' +
      '沙特後衛 Al-Tambakti 烏龍球令比數定格 4:0。西班牙為首戰平局完美雪恥。',
    descriptionEn:
      'Spain answered their critics in style! Teen sensation Lamine Yamal opened his World Cup account ' +
      'in the 11th minute, becoming one of the youngest ever WC scorers. Oyarzabal added a brace in two ' +
      'minutes (21\'/23\') before Al-Tambakti\'s own goal completed a ruthless 4-0 victory — La Roja are back.' },

  { date:'Jun 21', round:'Matchday 2',
    home:'Belgium', homeFlag:'🇧🇪', homeScore:0,
    away:'Iran',    awayFlag:'🇮🇷', awayScore:0,
    venue:'SoFi Stadium',
    cards:[
      { team:'home', player:'N. Ngoy', minute:"66'", type:'red' },
    ],
    description:
      '令人窒息的 0:0！比利時後衛 Ngoy 第 66 分鐘回傳失誤後，為阻截 Taremi 單刀犯規領紅，' +
      '以 10 人迎戰剩餘賽事。伊朗門將 Beiranvand 全場七次神撲，Taremi 一腳被 VAR 判定越位無效。' +
      '伊朗憑此平局暫登 G 組榜首。',
    descriptionEn:
      'A tense 0-0 in Los Angeles! Belgium defender Ngoy was shown a straight red in the 66th minute ' +
      'for hauling down Taremi on a clear breakaway after a dreadful back-pass. Iran keeper Beiranvand ' +
      'made seven saves; Taremi\'s goal was ruled out for offside via VAR. Iran top Group G on points.' },

  { date:'Jun 21', round:'Matchday 2',
    home:'Uruguay',    homeFlag:'🇺🇾', homeScore:2,
    away:'Cape Verde', awayFlag:'🇨🇻', awayScore:2,
    venue:'Hard Rock Stadium',
    goals:[
      { team:'away', scorer:'K. Pina',      minute:"21'" },
      { team:'home', scorer:'M. Araújo',    minute:"44'" },
      { team:'home', scorer:'A. Canobbio',  minute:"45+6'" },
      { team:'away', scorer:'H. Varela',    minute:"61'" },
    ],
    description:
      '又是佛得角！Kevin Pina 第 21 分鐘以一腳 32 米超遠界外球轟破球門，' +
      '創本屆最遠進球紀錄；烏拉圭靠 Araújo（44\'）和 Canobbio（45+6\'）連入兩球翻盤，' +
      '但替補 Hélio Varela 第 61 分鐘補時神射令比數再度扳平。佛得角已連奪兩場平局，' +
      '奇蹟晉級之路仍未熄滅！',
    descriptionEn:
      'Cape Verde stun Uruguay again! Kevin Pina\'s outrageous 32-metre free-kick opened the scoring — ' +
      'the longest-range goal of the 2026 tournament. Uruguay fought back through Araújo and Canobbio, ' +
      'but Hélio Varela came off the bench to snatch a point in the 61st minute. The Blue Sharks keep ' +
      'their knockout dream alive with two draws from two.' },

  { date:'Jun 21', round:'Matchday 2',
    home:'New Zealand', homeFlag:'🇳🇿', homeScore:1,
    away:'Egypt',       awayFlag:'🇪🇬', awayScore:3,
    venue:'BC Place',
    goals:[
      { team:'home', scorer:'F. Surman',    minute:"15'" },
      { team:'away', scorer:'Mostafa Zico', minute:"58'" },
      { team:'away', scorer:'M. Salah',     minute:"67'" },
      { team:'away', scorer:'Trézéguet',    minute:"82'" },
    ],
    description:
      '薩拉赫帶領埃及寫下世界盃歷史！Surman 第 15 分鐘先開紀錄，但埃及下半場神勇反彈：' +
      'Mostafa Zico 頭球破門（58\'），薩拉赫低平炮劃入遠角（67\'），' +
      '替補 Trézéguet 再補頭球（82\'）完成逆轉。埃及 3:1 奪下 G 組首勝，' +
      '也是埃及隊史首場世界盃勝仗！',
    descriptionEn:
      'Egypt make history! New Zealand led through Surman\'s 15th-minute header, but Egypt turned it ' +
      'around with a brilliant second half. Mostafa Zico headed in from a Salah cross (58\'), then Salah ' +
      'himself curled a trademark left-footed drive into the far corner (67\'). Trézéguet headed home ' +
      'the third in the 82nd to complete Egypt\'s first-ever World Cup victory — a historic night in Vancouver.' },

  // ── Jun 22 ──────────────────────────────────────────────────────────────

  { date:'Jun 22', round:'Matchday 2',
    home:'Argentina', homeFlag:'🇦🇷', homeScore:2,
    away:'Austria',   awayFlag:'🇦🇹', awayScore:0,
    venue:'AT&T Stadium',
    goals:[
      { team:'home', scorer:'L. Messi', minute:"38'"   },
      { team:'home', scorer:'L. Messi', minute:"90+5'" },
    ],
    description:
      '梅西改寫歷史！錯失點球後仍以第 38 分鐘及第 90+5 分鐘梅開二度，' +
      '世界盃生涯進球數達 18 球，超越克洛澤成為世界盃史上最多進球球員。' +
      '阿根廷提前出線，J 組榜首地位穩如磐石，衛冕之路氣勢如虹。',
    descriptionEn:
      'The Messi Game! He missed a penalty but still delivered a stunning brace — scoring in the 38th ' +
      'minute and again deep in stoppage time (90+5\') to reach 18 World Cup goals, overtaking ' +
      'Miroslav Klose as the all-time leading WC scorer. Argentina advance from Group J with a game to spare.' },

  { date:'Jun 22', round:'Matchday 2',
    home:'France', homeFlag:'🇫🇷', homeScore:3,
    away:'Iraq',   awayFlag:'🇮🇶', awayScore:0,
    venue:'Lincoln Financial Field',
    goals:[
      { team:'home', scorer:'K. Mbappé',   minute:"14'" },
      { team:'home', scorer:'K. Mbappé',   minute:"54'" },
      { team:'home', scorer:'O. Dembélé',  minute:"66'" },
    ],
    description:
      '百帽加冕梅開二度！法國對陣伊拉克因雷暴中斷近 2 小時，' +
      'Mbappé 在第 14 分鐘以左腳遠射先開紀錄，復賽後第 54 分鐘再下一城，' +
      'Dembélé 第 66 分鐘完成比賽。這是 Mbappé 第 100 次代表法國出賽，' +
      '本屆已入 4 球，法國提前晉級 I 組出線。',
    descriptionEn:
      'Century cap, double delight! France\'s match against Iraq was delayed nearly 2 hours by ' +
      'thunderstorms in Philadelphia. Mbappé marked his 100th France cap with a brace — a 20-yard ' +
      'screamer in the 14th minute and a tap-in in the 54th. Dembélé added a third (66\') on his way to ' +
      'France\'s fourth successive World Cup knockout-stage qualification.' },

  { date:'Jun 22', round:'Matchday 2',
    home:'Norway',  homeFlag:'🇳🇴', homeScore:3,
    away:'Senegal', awayFlag:'🇸🇳', awayScore:2,
    venue:'MetLife Stadium',
    goals:[
      { team:'home', scorer:'M. Pedersen', minute:"43'"   },
      { team:'away', scorer:'I. Sarr',     minute:"53'"   },
      { team:'home', scorer:'E. Haaland',  minute:"48'"   },
      { team:'home', scorer:'E. Haaland',  minute:"58'"   },
      { team:'away', scorer:'I. Sarr',     minute:"90+3'" },
    ],
    description:
      '哈蘭德大戰！挪威靠 Pedersen（43\'）先入，Sarr（53\'）為塞內加爾扳平後，' +
      '哈蘭德霸氣梅開二度（48\'、58\'），4 場球加起來 4 球統治整個 I 組射手榜。' +
      'Sarr 補時入球雖減分，挪威仍以 3:2 勝出，順利晉級。',
    descriptionEn:
      'Haaland takes over! Norway struck first through Pedersen (43\'), Senegal levelled via Sarr ' +
      '(53\'), but Haaland settled it with a clinical brace — 48\' and 58\' — to give Norway a 3-1 cushion. ' +
      'Sarr grabbed a late consolation (90+3\') but Norway held on 3-2. Haaland now has 4 goals in 2 games ' +
      'and leads the Golden Boot race alongside Messi and Mbappé.' },

  { date:'Jun 22', round:'Matchday 2',
    home:'Jordan',  homeFlag:'🇯🇴', homeScore:1,
    away:'Algeria', awayFlag:'🇩🇿', awayScore:2,
    venue:"Levi's Stadium",
    goals:[
      { team:'home', scorer:'N. Al-Rashdan', minute:"36'" },
      { team:'away', scorer:'N. Benbouali',  minute:"68'" },
      { team:'away', scorer:'A. Gouiri',     minute:"82'" },
    ],
    description:
      '阿爾及利亞逆轉！約旦 Al-Rashdan 第 36 分鐘外腳背精彩破門令全場沸騰，' +
      '下半場阿爾及利亞靠定位球連入兩球還以顏色：Benbouali（68\'）頭球破門，' +
      'Gouiri（82\'）角球後頭球封殺比賽。約旦憾負出局，阿爾及利亞晉級希望猶存。',
    descriptionEn:
      'Algeria comeback kings! Jordan shocked the Bay Area crowd with a stunning Al-Rashdan ' +
      'outside-of-the-boot curler in the 36th minute. But Algeria rallied with two set-piece headers — ' +
      'Benbouali in the 68th from a Mahrez corner, and Gouiri in the 82nd — to snatch a crucial win. ' +
      'Jordan are eliminated; Algeria stay alive in Group J.' },

  // ── Jun 23 ──────────────────────────────────────────────────────────────

  { date:'Jun 23', round:'Matchday 2',
    home:'Portugal',   homeFlag:'🇵🇹', homeScore:5,
    away:'Uzbekistan', awayFlag:'🇺🇿', awayScore:0,
    venue:'NRG Stadium',
    goals:[
      { team:'home', scorer:'C. Ronaldo',   minute:"6'"  },
      { team:'home', scorer:'N. Mendes',    minute:"17'" },
      { team:'home', scorer:'C. Ronaldo',   minute:"39'" },
      { team:'away', scorer:'Nematov OG',   minute:"60'" },
      { team:'home', scorer:'R. Leão',      minute:"87'" },
    ],
    description:
      'C 羅歷史性六屆世界盃破門！第 6 分鐘閃電破門後，Mendes 17 分鐘界外球得分，' +
      'C 羅 39 分鐘再下一城完成半場屠殺。下半場 Nematov 烏龍（60\'）及替補 Leão（87\'）' +
      '錦上添花。葡萄牙 5:0 大勝，C 羅成為首位在六屆世界盃均有入球的球員。',
    descriptionEn:
      'Ronaldo writes history again! He scored in the 6th minute — becoming the first player ever ' +
      'to score at six separate World Cups. Mendes added a brilliant free-kick (17\'), Ronaldo completed ' +
      'his brace (39\'), then Nematov\'s own goal (60\') and Leão\'s 87th-minute strike rounded off ' +
      'a dominant 5-0 victory for Portugal in Houston.' },

  { date:'Jun 23', round:'Matchday 2',
    home:'England', homeFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore:0,
    away:'Ghana',   awayFlag:'🇬🇭', awayScore:0,
    venue:'Gillette Stadium',
    description:
      '英格蘭 0:0 悶平迦納！三獅軍全場掌控卻無力破門，19 腳射門無一入網。' +
      'O\'Reilly 第 86 分鐘挑中橫楣，Guehi 補時頭球被清出門線，創英格蘭世界盃最多射門不入的一場。',
    descriptionEn:
      'England frustrate again! They dominated Ghana with 19 shots but couldn\'t find the net. ' +
      'O\'Reilly rattled the crossbar in the 86th minute and Guehi had a header cleared off the line ' +
      'in stoppage time — a goalless draw that sets up a nervy final group game.' },

  { date:'Jun 23', round:'Matchday 2',
    home:'Panama',  homeFlag:'🇵🇦', homeScore:0,
    away:'Croatia', awayFlag:'🇭🇷', awayScore:1,
    venue:'BMO Field',
    goals:[
      { team:'away', scorer:'A. Budimir', minute:"54'" },
    ],
    description:
      '克羅埃西亞最重要的一勝！Budimir 第 54 分鐘頭球破門，為球隊在 L 組拿下首分。' +
      '巴拿馬雖積極壓迫，但克羅埃西亞後防線由 Gvardiol 帶領穩守至完場，1:0 出線希望大增。',
    descriptionEn:
      'Croatia grind out a vital win! Budimir\'s powerful 54th-minute header broke the deadlock ' +
      'and proved to be the difference. Gvardiol marshalled a resolute defensive display as Croatia ' +
      'held off Panama\'s late pressure to claim three crucial points in Toronto.' },

  { date:'Jun 23', round:'Matchday 2',
    home:'Colombia', homeFlag:'🇨🇴', homeScore:1,
    away:'DR Congo', awayFlag:'🇨🇩', awayScore:0,
    venue:'Estadio Akron',
    goals:[
      { team:'home', scorer:'D. Muñoz', minute:"76'" },
    ],
    description:
      '哥倫比亞靠意志贏球！Daniel Muñoz 第 76 分鐘遠射破門，為哥倫比亞拿下 K 組關鍵三分。' +
      '剛果民主共和國世盃首秀表現不俗，但最終黯然落敗。哥倫比亞與葡萄牙並列 K 組前二。',
    descriptionEn:
      'Colombia edge a tight one! Daniel Muñoz unleashed a long-range strike in the 76th minute ' +
      'to settle a hard-fought contest in Guadalajara. DR Congo showed quality on their World Cup ' +
      'debut but couldn\'t find an equaliser. Colombia join Portugal at the top of Group K.' },

  // ── Jun 24 — Matchday 3 ─────────────────────────────────────────────────

  { date:'Jun 24', round:'Matchday 3',
    home:'Switzerland', homeFlag:'🇨🇭', homeScore:2,
    away:'Canada',      awayFlag:'🇨🇦', awayScore:1,
    venue:'BC Place',
    goals:[
      { team:'home', scorer:'R. Vargas',    minute:"46'"  },
      { team:'home', scorer:'J. Manzambi',  minute:"57'"  },
      { team:'away', scorer:'J. David',     minute:"76'"  },
    ],
    description:
      '瑞士主宰 B 組！Vargas 下半場開場 39 秒即閃電破門（46\'），' +
      'Manzambi 再入一球（57\'）確立優勢，加拿大 David 76 分鐘追回一球但無力回天。' +
      '瑞士以 B 組榜首晉級；加拿大作為地主國雖居第二仍成功出線。',
    descriptionEn:
      'Switzerland top Group B with flair! Vargas struck 39 seconds after the restart (46\'), then ' +
      'Manzambi doubled the lead (57\'). Jonathan David pulled one back for Canada in the 76th, but ' +
      'the Swiss held firm. Switzerland advance as group winners; Canada qualify as runners-up.' },

  { date:'Jun 24', round:'Matchday 3',
    home:'Bosnia & Herz.', homeFlag:'🇧🇦', homeScore:3,
    away:'Qatar',          awayFlag:'🇶🇦', awayScore:1,
    venue:'Lumen Field',
    goals:[
      { team:'home', scorer:'K. Alajbegović', minute:"29'"  },
      { team:'away', scorer:'Abunada OG',      minute:"34'"  },
      { team:'away', scorer:'A. Al-Haydos',   minute:"42'"  },
      { team:'home', scorer:'N. Mahmić',       minute:"82'"  },
    ],
    description:
      '波黑大勝卡達！18 歲小將 Alajbegović 第 29 分鐘入球成為本屆世界盃第八年輕入球者，' +
      '卡達自擺烏龍（34\'）雪上加霜；Al-Haydos（42\'）一度扳回一球，' +
      '但 Mahmić（82\'）補時封棺 3:1。波黑以最佳第三名資格有望晉級。',
    descriptionEn:
      'Bosnia punish Qatar! Teen Alajbegović (18) opened the scoring in the 29th minute to become one ' +
      'of the youngest WC scorers this year. An Abunada own goal (34\') doubled the lead before ' +
      'Al-Haydos pulled one back (42\'). Mahmić sealed it in the 82nd. Bosnia finish third in Group B ' +
      'but advance as one of the best third-placed teams.' },

  { date:'Jun 24', round:'Matchday 3',
    home:'Scotland', homeFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', homeScore:0,
    away:'Brazil',   awayFlag:'🇧🇷', awayScore:3,
    venue:'Hard Rock Stadium',
    goals:[
      { team:'away', scorer:'Vinícius Jr',  minute:"7'"   },
      { team:'away', scorer:'Vinícius Jr',  minute:"45'"  },
      { team:'away', scorer:'M. Cunha',     minute:"60'"  },
    ],
    description:
      '維尼修斯三戰三球！McKenna 7 分鐘重大失誤，維尼修斯閃電破門；' +
      '上半場補時他再以頭球入網（45\'），Cunha 60 分鐘再下一城。' +
      '內馬爾 76 分鐘傷癒復出，巴西以 C 組第一強勢晉級。蘇格蘭就此出局。',
    descriptionEn:
      'Brazil march on — Vinícius unstoppable! He pounced on a McKenna howler in the 7th minute, ' +
      'headed in a second just before halftime (45\'), and Cunha added a fine third in the 60th. ' +
      'Neymar returned from injury as a substitute (76\') to a roaring reception in Miami. ' +
      'Brazil top Group C; Scotland are eliminated.' },

  { date:'Jun 24', round:'Matchday 3',
    home:'Morocco', homeFlag:'🇲🇦', homeScore:4,
    away:'Haiti',   awayFlag:'🇭🇹', awayScore:2,
    venue:'Mercedes-Benz Stadium',
    goals:[
      { team:'away', scorer:'Bounou OG',   minute:"10'"   },
      { team:'home', scorer:'A. Hakimi',   minute:"39'"   },
      { team:'away', scorer:'W. Isidor',   minute:"43'"   },
      { team:'home', scorer:'I. Saibari',  minute:"45+1'" },
      { team:'home', scorer:'S. Rahimi',   minute:"78'"   },
      { team:'home', scorer:'Y. Gessime',  minute:"89'"   },
    ],
    description:
      '六球瘋狂大戰！摩洛哥門將 Bounou 烏龍球（10\'）讓海地意外領先，' +
      'Hakimi 39 分鐘扳平，Isidor 43 分鐘令海地再度反超，' +
      'Saibari 補時（45+1\'）即時追平，下半場 Rahimi（78\'）和 Gessime（89\'）' +
      '補時連入兩球完成逆轉。摩洛哥以 C 組第二晉級，海地雖敗猶榮。',
    descriptionEn:
      'Six-goal thriller! Morocco keeper Bounou gifted Haiti an own-goal opener (10\'), Hakimi ' +
      'equalised (39\'), Isidor put Haiti back ahead (43\'), but Saibari levelled right before halftime ' +
      '(45+1\'). In the second half, Rahimi (78\') and Gessime (89\') completed a stunning comeback ' +
      'to give Morocco a 4-2 win. Morocco advance as Group C runners-up behind Brazil.' },

  { date:'Jun 24', round:'Matchday 3',
    home:'Czechia', homeFlag:'🇨🇿', homeScore:0,
    away:'Mexico',  awayFlag:'🇲🇽', awayScore:3,
    venue:'Estadio Azteca',
    goals:[
      { team:'away', scorer:'M. Chávez',   minute:"55'"   },
      { team:'away', scorer:'J. Quiñones', minute:"61'"   },
      { team:'away', scorer:'Á. Fidalgo',  minute:"90+4'" },
    ],
    description:
      '墨西哥主場完美收官！在地標 Azteca 球場三戰全勝，' +
      'Chávez（55\'）、Quiñones（61\'）上下半場接連得分，' +
      'Fidalgo 在補時第 90+4 分鐘補上第三球，墨西哥成為本屆首支三戰全勝球隊，' +
      '以 A 組第一強勢晉級 32 強。捷克就此出局。',
    descriptionEn:
      'Perfect Mexico! El Tri complete a flawless group stage at the iconic Azteca — the first team ' +
      'to win all three group games this tournament. Chávez (55\') and Quiñones (61\') scored in ' +
      'quick succession, then Fidalgo added a third deep in stoppage time (90+4\'). Mexico top ' +
      'Group A; Czechia are eliminated.' },

  { date:'Jun 24', round:'Matchday 3',
    home:'South Africa',  homeFlag:'🇿🇦', homeScore:1,
    away:'South Korea',   awayFlag:'🇰🇷', awayScore:0,
    venue:'Estadio BBVA',
    goals:[
      { team:'home', scorer:'T. Maseko', minute:"63'" },
    ],
    description:
      '南非創造歷史！Maseko 第 63 分鐘精準頭球破門，' +
      '南非憑此一勝首次以小組第二名晉級世界盃淘汰賽，創下非洲球隊本屆最大驚喜。' +
      '南韓出局，A 組最終排名：墨西哥第一、南非第二，兩隊均晉級 32 強。',
    descriptionEn:
      'South Africa make history! Maseko headed in the only goal in the 63rd minute, sending Bafana ' +
      'Bafana into the knockout rounds for the first time ever. South Korea are eliminated. ' +
      'Mexico top Group A; South Africa advance as runners-up — the biggest African story of the tournament.' },

  // ── Jun 25 — Matchday 3 ─────────────────────────────────────────────────

  { date:'Jun 25', round:'Matchday 3',
    home:'Ecuador', homeFlag:'🇪🇨', homeScore:2,
    away:'Germany', awayFlag:'🇩🇪', awayScore:1,
    venue:'MetLife Stadium',
    goals:[
      { team:'away', scorer:'L. Sané',    minute:"2'"  },
      { team:'home', scorer:'N. Angulo',  minute:"9'"  },
      { team:'home', scorer:'G. Plata',   minute:"77'" },
    ],
    description:
      '厄瓜多創造驚喜但兩隊同晉！Sané 2 分鐘閃電破門，Angulo 9 分鐘即時扳平，' +
      'Plata 77 分鐘超遠射絕殺。厄瓜多雖贏球，德國憑前兩輪積分優勢仍以 E 組第二晉級 32 強，' +
      '厄瓜多則以最佳第三名身份出線，32 強將面對墨西哥。',
    descriptionEn:
      'Ecuador stun Germany but both advance! Sané gave Germany an early lead (2\'), but Angulo levelled ' +
      '(9\') and Plata\'s brilliant long-range strike sealed it (77\'). Despite the defeat, Germany ' +
      'advance as Group E runners-up on superior accumulated points. Ecuador qualify as one of the best ' +
      'third-placed teams and will face Mexico in the Round of 32.' },

  { date:'Jun 25', round:'Matchday 3',
    home:'Curaçao',     homeFlag:'🇨🇼', homeScore:0,
    away:'Ivory Coast', awayFlag:'🇨🇮', awayScore:2,
    venue:'Lincoln Financial Field',
    goals:[
      { team:'away', scorer:'N. Pépé', minute:"7'"  },
      { team:'away', scorer:'N. Pépé', minute:"64'" },
    ],
    description:
      '象牙海岸梅開二度晉級！Pépé 7 分鐘先開紀錄，64 分鐘再入一球鎖定勝局，' +
      '象牙海岸首次在世界盃打入淘汰賽，以 E 組第一出線。' +
      '庫拉索雖就此出局，兩場歸零仍令全球球迷留下深刻印象。',
    descriptionEn:
      'Ivory Coast make history! Pépé was the hero with a brace — 7th and 64th minutes — sending ' +
      'the Elephants to the World Cup knockout rounds for the first time ever. They top Group E. ' +
      'Curaçao are eliminated but leave with heads held high after their incredible goalkeeping display vs Ecuador.' },

  { date:'Jun 25', round:'Matchday 3',
    home:'Japan',  homeFlag:'🇯🇵', homeScore:1,
    away:'Sweden', awayFlag:'🇸🇪', awayScore:1,
    venue:'AT&T Stadium',
    goals:[
      { team:'home', scorer:'D. Maeda',  minute:"56'" },
      { team:'away', scorer:'A. Elanga', minute:"62'" },
    ],
    description:
      '日本與瑞典各取所需！Maeda 56 分鐘精彩配合後入球，' +
      '但 Elanga 62 分鐘即時以左腳斜射扳平。' +
      '兩隊均以 1:1 完成比賽，日本以 F 組第二晉級，' +
      '瑞典以最佳第三名出線；日本將面對巴西，瑞典對陣法國。',
    descriptionEn:
      'Japan and Sweden share the points and the group! Maeda\'s composed finish (56\') gave Japan ' +
      'the lead, but Elanga\'s left-footed cross-shot levelled instantly (62\'). Both teams advance — ' +
      'Netherlands top Group F; Japan are runners-up and will face Brazil in the last 32.' },

  { date:'Jun 25', round:'Matchday 3',
    home:'Tunisia',     homeFlag:'🇹🇳', homeScore:1,
    away:'Netherlands', awayFlag:'🇳🇱', awayScore:3,
    venue:'Arrowhead Stadium',
    goals:[
      { team:'away', scorer:'Skhiri OG',   minute:"3'"  },
      { team:'away', scorer:'B. Brobbey',  minute:"7'"  },
      { team:'home', scorer:'H. Mastouri', minute:"54'" },
      { team:'away', scorer:'J. Van Hecke',minute:"62'" },
    ],
    description:
      '荷蘭橫掃突尼西亞！Skhiri 烏龍球（3\'）及 Brobbey（7\'）閃電兩球奠定基礎，' +
      'Mastouri（54\'）一度追回一球，但 Van Hecke（62\'）頭球確立最終 3:1 比分。' +
      '荷蘭以 F 組第一出線，突尼西亞被淘汰。',
    descriptionEn:
      'Netherlands dominate to top Group F! An early own goal from Skhiri (3\') and Brobbey\'s ' +
      'third of the tournament (7\') gave the Dutch a flying start. Mastouri pulled one back for ' +
      'Tunisia (54\') but Van Hecke\'s header restored the two-goal cushion (62\'). ' +
      'Netherlands face Morocco in the Round of 32; Tunisia are eliminated.' },

  { date:'Jun 25', round:'Matchday 3',
    home:'Türkiye', homeFlag:'🇹🇷', homeScore:3,
    away:'USA',     awayFlag:'🇺🇸', awayScore:2,
    venue:'SoFi Stadium',
    goals:[
      { team:'away', scorer:'A. Trusty',    minute:"3'"    },
      { team:'home', scorer:'A. Güler',     minute:"10'"   },
      { team:'home', scorer:'B. Yılmaz',    minute:"31'"   },
      { team:'away', scorer:'S. Berhalter', minute:"49'"   },
      { team:'home', scorer:'K. Ayhan',     minute:"90+8'" },
    ],
    description:
      '補時絕殺！美國 Trusty 3 分鐘先開紀錄，Güler（10\'）和 Yılmaz（31\'）讓土耳其反超，' +
      'Berhalter（49\'）補時扳平帶全場瘋狂。Kaan Ayhan 在第 90+8 分鐘臨門一腳射入空門，' +
      '以絕殺完成土耳其本屆唯一勝仗。美國仍以 D 組第一出線。',
    descriptionEn:
      'Stoppage-time stunner! Trusty gave the USA an early lead (3\'), but Güler (10\') and Yılmaz ' +
      '(31\') turned it around. Berhalter\'s rebound finish equalised in the 49th. Then, in the 8th ' +
      'minute of stoppage time, substitute Kaan Ayhan redirected a pass into an empty net to break ' +
      'American hearts. Despite the loss, USA advance as Group D winners. Türkiye are eliminated.' },

  { date:'Jun 25', round:'Matchday 3',
    home:'Paraguay',  homeFlag:'🇵🇾', homeScore:0,
    away:'Australia', awayFlag:'🇦🇺', awayScore:0,
    venue:"Levi's Stadium",
    description:
      '0:0 互利平局！兩隊在出線形勢明朗的情況下刻意求穩，' +
      '全場波瀾不驚。澳洲以 D 組第二晉級 32 強，' +
      '巴拉圭以最佳第三名身份出線，32 強對陣德國。',
    descriptionEn:
      'A gentlemanly 0-0! With both teams\' fates already decided, neither side pushed hard in a flat ' +
      'encounter. Australia advance as Group D runners-up. Paraguay qualify as a best third-placed team ' +
      'and will face Germany in the Round of 32.' },
  // ── Jun 26 — Matchday 3 ─────────────────────────────────────────────────

  { date:'Jun 26', round:'Matchday 3',
    home:'Norway', homeFlag:'🇳🇴', homeScore:1,
    away:'France', awayFlag:'🇫🇷', awayScore:4,
    venue:'Gillette Stadium',
    goals:[
      { team:'away', scorer:'O. Dembélé',  minute:"7'"    },
      { team:'away', scorer:'O. Dembélé',  minute:"20'"   },
      { team:'home', scorer:'T. Aasgaard', minute:"21'"   },
      { team:'away', scorer:'O. Dembélé',  minute:"32'"   },
      { team:'away', scorer:'D. Doué',     minute:"90+4'" },
    ],
    description:
      'Dembélé 帽子戲法！法國在挪威主場以 4:1 大勝，以全勝姿態登頂 I 組。' +
      'Dembélé 7、20、32 分鐘連入三球完成帽子戲法——本屆首個！' +
      'Aasgaard 21 分鐘扳回一城，Doué 於補時（90+4\'）再下一城。' +
      '法國三戰全勝 9 分昂首出線，挪威以最佳第三名身份晉級 32 強。',
    descriptionEn:
      'Dembélé hat-trick — the first of 2026! France demolished Norway 4-1 to top Group I with a ' +
      'perfect record. Dembélé struck three times in the first half (7\', 20\', 32\'). Aasgaard ' +
      'pulled one back (21\') but Doué sealed it in stoppage time (90+4\'). ' +
      'France win all three group games; Norway advance as best third-placed qualifiers.' },

  { date:'Jun 26', round:'Matchday 3',
    home:'Senegal', homeFlag:'🇸🇳', homeScore:5,
    away:'Iraq',    awayFlag:'🇮🇶', awayScore:0,
    venue:'BMO Field',
    goals:[
      { team:'home', scorer:'H. Diarra', minute:"4'"  },
      { team:'home', scorer:'I. Sarr',   minute:"56'" },
      { team:'home', scorer:'P. Gueye',  minute:"59'" },
      { team:'home', scorer:'P. Gueye',  minute:"71'" },
      { team:'home', scorer:'I. Ndiaye', minute:"82'" },
    ],
    cards:[
      { team:'away', player:'K. Ansaif', minute:"36'", type:'red' },
    ],
    description:
      '塞內加爾大屠殺！Habib Diarra 4 分鐘閃電開場，伊拉克 Ansaif 36 分鐘領紅後節節敗退：' +
      'Sarr（56\'）、Gueye 梅開二度（59\'、71\'）、Ndiaye（82\'）令比數定格 5:0。' +
      '塞內加爾以 I 組第二、9 積分晉級，獅子軍團本屆首場大勝。',
    descriptionEn:
      'Senegal run riot! Habib Diarra opened in the 4th minute, and after Iraq were reduced to 10 men ' +
      '(Ansaif red, 36\'), the Lions of Teranga ran free — Sarr (56\'), Gueye brace (59\', 71\'), ' +
      'and Ndiaye (82\') completed a dominant 5-0. Senegal advance as Group I runners-up.' },

  { date:'Jun 26', round:'Matchday 3',
    home:'Cape Verde',   homeFlag:'🇨🇻', homeScore:0,
    away:'Saudi Arabia', awayFlag:'🇸🇦', awayScore:0,
    venue:'NRG Stadium',
    description:
      '藍鯊歷史性晉級！兩隊均知局面，賽事波瀾不驚，以 0:0 告終。' +
      '佛得角以 H 組第二歷史性首次打入世界盃淘汰賽，' +
      '32 強將面對阿根廷。沙特阿拉伯出局。',
    descriptionEn:
      'Cape Verde make history! A calm 0-0 was all the Blue Sharks needed — they advance as Group H ' +
      'runners-up, qualifying for the World Cup knockout stage for the first time ever. ' +
      'They will face Argentina in the Round of 32. Saudi Arabia are eliminated.' },

  { date:'Jun 26', round:'Matchday 3',
    home:'Uruguay', homeFlag:'🇺🇾', homeScore:0,
    away:'Spain',   awayFlag:'🇪🇸', awayScore:1,
    venue:'Estadio Akron',
    goals:[
      { team:'away', scorer:'Á. Baena', minute:"42'" },
    ],
    description:
      '西班牙一球定乾坤！Baena 42 分鐘把握門將 Muslera 失手的機會，' +
      '冷靜地將球送入遠角，西班牙以 H 組第一晉級。' +
      '烏拉圭出局，Bielsa 任內憾別賽事。',
    descriptionEn:
      'Spain squeeze through on a Muslera howler! Álex Baena pounced on a fumble by Uruguay keeper ' +
      'Muslera in the 42nd minute, slotting into the far corner. Spain top Group H; ' +
      'Uruguay are eliminated, ending Bielsa\'s tenure with heartbreak.' },

  { date:'Jun 26', round:'Matchday 3',
    home:'Egypt', homeFlag:'🇪🇬', homeScore:1,
    away:'Iran',  awayFlag:'🇮🇷', awayScore:1,
    venue:'Lumen Field',
    goals:[
      { team:'home', scorer:'Mahmoud Saber', minute:"5'"  },
      { team:'away', scorer:'R. Rezaeian',   minute:"14'" },
    ],
    description:
      'VAR 裁定關鍵平局！埃及 Mahmoud Saber 5 分鐘率先破門，' +
      'Rezaeian 14 分鐘即時扳平。伊朗於補時轟入「致命一球」但 VAR 判定越位無效，' +
      '最終 1:1。埃及以 G 組第二晉級，伊朗出局。',
    descriptionEn:
      'VAR denies Iran a dramatic winner! Egypt led through Mahmoud Saber (5\'), but Rezaeian ' +
      'equalised for Iran (14\'). Iran had a late goal ruled out by VAR for offside, ' +
      'leaving it 1-1. Egypt advance as Group G runners-up; Iran are eliminated.' },

  { date:'Jun 26', round:'Matchday 3',
    home:'New Zealand', homeFlag:'🇳🇿', homeScore:1,
    away:'Belgium',     awayFlag:'🇧🇪', awayScore:5,
    venue:'BC Place',
    goals:[
      { team:'away', scorer:'L. Trossard',     minute:"28'"   },
      { team:'away', scorer:'L. Trossard',     minute:"50'"   },
      { team:'away', scorer:'K. De Bruyne',    minute:"66'"   },
      { team:'home', scorer:'E. Just',         minute:"84'"   },
      { team:'away', scorer:'R. Lukaku',       minute:"86'"   },
      { team:'away', scorer:'A. Saelemaekers', minute:"90+4'" },
    ],
    description:
      '比利時以 G 組第一完美收官！Trossard 梅開二度（28\'、50\'），' +
      'De Bruyne 66 分鐘遠射，Just 84 分鐘為紐西蘭扳一城，' +
      '替補 Lukaku 86 分鐘頭球及 Saelemaekers 90+4 分鐘補刀令比數定格 5:1。' +
      '比利時三戰全勝，G 組第一昂首晉級；紐西蘭出局。',
    descriptionEn:
      'Belgium top Group G in style! Trossard scored twice (28\', 50\'), De Bruyne added a ' +
      'brilliant third (66\'). Just grabbed a consolation for New Zealand (84\'), then Lukaku headed ' +
      'home from the bench (86\') and Saelemaekers finished in stoppage time (90+4\'). ' +
      'Belgium win all three group games; New Zealand are eliminated.' },

  // ── Jun 27 — Matchday 3 Groups J / K / L ───────────────────────────────

  { date:'Jun 27', round:'Matchday 3',
    home:'Jordan',    homeFlag:'🇯🇴', homeScore:1,
    away:'Argentina', awayFlag:'🇦🇷', awayScore:3,
    venue:'AT&T Stadium',
    goals:[
      { team:'away', scorer:'G. Lo Celso',  minute:"19'"   },
      { team:'away', scorer:'L. Martínez',  minute:"31'"   },
      { team:'home', scorer:'M. Tamari',    minute:"55'"   },
      { team:'away', scorer:'L. Messi',     minute:"80'"   },
    ],
    description:
      '梅西再破紀錄！Lo Celso 19 分鐘自由球率先破門，Lautaro Martínez 31 分鐘點球追加。' +
      'Jordan 的 Tamari 55 分鐘扳一城。替補出場的梅西 80 分鐘再以自由球破網，' +
      '成為世界盃史上首位連續七場入球的球員。阿根廷三戰全勝，J 組第一強勢晉級。',
    descriptionEn:
      'Messi makes history — again! Lo Celso opened with a brilliant free-kick (19\'), Lautaro ' +
      'converted a penalty (31\'), and Tamari pulled one back for Jordan (55\'). Messi — off ' +
      'the bench — curled home a stunning free-kick (80\') to score in seven consecutive ' +
      'World Cup matches: a record never achieved before. Argentina win all three. ' },

  { date:'Jun 27', round:'Matchday 3',
    home:'Algeria', homeFlag:'🇩🇿', homeScore:3,
    away:'Austria', awayFlag:'🇦🇹', awayScore:3,
    venue:'Arrowhead Stadium',
    goals:[
      { team:'away', scorer:'M. Arnautovic', minute:"28'"   },
      { team:'home', scorer:'R. Belghali',   minute:"41'"   },
      { team:'away', scorer:'M. Sabitzer',   minute:"55'"   },
      { team:'home', scorer:'R. Mahrez',     minute:"60'"   },
      { team:'home', scorer:'R. Mahrez',     minute:"90+3'" },
      { team:'away', scorer:'S. Kalajdzic',  minute:"90+5'" },
    ],
    description:
      '六球瘋狂完結！Arnautovic 28 分鐘先開紀錄，Belghali 41 分鐘扳平，' +
      'Sabitzer 55 分鐘令奧地利再度領先，Mahrez 60 分鐘均分。' +
      'Mahrez 90+3 分鐘打入 3:2，但 Kalajdzic 第 90+5 分鐘頭球扳平！' +
      '兩隊均以 J 組前兩名晉級，伊朗出局。',
    descriptionEn:
      'Six-goal Group J finale! Arnautovic (28\') led Austria, Belghali (41\') levelled. ' +
      'Sabitzer (55\') restored the lead; Mahrez (60\') equalised. Mahrez struck for 3-2 (90+3\') ' +
      '— but Kalajdzic headed a 90+5\' equaliser to snatch runners-up for Austria. ' +
      'Both advance; Iran eliminated.' },

  { date:'Jun 27', round:'Matchday 3',
    home:'Colombia', homeFlag:'🇨🇴', homeScore:0,
    away:'Portugal', awayFlag:'🇵🇹', awayScore:0,
    venue:'Hard Rock Stadium',
    description:
      '默契平局！哥倫比亞與葡萄牙均已確定晉級，以 0:0 收場。' +
      '哥倫比亞以 K 組第一出線，葡萄牙第二，32 強分別對陣 Ghana 及克羅埃西亞。',
    descriptionEn:
      'A composed 0-0 with both sides already through. Colombia top Group K; ' +
      'Portugal advance as runners-up. They face Ghana and Croatia in the R32.' },

  { date:'Jun 27', round:'Matchday 3',
    home:'DR Congo',   homeFlag:'🇨🇩', homeScore:3,
    away:'Uzbekistan', awayFlag:'🇺🇿', awayScore:1,
    venue:'Mercedes-Benz Stadium',
    goals:[
      { team:'away', scorer:'E. Shomurodov', minute:"10'"   },
      { team:'home', scorer:'Y. Wissa',      minute:"68'"   },
      { team:'home', scorer:'F. Mayele',     minute:"78'"   },
      { team:'home', scorer:'Y. Wissa',      minute:"90+1'" },
    ],
    description:
      '剛果強勢晉級！Shomurodov 10 分鐘先開紀錄，Wissa 68 分鐘點球扳平，' +
      'Mayele 78 分鐘反超，Wissa 補時再下一城完成 3:1 大勝。' +
      '剛果以最佳第三名晉級 32 強，對陣英格蘭。烏茲別克出局。',
    descriptionEn:
      'DR Congo storm through! Shomurodov (10\') gave Uzbekistan the lead, but Wissa levelled ' +
      'from the spot (68\'), Mayele made it 2-1 (78\'), and Wissa sealed it in stoppage time ' +
      '(90+1\'). DR Congo qualify as best third-placed team and face England in R32. ' +
      'Uzbekistan eliminated.' },

  { date:'Jun 27', round:'Matchday 3',
    home:'Panama',  homeFlag:'🇵🇦', homeScore:0,
    away:'England', awayFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayScore:2,
    venue:'MetLife Stadium',
    goals:[
      { team:'away', scorer:'J. Bellingham', minute:"62'" },
      { team:'away', scorer:'H. Kane',       minute:"67'" },
    ],
    description:
      '英格蘭輕鬆晉級！Bellingham 62 分鐘率先破門，Kane 67 分鐘完成個人世界盃第 11 球，' +
      '打破 Lineker 紀錄成為英格蘭世界盃史上最多進球球員。英格蘭以 L 組第一晉級，巴拿馬出局。',
    descriptionEn:
      'England cruise through! Bellingham opened (62\'), and Kane nodded in (67\') for his ' +
      '11th World Cup goal — surpassing Gary Lineker as England\'s all-time World Cup top scorer. ' +
      'England top Group L; Panama eliminated.' },

  { date:'Jun 27', round:'Matchday 3',
    home:'Croatia', homeFlag:'🇭🇷', homeScore:2,
    away:'Ghana',   awayFlag:'🇬🇭', awayScore:1,
    venue:'Lincoln Financial Field',
    goals:[
      { team:'home', scorer:'P. Sucic',     minute:"31'" },
      { team:'away', scorer:'D. Luckassen', minute:"73'" },
      { team:'home', scorer:'N. Vlasic',    minute:"83'" },
    ],
    description:
      '克羅埃西亞後來居上！Sucic 31 分鐘先開紀錄，Ghana 的 Luckassen 73 分鐘扳平，' +
      '但 Vlasic 83 分鐘頂入 Modrić 角球絕殺。克羅埃西亞以 L 組第二晉級，' +
      'Ghana 以最佳第三名出線，32 強對陣哥倫比亞。',
    descriptionEn:
      'Croatia edge a thriller! Sucic led (31\'), Luckassen equalised for Ghana (73\'), ' +
      'but Vlasic headed home Modrić\'s corner in the 83rd to snatch the winner. Croatia ' +
      'advance as Group L runners-up; Ghana qualify as best third-placed team and face Colombia.' },

  // ── Jun 28 — Round of 32 ────────────────────────────────────────────────

  { date:'Jun 28', round:'Round of 32',
    home:'South Africa', homeFlag:'🇿🇦', homeScore:0,
    away:'Canada',       awayFlag:'🇨🇦', awayScore:1,
    venue:'SoFi Stadium',
    goals:[
      { team:'away', scorer:'S. Eustáquio', minute:"90+2'" },
    ],
    description:
      '加拿大補時絕殺，首度闖入世界盃 16 強！全場苦戰難分，' +
      'Alphonso Davies 傷癒復出士氣大振。第 90+2 分鐘，防守球員清解角球，' +
      '皮球正好落在 Stephen Eustáquio 腳下，他以右腳凌空抽射轟破網窩，' +
      '令 SoFi Stadium 近 8 萬球迷瘋狂沸騰。南非雖奮力抵抗，仍黯然出局；' +
      '加拿大以地主身份首度躋身 16 強，寫下歷史最佳戰績。',
    descriptionEn:
      'Canada make history at SoFi Stadium — their first-ever World Cup Round of 16! ' +
      'It was a tense, tight affair until Stephen Eustáquio produced a moment of magic in the 90+2\' minute: ' +
      'a defender headed a corner clear straight to Eustáquio, who unleashed a right-footed volley into the net ' +
      'to send the partisan crowd into delirium. Captain Alphonso Davies made his tournament debut after missing ' +
      'the group stage through injury and gave Canada a massive lift. South Africa fought bravely ' +
      'but are eliminated; Canada advance to face Morocco or Netherlands on July 4.' },

  // ── Jun 29 — Round of 32 ────────────────────────────────────────────────

  { date:'Jun 29', round:'Round of 32',
    home:'Germany', homeFlag:'🇩🇪', homeScore:1,
    away:'Paraguay', awayFlag:'🇵🇾', awayScore:1,
    pens:'3-4',
    venue:'Gillette Stadium',
    goals:[
      { team:'away', scorer:'J. Enciso',  minute:"42'" },
      { team:'home', scorer:'K. Havertz', minute:"54'" },
    ],
    description:
      '本屆最大冷門！巴拉圭 Enciso 42 分鐘頭球率先破門，德國 Havertz 54 分鐘抬腳擺平。' +
      '延長賽中 Tah 角球頭球遭 VAR 吹掉，雙方以 1:1 進入互射十二碼。' +
      '德國射失三球（Havertz、Woltemade、Tah），巴拉圭 Canale 主射制勝球，以 4:3 送走四屆冠軍德國！',
    descriptionEn:
      'The biggest upset of the tournament! Enciso headed Paraguay ahead (42\'), Havertz levelled ' +
      'for Germany (54\'). A Tah header was controversially ruled out by VAR in extra time, and the match ' +
      'went to penalties. Germany missed three kicks (Havertz, Woltemade, Tah); Canale converted the ' +
      'decisive spot-kick as Paraguay won 4-3 on penalties to eliminate four-time champions Germany.' },

  { date:'Jun 29', round:'Round of 32',
    home:'Netherlands', homeFlag:'🇳🇱', homeScore:1,
    away:'Morocco',     awayFlag:'🇲🇦', awayScore:1,
    pens:'2-3',
    venue:'Estadio BBVA',
    goals:[
      { team:'home', scorer:'C. Gakpo',    minute:"72'" },
      { team:'away', scorer:'I. Diop',     minute:"90+1'" },
    ],
    description:
      '摩洛哥補時扳平再互射淘汰荷蘭！Gakpo 72 分鐘頭球領先，Issa Diop 90+1 分鐘替補上場後頭球均分。' +
      '十二碼大戰荷蘭射失兩球（Kluivert 打柱、Timber 踢歪），門將 Bounou 撲出一球；' +
      'Saibari 主射制勝，摩洛哥 3:2 勝出，晉級 16 強。',
    descriptionEn:
      'Diop breaks Dutch hearts in injury time! Gakpo headed Netherlands ahead (72\'), but Diop ' +
      'headed in from a Talbi cross in the 90+1\' to force penalties. Kluivert hit the post and ' +
      'Timber blazed over as the Netherlands missed twice; Bounou made a key save. Saibari ' +
      'converted the winning penalty as Morocco advance 3-2 on penalties.' },

  { date:'Jun 29', round:'Round of 32',
    home:'Brazil', homeFlag:'🇧🇷', homeScore:2,
    away:'Japan',  awayFlag:'🇯🇵', awayScore:1,
    venue:'NRG Stadium',
    goals:[
      { team:'away', scorer:'K. Sano',      minute:"29'" },
      { team:'home', scorer:'Casemiro',     minute:"56'" },
      { team:'home', scorer:'G. Martinelli',minute:"90+5'" },
    ],
    description:
      '巴西補時驚魂晉級！日本 Sano 29 分鐘冷靜推射率先破門。' +
      '下半場 Casemiro 56 分鐘後點頭球扳平，雙方纏鬥至傷停時間。' +
      '替補 Martinelli 在第 90+5 分鐘接 Guimarães 直塞，以左腳弧線球絕殺，巴西 2:1 驚險過關。',
    descriptionEn:
      'Brazil escape a scare to reach the last 16! Sano capitalised on a Casemiro error to fire ' +
      'Japan ahead (29\'). Casemiro atoned with a powerful header at the back post (56\'). Deep ' +
      'in stoppage time, substitute Martinelli curled a superb finish off a Guimarães through-ball ' +
      '(90+5\') to seal a nervy 2-1 win for Brazil.' },

  // ── Jun 30 — Round of 32 ────────────────────────────────────────────────

  { date:'Jun 30', round:'Round of 32',
    home:'Ivory Coast', homeFlag:'🇨🇮', homeScore:1,
    away:'Norway',      awayFlag:'🇳🇴', awayScore:2,
    venue:'AT&T Stadium',
    goals:[
      { team:'away', scorer:'A. Nusa',     minute:"39'" },
      { team:'home', scorer:'Amad Diallo', minute:"74'" },
      { team:'away', scorer:'E. Haaland',  minute:"86'" },
    ],
    description:
      '哈蘭德絕殺！Nusa 39 分鐘弧線球率先替挪威破門，象牙海岸 Amad Diallo 74 分鐘扳平。' +
      '最終哈蘭德在 86 分鐘接 Patrick Berg 傳送，一錘定音完成 2:1 逆轉。' +
      '哈蘭德本屆三場五球，挪威首度晉級世界盃 16 強，下一關對陣巴西。',
    descriptionEn:
      'Haaland the hero again! Nusa curled Norway ahead (39\'), Amad Diallo levelled for Ivory Coast ' +
      '(74\'), but Haaland powered home Berg\'s cross in the 86th minute to seal a 2-1 win. ' +
      'It is Norway\'s first-ever World Cup knockout stage victory; Haaland now has five goals ' +
      'in three games. Norway face Brazil in the Round of 16.' },

  { date:'Jun 30', round:'Round of 32',
    home:'France', homeFlag:'🇫🇷', homeScore:3,
    away:'Sweden', awayFlag:'🇸🇪', awayScore:0,
    venue:'MetLife Stadium',
    goals:[
      { team:'home', scorer:'K. Mbappé',  minute:"45'" },
      { team:'home', scorer:'B. Barcola', minute:"53'" },
      { team:'home', scorer:'K. Mbappé',  minute:"74'" },
    ],
    description:
      '姆巴佩雙響，法國輕鬆晉級！姆巴佩 45 分鐘短角球配合後精準破網，' +
      'Barcola 53 分鐘接 Olise 直塞追加。姆巴佩 74 分鐘再下一城完成雙響，' +
      '本屆累計 6 球並平梅西。法國 3:0 大勝瑞典，晉級 16 強後對陣巴拉圭。',
    descriptionEn:
      'Mbappé brace as France cruise through! Mbappé broke the deadlock with a short corner ' +
      'routine just before half-time (45\'), Barcola latched onto Olise\'s through-ball to make it ' +
      '2-0 (53\'), and Mbappé completed his brace in the 74th minute for his 18th career World Cup ' +
      'goal. France advance to face Paraguay in the Round of 16.' },

  { date:'Jun 30', round:'Round of 32',
    home:'Mexico',  homeFlag:'🇲🇽', homeScore:2,
    away:'Ecuador', awayFlag:'🇪🇨', awayScore:0,
    venue:'Estadio Azteca',
    goals:[
      { team:'home', scorer:'J. Quiñones', minute:"22'" },
      { team:'home', scorer:'R. Jiménez',  minute:"31'" },
    ],
    cards:[
      { team:'away', player:'P. Hincapié', minute:"90+3'", type:'red' },
    ],
    description:
      '墨西哥終結 40 年淘汰賽魔咒！Quiñones 22 分鐘切入禁區轟入球門上角，' +
      '九分鐘後 Jiménez 與 Quiñones 二過一後打穿門將，2:0 奠定勝局。' +
      '厄瓜多 Hincapié 補時以手遮口被罰紅牌出場。主場作戰的墨西哥晉級 16 強，等待英格蘭或剛果。',
    descriptionEn:
      'Mexico end a 40-year knockout curse at the Azteca! Quiñones powered a shot into the top ' +
      'corner (22\'), then combined with Jiménez in a slick give-and-go for the second (31\'). ' +
      'Ecuador\'s Hincapié was sent off in injury time. Mexico advance to the Round of 16 as hosts; ' +
      'Ecuador\'s first knockout stage in 20 years ends at the first hurdle.' },

  // ── Jul 1 — Round of 32 ─────────────────────────────────────────────────

  { date:'Jul 1', round:'Round of 32',
    home:'England',  homeFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', homeScore:2,
    away:'DR Congo', awayFlag:'🇨🇩', awayScore:1,
    venue:'Mercedes-Benz Stadium',
    goals:[
      { team:'away', scorer:'B. Cipenga', minute:"7'"  },
      { team:'home', scorer:'H. Kane',    minute:"75'" },
      { team:'home', scorer:'H. Kane',    minute:"86'" },
    ],
    description:
      'Kane 兩度救主，英格蘭驚險逆轉！剛果 Cipenga 7 分鐘閃電先破門，英格蘭長期落後。' +
      'Kane 75 分鐘頭球扳平，86 分鐘再以凌厲射門完成逆轉，' +
      '個人本屆第 13 球，強勢晉級 16 強將對陣主場墨西哥。',
    descriptionEn:
      'Kane rescues England with a stunning comeback double! Cipenga shocked England with a ' +
      'seventh-minute opener and DR Congo defended bravely. Kane equalised with a header (75\') ' +
      'then blasted in a brilliant winner (86\') for his 13th World Cup goal. England advance ' +
      'to face Mexico in the Round of 16.' },

  { date:'Jul 1', round:'Round of 32',
    home:'Belgium', homeFlag:'🇧🇪', homeScore:3,
    away:'Senegal', awayFlag:'🇸🇳', awayScore:2,
    pens:'AET',
    venue:'Lumen Field',
    goals:[
      { team:'away', scorer:'H. Diarra',    minute:"25'"    },
      { team:'away', scorer:'I. Sarr',      minute:"51'"    },
      { team:'home', scorer:'R. Lukaku',    minute:"86'"    },
      { team:'home', scorer:'Y. Tielemans', minute:"89'"    },
      { team:'home', scorer:'Y. Tielemans', minute:"120+5'" },
    ],
    description:
      '世界盃最戲劇性逆轉之一！塞內加爾 Diarra 25 分鐘、Sarr 51 分鐘接連破門，比利時岌岌可危。' +
      'Lukaku 86 分鐘扳一城，Tielemans 89 分鐘頭球扳平，強行拖入加時。' +
      '加時賽第 120+5 分鐘，Tielemans 主射點球，以 3:2 完成驚天大逆轉。' +
      '此球被認為是世界盃史上最晚的致勝球，比利時晉級 16 強對陣美國。',
    descriptionEn:
      'One of the greatest World Cup comebacks! Diarra (25\') and Sarr (51\') put Senegal in control. ' +
      'Belgium looked dead and buried until Lukaku pulled one back (86\') and Tielemans headed home ' +
      'the equaliser (89\') to force extra time. Then in the 120+5\' minute, Tielemans converted a ' +
      'penalty to complete a stunning 3-2 win — reportedly the latest winning goal in World Cup history.' },

  { date:'Jul 1', round:'Round of 32',
    home:'USA',                  homeFlag:'🇺🇸', homeScore:2,
    away:'Bosnia and Herzegovina', awayFlag:'🇧🇦', awayScore:0,
    venue:"Levi's Stadium",
    goals:[
      { team:'home', scorer:'F. Balogun',  minute:"45'" },
      { team:'home', scorer:'M. Tillman',  minute:"82'" },
    ],
    cards:[
      { team:'home', player:'F. Balogun', minute:"64'", type:'red' },
    ],
    description:
      '十人美國守住勝果，闖入 16 強！Balogun 45 分鐘首開紀錄，' +
      '卻在 64 分鐘因飛鏟犯規遭 VAR 介入紅牌出場。' +
      '帶著一人之差的美國繼續攻勢，Tillman 82 分鐘任意球絕妙破門鎖定勝局。' +
      '這是美國自 2002 年以來首場世界盃淘汰賽勝利，16 強將面對比利時（Balogun 停賽）。',
    descriptionEn:
      'USA win with 10 men — first knockout victory since 2002! Balogun opened the scoring (45\') ' +
      'but was controversially sent off in the 64th minute for a dangerous tackle. Playing a man down, ' +
      'the USA held firm and Tillman sealed it with a superb free-kick (82\'). The USMNT advance to ' +
      'face Belgium in the Round of 16, but will be without suspended Balogun.' },

  // ── Jul 2 — Round of 32 ─────────────────────────────────────────────────

  { date:'Jul 2', round:'Round of 32',
    home:'Portugal', homeFlag:'🇵🇹', homeScore:2,
    away:'Croatia',  awayFlag:'🇭🇷', awayScore:1,
    venue:'BMO Field',
    goals:[
      { team:'away', scorer:'I. Perišić',  minute:"53'"    },
      { team:'home', scorer:'C. Ronaldo',  minute:"68'"    },
      { team:'home', scorer:'G. Ramos',    minute:"90+4'"  },
    ],
    description:
      '拉莫斯補時頭球絕殺！克羅埃西亞 Perišić 53 分鐘率先破門，' +
      'C 朗拿度 68 分鐘主射點球扳平，打進個人首個世界盃淘汰賽進球。' +
      '加時前 Ramos 第 90+4 分鐘頂入頭球，葡萄牙驚險 2:1 晉級 16 強。',
    descriptionEn:
      'Ramos heads Portugal through in dramatic stoppage time! Perišić put Croatia ahead (53\'), ' +
      'Ronaldo levelled with a penalty — his first-ever World Cup knockout goal (68\'). ' +
      'Then Ramos glanced in a header in the 90+4\' to send Portugal to the Round of 16.' },

  { date:'Jul 2', round:'Round of 32',
    home:'Spain',   homeFlag:'🇪🇸', homeScore:3,
    away:'Austria', awayFlag:'🇦🇹', awayScore:0,
    venue:'SoFi Stadium',
    goals:[
      { team:'home', scorer:'M. Oyarzabal', minute:"36'" },
      { team:'home', scorer:'P. Porro',     minute:"66'" },
      { team:'home', scorer:'M. Oyarzabal', minute:"89'" },
    ],
    description:
      '奧亞薩巴爾雙響，西班牙大勝晉級！奧亞薩巴爾 36 分鐘近距離補射率先破門，' +
      'Porro 66 分鐘接 Baena 傳中頭球追加，奧亞薩巴爾 89 分鐘再下一城完成雙響，' +
      '西班牙自 2010 年奪冠以來首場淘汰賽大勝，以 3:0 強勢晉級 16 強。',
    descriptionEn:
      'Oyarzabal brace as Spain ease through! Oyarzabal prodded in Cucurella\'s cross (36\'), ' +
      'Porro headed home Baena\'s delivery for his first international goal (66\'), then Oyarzabal ' +
      'slotted in a second (89\'). Spain\'s first knockout stage rout since their 2010 title run.' },

  { date:'Jul 2', round:'Round of 32',
    home:'Switzerland', homeFlag:'🇨🇭', homeScore:2,
    away:'Algeria',     awayFlag:'🇩🇿', awayScore:0,
    venue:'BC Place',
    goals:[
      { team:'home', scorer:'B. Embolo', minute:"10'" },
      { team:'home', scorer:'D. Ndoye',  minute:"46'" },
    ],
    description:
      '瑞士輕鬆晉級！Embolo 10 分鐘接 Manzambi 精彩個人突破後的傳送率先破門，' +
      '下半場開賽 48 秒 Ndoye 即接外圍傳球追加，2:0 穩穩過關。' +
      '瑞士保持 10 場不敗，16 強將對陣哥倫比亞或 Ghana。',
    descriptionEn:
      'Switzerland cruise into the last 16! Embolo finished off Manzambi\'s brilliant run (10\'), ' +
      'then Ndoye struck just 48 seconds into the second half (46\') to make it 2-0. ' +
      'Switzerland extend their unbeaten run to 10 matches and face Colombia or Ghana in R16.' },

  // ── Jul 3 — Round of 32 ─────────────────────────────────────────────────

  { date:'Jul 3', round:'Round of 32',
    home:'Australia', homeFlag:'🇦🇺', homeScore:1,
    away:'Egypt',     awayFlag:'🇪🇬', awayScore:1,
    pens:'2-4',
    venue:'AT&T Stadium',
    goals:[
      { team:'away', scorer:'Emam Ashour',   minute:"13'" },
      { team:'home', scorer:'M. Hany (OG)',  minute:"55'" },
    ],
    description:
      '埃及點球淘汰澳洲，首度躋身世界盃 16 強！Emam Ashour 13 分鐘頭球破門領先，' +
      '澳洲 Mohamed Hany 55 分鐘烏龍球扳平。互射十二碼，澳洲 Souttar 射高、Herrington 打中橫樑，' +
      'Salah 最後一球以挑射方式打入，埃及 4:2 勝出。',
    descriptionEn:
      'Egypt reach the last 16 for the first time! Emam Ashour headed Egypt ahead (13\'), but ' +
      'Mohamed Hany diverted O\'Neill\'s free-kick into his own net to level (55\'). In the shootout, ' +
      'Australia missed twice (Souttar over bar, Herrington hit crossbar) while Salah chipped a ' +
      'cheeky panenka — Egypt win 4-2 on penalties.' },

  { date:'Jul 3', round:'Round of 32',
    home:'Argentina',  homeFlag:'🇦🇷', homeScore:3,
    away:'Cape Verde', awayFlag:'🇨🇻', awayScore:2,
    pens:'AET',
    venue:'Hard Rock Stadium',
    goals:[
      { team:'home', scorer:'L. Messi',        minute:"29'"  },
      { team:'away', scorer:'D. Duarte',        minute:"59'"  },
      { team:'home', scorer:'L. Martínez',      minute:"97'"  },
      { team:'away', scorer:'S. Lopes Cabral',  minute:"103'" },
      { team:'away', scorer:'D. Borges (OG)',   minute:"111'" },
    ],
    description:
      '梅西創紀錄，阿根廷驚魂晉級！梅西 29 分鐘以外腳挑射破門，刷新世界盃個人最多進球紀錄至 20 球（本屆 7 球）。' +
      '佛得角 Duarte 59 分鐘扳平，加時 Lisandro Martínez 97 分鐘再度領先，' +
      '卻被 Lopes Cabral 103 分鐘驚天遠射扳回。最終 Diney Borges 111 分鐘烏龍球送走佛得角，阿根廷驚險晉級。',
    descriptionEn:
      'Messi breaks the all-time World Cup scoring record — but Argentina are taken to the wire! ' +
      'Messi opened with an outside-of-the-boot flick (29\') for his record-extending 20th WC goal ' +
      '(7 this tournament). Cape Verde equalised through Duarte (59\'), Lisandro Martínez restored ' +
      'the lead in extra time (97\'), but Lopes Cabral stunned with a long-range strike (103\'). ' +
      'An own goal by Borges (111\') finally sealed it for Argentina.' },

  { date:'Jul 3', round:'Round of 32',
    home:'Colombia', homeFlag:'🇨🇴', homeScore:1,
    away:'Ghana',    awayFlag:'🇬🇭', awayScore:0,
    venue:'Arrowhead Stadium',
    goals:[
      { team:'home', scorer:'J. Arias', minute:"14'" },
    ],
    description:
      '阿里亞斯 14 分鐘接 Suárez 橫傳輕鬆推入，哥倫比亞 1:0 穩紮穩打勝出。' +
      'Ghana 八次射門無一命中球框，哥倫比亞鎖定 16 強後對陣瑞士。',
    descriptionEn:
      'Arias flicked in Suárez\'s cut-back in the 14th minute and Colombia never looked back. ' +
      'Ghana failed to register a single shot on target in eight attempts. ' +
      'Colombia advance to face Switzerland in the Round of 16.' },

  // ── Jul 4 — Round of 16 ─────────────────────────────────────────────────

  { date:'Jul 4', round:'Round of 16',
    home:'Canada',   homeFlag:'🇨🇦', homeScore:0,
    away:'Morocco',  awayFlag:'🇲🇦', awayScore:3,
    venue:'NRG Stadium',
    goals:[
      { team:'away', scorer:'A. Ounahi',  minute:"50'"   },
      { team:'away', scorer:'A. Ounahi',  minute:"82'"   },
      { team:'away', scorer:'S. Rahimi',  minute:"90+8'" },
    ],
    description:
      '摩洛哥完封地主晉級 8 強！Ounahi 上下半場各入一球（50、82 分鐘），' +
      'Rahimi 補時第 90+8 分鐘再下一城，3:0 完勝。加拿大成為 16 強首支出局球隊。',
    descriptionEn:
      'Morocco cruise past the co-hosts! Ounahi struck either side of the break (50\', 82\'), and ' +
      'Rahimi added a third deep into stoppage time (90+8\'). Canada become the first team eliminated ' +
      'from the Round of 16.' },

  { date:'Jul 4', round:'Round of 16',
    home:'Paraguay', homeFlag:'🇵🇾', homeScore:0,
    away:'France',   awayFlag:'🇫🇷', awayScore:1,
    venue:'Lincoln Financial Field',
    goals:[
      { team:'away', scorer:'K. Mbappé', minute:"70'" },
    ],
    description:
      '姆巴佩點球絕殺，法國連續第四屆晉級 8 強！Doue 遭 Gómez 犯規，姆巴佩 70 分鐘主射命中，' +
      '個人本屆第 7 球、生涯世界盃第 19 球。巴拉圭爆冷之旅至此結束。',
    descriptionEn:
      'Mbappé\'s penalty sends France through for a fourth straight quarterfinal! Awarded after a late ' +
      'challenge on Doué, Mbappé converted in the 70th minute — his 7th goal of the tournament and ' +
      '19th of his World Cup career. Paraguay\'s giant-killing run ends here.' },

  // ── Jul 5 — Round of 16 ─────────────────────────────────────────────────

  { date:'Jul 5', round:'Round of 16',
    home:'Brazil', homeFlag:'🇧🇷', homeScore:1,
    away:'Norway', awayFlag:'🇳🇴', awayScore:2,
    venue:'MetLife Stadium',
    goals:[
      { team:'away', scorer:'E. Haaland', minute:"79'"   },
      { team:'away', scorer:'E. Haaland', minute:"90'"   },
      { team:'home', scorer:'Neymar Jr. (pen)', minute:"90+3'" },
    ],
    description:
      '哈蘭德梅開二度，挪威爆冷淘汰巴西！上半場 Guimarães 主射點球被門將 Nyland 撲出，' +
      '哈蘭德 79 分鐘頭球、90 分鐘禁區外低射連下兩城，巴西補時由 Neymar 主射點球扳回一城，仍以 1:2 出局。' +
      '哈蘭德本屆累積 7 球，率挪威隊史首度晉級世界盃 8 強。巴西則寫下 1990 年以來最早出局紀錄。',
    descriptionEn:
      'Haaland brace stuns five-time champions Brazil! Nyland saved a first-half Guimarães penalty, ' +
      'then Haaland headed home (79\') and added a low finish from outside the box (90\') to put Norway ' +
      '2-0 up. Neymar converted a stoppage-time penalty (90+3\') but it was too late. Haaland now has ' +
      '7 goals this tournament as Norway reach their first-ever World Cup quarterfinal; Brazil suffer ' +
      'their earliest exit since 1990.' },

  { date:'Jul 5', round:'Round of 16',
    home:'Mexico',  homeFlag:'🇲🇽', homeScore:2,
    away:'England', awayFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayScore:3,
    venue:'Estadio Azteca',
    goals:[
      { team:'away', scorer:'J. Bellingham', minute:"36'" },
      { team:'away', scorer:'J. Bellingham', minute:"38'" },
      { team:'home', scorer:'J. Quiñones',   minute:"42'" },
      { team:'away', scorer:'H. Kane (pen)', minute:"60'" },
      { team:'home', scorer:'R. Jiménez (pen)', minute:"69'" },
    ],
    cards:[
      { team:'away', player:'J. Quansah', minute:"55'", type:'red' },
    ],
    description:
      '阿茲特克球場世紀大戰！Bellingham 36、38 分鐘連入兩球，Quiñones 42 分鐘扳一城。' +
      'Kane 60 分鐘主射點球擴大優勢，Quansah 55 分鐘遭紅牌罰下，英格蘭十人應戰。' +
      'Jiménez 69 分鐘點球再追一城，但英格蘭頂住墨西哥最後衝擊，以 3:2 驚險晉級 8 強。',
    descriptionEn:
      'A World Cup classic at the Azteca! Bellingham struck twice in three minutes (36\', 38\'), ' +
      'Quiñones pulled one back (42\'). Kane\'s penalty made it 3-1 (60\'), but Quansah was sent off ' +
      '(55\') and England had to survive the final half hour with ten men. Jiménez\'s penalty (69\') ' +
      'set up a grandstand finish, but England held on to win 3-2 and reach the quarterfinals.' },

  // ── Jul 6 — Round of 16 ─────────────────────────────────────────────────

  { date:'Jul 6', round:'Round of 16',
    home:'Portugal', homeFlag:'🇵🇹', homeScore:0,
    away:'Spain',    awayFlag:'🇪🇸', awayScore:1,
    venue:'AT&T Stadium',
    goals:[
      { team:'away', scorer:'M. Merino', minute:"90+1'" },
    ],
    description:
      '梅里諾補時絕殺，C 朗拿度的世界盃生涯恐畫上句號！全場苦戰 90 分鐘僵持不下，' +
      '替補上場的 Merino 在下半場補時第 1 分鐘快發任意球後連續盤帶，' +
      '接 Ferran Torres 傳球射穿 Diogo Costa，西班牙 1:0 淘汰葡萄牙，晉級 8 強。',
    descriptionEn:
      'Merino breaks the deadlock in stoppage time — and likely ends Ronaldo\'s World Cup career! ' +
      'After a goalless 90 minutes, substitute Mikel Merino took a quick free-kick, drove forward and ' +
      'fired past Diogo Costa off a Ferran Torres pass in the first minute of second-half stoppage time. ' +
      'Spain win 1-0 and reach the quarterfinals for the first time since their 2010 title run.' },

  { date:'Jul 6', round:'Round of 16',
    home:'USA',     homeFlag:'🇺🇸', homeScore:1,
    away:'Belgium', awayFlag:'🇧🇪', awayScore:4,
    venue:'Lumen Field',
    goals:[
      { team:'away', scorer:'C. De Ketelaere', minute:"8'"    },
      { team:'home', scorer:'M. Tillman',      minute:"31'"   },
      { team:'away', scorer:'H. Vanaken',      minute:"57'"   },
      { team:'away', scorer:'R. Lukaku',       minute:"90+3'" },
    ],
    description:
      '美國世界盃夢碎，比利時 4:1 大勝晉級！De Ketelaere 8 分鐘率先破門，' +
      'Tillman 31 分鐘一度扳平，但美國後防連番失誤，門將 Freese 更送礼失球，' +
      'Vanaken 57 分鐘、Lukaku 補時再入兩球，比利時攻守全面壓制，闖入 8 強對陣美國。',
    descriptionEn:
      'USA\'s World Cup dream ends in a lopsided defeat! De Ketelaere opened the scoring (8\'), Tillman ' +
      'briefly levelled (31\'), but defensive errors and a goalkeeping mistake from Matt Freese let ' +
      'Belgium in again — Vanaken (57\') and Lukaku (90+3\') completed a dominant 4-1 win. ' +
      'Belgium advance to the quarterfinals.' },

  // ── Jul 7 — Round of 16 ─────────────────────────────────────────────────

  { date:'Jul 7', round:'Round of 16',
    home:'Argentina', homeFlag:'🇦🇷', homeScore:3,
    away:'Egypt',      awayFlag:'🇪🇬', awayScore:2,
    venue:'Mercedes-Benz Stadium',
    goals:[
      { team:'away', scorer:'Y. Ibrahim',    minute:"15'"   },
      { team:'away', scorer:'M. Zico',       minute:"67'"   },
      { team:'home', scorer:'C. Romero',     minute:"79'"   },
      { team:'home', scorer:'L. Messi',      minute:"83'"   },
      { team:'home', scorer:'E. Fernández',  minute:"90+2'" },
    ],
    description:
      '阿根廷驚天逆轉，梅西再建功！埃及 Ibrahim 15 分鐘率先破門，Zico 67 分鐘再下一城，一度 2:0 領先。' +
      '阿根廷絕地反擊：Romero 79 分鐘扳一城，梅西 83 分鐘扳平，E. Fernández 補時終場前再入絕殺球，' +
      '阿根廷 3:2 完成大逆轉，晉級 8 強。',
    descriptionEn:
      'A stunning Argentina comeback, with Messi at the heart of it! Egypt raced into a 2-0 lead through ' +
      'Ibrahim (15\') and Zico (67\'). Argentina fought back: Romero pulled one back (79\'), Messi ' +
      'equalised (83\'), and Enzo Fernández struck the winner in stoppage time (90+2\'). ' +
      'Argentina complete the comeback 3-2 and reach the quarterfinals.' },

  { date:'Jul 7', round:'Round of 16',
    home:'Switzerland', homeFlag:'🇨🇭', homeScore:0,
    away:'Colombia',    awayFlag:'🇨🇴', awayScore:0,
    pens:'4-3',
    venue:'BC Place',
    description:
      '互射十二碼決勝負，瑞士驚險過關！120 分鐘賽事雙方均未能破門，戰至互射十二碼。' +
      'Ruben Vargas 主射制勝一球，令哥倫比亞門將 Camilo Vargas 撲救不及，瑞士 4:3 淘汰哥倫比亞，晉級 8 強。',
    descriptionEn:
      'Penalties decide it after a goalless 120 minutes! Ruben Vargas sent Colombia goalkeeper Camilo ' +
      'Vargas the wrong way to convert the winning penalty, sealing a 4-3 shootout win for Switzerland, ' +
      'who advance to the quarterfinals.' },
];

const SCORES_UPDATED = '2026-07-08';

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
  { key:'Round of 32',   zh:'32強賽',      en:'Round of 32',    dates:'Jun 28 – Jul 3', total:16 },
  { key:'Round of 16',   zh:'16強賽',      en:'Round of 16',    dates:'Jul 4–7',        total:8  },
  { key:'Quarter-final', zh:'八強賽 (QF)', en:'Quarter-finals', dates:'Jul 10–11',      total:4  },
  { key:'Semi-final',    zh:'準決賽 (SF)', en:'Semi-finals',    dates:'Jul 14–15',      total:2  },
  { key:'3rd Place',     zh:'季軍戰',      en:'3rd Place',      dates:'Jul 21',         total:1  },
  { key:'Final',         zh:'🏆 決賽',     en:'🏆 The Final',   dates:'Jul 23',         total:1  },
];

// Round of 32 confirmed matchups (TBD = pending Jun 27 Group J/K/L results)
var R32_SCHEDULE = [
  { date:'Jun 28', home:'South Africa',         homeFlag:'🇿🇦', away:'Canada',               awayFlag:'🇨🇦', venue:'SoFi Stadium'         },
  { date:'Jun 29', home:'Germany',              homeFlag:'🇩🇪', away:'Paraguay',              awayFlag:'🇵🇾', venue:'Gillette Stadium'      },
  { date:'Jun 29', home:'Netherlands',          homeFlag:'🇳🇱', away:'Morocco',               awayFlag:'🇲🇦', venue:'Estadio BBVA'          },
  { date:'Jun 29', home:'Brazil',               homeFlag:'🇧🇷', away:'Japan',                 awayFlag:'🇯🇵', venue:'NRG Stadium'           },
  { date:'Jun 30', home:'Ivory Coast',          homeFlag:'🇨🇮', away:'Norway',                awayFlag:'🇳🇴', venue:'AT&T Stadium'          },
  { date:'Jun 30', home:'France',               homeFlag:'🇫🇷', away:'Sweden',                awayFlag:'🇸🇪', venue:'MetLife Stadium'       },
  { date:'Jun 30', home:'Mexico',               homeFlag:'🇲🇽', away:'Ecuador',               awayFlag:'🇪🇨', venue:'Estadio Azteca'        },
  { date:'Jul 1',  home:'England',              homeFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', away:'DR Congo',              awayFlag:'🇨🇩', venue:'Mercedes-Benz Stadium' },
  { date:'Jul 1',  home:'USA',                  homeFlag:'🇺🇸', away:'Bosnia and Herzegovina', awayFlag:'🇧🇦', venue:"Levi's Stadium"        },
  { date:'Jul 1',  home:'Belgium',              homeFlag:'🇧🇪', away:'Senegal',               awayFlag:'🇸🇳', venue:'Lumen Field'           },
  { date:'Jul 2',  home:'Portugal',             homeFlag:'🇵🇹', away:'Croatia',               awayFlag:'🇭🇷', venue:'BMO Field'             },
  { date:'Jul 2',  home:'Spain',                homeFlag:'🇪🇸', away:'Austria',               awayFlag:'🇦🇹', venue:'SoFi Stadium'          },
  { date:'Jul 2',  home:'Switzerland',          homeFlag:'🇨🇭', away:'Algeria',               awayFlag:'🇩🇿', venue:'BC Place'              },
  { date:'Jul 3',  home:'Australia',            homeFlag:'🇦🇺', away:'Egypt',                 awayFlag:'🇪🇬', venue:'AT&T Stadium'          },
  { date:'Jul 3',  home:'Argentina',            homeFlag:'🇦🇷', away:'Cape Verde',             awayFlag:'🇨🇻', venue:'Hard Rock Stadium'     },
  { date:'Jul 3',  home:'Colombia',             homeFlag:'🇨🇴', away:'Ghana',                 awayFlag:'🇬🇭', venue:'Arrowhead Stadium'     },
];

// Round of 16 confirmed matchups
var R16_SCHEDULE = [
  { date:'Jul 4', home:'Canada',      homeFlag:'🇨🇦', away:'Morocco',    awayFlag:'🇲🇦', venue:'NRG Stadium'            },
  { date:'Jul 4', home:'Paraguay',    homeFlag:'🇵🇾', away:'France',     awayFlag:'🇫🇷', venue:'Lincoln Financial Field' },
  { date:'Jul 5', home:'Brazil',      homeFlag:'🇧🇷', away:'Norway',     awayFlag:'🇳🇴', venue:'MetLife Stadium'         },
  { date:'Jul 5', home:'Mexico',      homeFlag:'🇲🇽', away:'England',    awayFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', venue:'Estadio Azteca'          },
  { date:'Jul 6', home:'Portugal',    homeFlag:'🇵🇹', away:'Spain',      awayFlag:'🇪🇸', venue:'AT&T Stadium'            },
  { date:'Jul 6', home:'USA',         homeFlag:'🇺🇸', away:'Belgium',    awayFlag:'🇧🇪', venue:'Lumen Field'             },
  { date:'Jul 7', home:'Argentina',   homeFlag:'🇦🇷', away:'Egypt',      awayFlag:'🇪🇬', venue:'Mercedes-Benz Stadium'  },
  { date:'Jul 7', home:'Switzerland', homeFlag:'🇨🇭', away:'Colombia',   awayFlag:'🇨🇴', venue:'BC Place'                },
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
    var lastRound = null;
    var rows = FINAL_SCORES.map(function (m) {
      var sep = '';
      if (m.round !== lastRound) {
        lastRound = m.round;
        sep = '<tr class="round-sep-row"><td colspan="5">📅 ' + tx(m.round) + '</td></tr>';
      }
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

      return sep + `<tr>
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
      var matchHTML;
      var scheduleMap = { 'Round of 32': typeof R32_SCHEDULE !== 'undefined' ? R32_SCHEDULE : null,
                          'Round of 16': typeof R16_SCHEDULE !== 'undefined' ? R16_SCHEDULE : null };
      var sched = scheduleMap[r.key];
      if (sched) {
        var schedResultMap = {};
        results.forEach(function(m) { schedResultMap[m.home + '|' + m.away] = m; });
        var lastDate = null;
        matchHTML = sched.map(function(s) {
          var dateSep = '';
          if (s.date !== lastDate) { lastDate = s.date; dateSep = '<div class="ko-date-sep">📅 ' + tx(s.date) + '</div>'; }
          var done = schedResultMap[s.home + '|' + s.away];
          if (done) {
            var penStr = done.pens ? ' <span style="font-size:0.7rem;color:var(--muted);font-weight:600">(' + done.pens + ')</span>' : '';
            return dateSep + '<div class="ko-match">' +
              '<span class="ko-team">' + s.homeFlag + ' ' + s.home + '</span>' +
              '<span class="ko-score">' + done.homeScore + ' – ' + done.awayScore + penStr + '</span>' +
              '<span class="ko-team right">' + s.away + ' ' + s.awayFlag + '</span>' +
              '</div>';
          }
          return dateSep + '<div class="ko-match ko-sched">' +
            '<span class="ko-team">' + s.homeFlag + ' ' + s.home + '</span>' +
            '<span class="ko-score ko-vs">VS</span>' +
            '<span class="ko-team right">' + s.away + ' ' + s.awayFlag + '</span>' +
            '</div>';
        }).join('');
      } else if (results.length > 0) {
        matchHTML = results.map(function(m) {
          return '<div class="ko-match">' +
            '<span class="ko-team">' + m.homeFlag + ' ' + tx(m.home) + '</span>' +
            '<span class="ko-score">' + m.homeScore + ' – ' + m.awayScore + '</span>' +
            '<span class="ko-team right">' + tx(m.away) + ' ' + m.awayFlag + '</span>' +
            '</div>';
        }).join('');
      } else {
        matchHTML = '<div class="ko-tbd">🔒 ' + r.total + (isEn ? ' matches — pending' : ' 場賽事 — 待確定') + '</div>';
      }

      return '<div class="ko-round-card' + (isFinal ? ' ko-final' : '') + '">' +
        '<div class="ko-round-hdr"><span>' + label + '</span><span class="ko-dates">' + r.dates + '</span></div>' +
        '<div class="ko-round-body">' + matchHTML + '</div>' +
        '</div>';
    }).join('');

    area.innerHTML = '<div class="ko-grid">' + roundCards + '</div>';
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
