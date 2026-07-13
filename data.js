const GROUPS = [
  { id:'A', teams:[
    {name:'Mexico',flag:'🇲🇽',rank:14,conf:'CONCACAF',host:true},
    {name:'South Africa',flag:'🇿🇦',rank:60,conf:'CAF'},
    {name:'South Korea',flag:'🇰🇷',rank:23,conf:'AFC'},
    {name:'Czechia',flag:'🇨🇿',rank:40,conf:'UEFA'}
  ]},
  { id:'B', teams:[
    {name:'Canada',flag:'🇨🇦',rank:40,conf:'CONCACAF',host:true},
    {name:'Bosnia and Herzegovina',flag:'🇧🇦',rank:65,conf:'UEFA'},
    {name:'Qatar',flag:'🇶🇦',rank:37,conf:'AFC'},
    {name:'Switzerland',flag:'🇨🇭',rank:19,conf:'UEFA'}
  ]},
  { id:'C', teams:[
    {name:'Brazil',flag:'🇧🇷',rank:5,conf:'CONMEBOL'},
    {name:'Morocco',flag:'🇲🇦',rank:14,conf:'CAF'},
    {name:'Haiti',flag:'🇭🇹',rank:85,conf:'CONCACAF'},
    {name:'Scotland',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',rank:30,conf:'UEFA'}
  ]},
  { id:'D', teams:[
    {name:'USA',flag:'🇺🇸',rank:13,conf:'CONCACAF',host:true},
    {name:'Paraguay',flag:'🇵🇾',rank:65,conf:'CONMEBOL'},
    {name:'Australia',flag:'🇦🇺',rank:24,conf:'AFC'},
    {name:'Türkiye',flag:'🇹🇷',rank:29,conf:'UEFA'}
  ]},
  { id:'E', teams:[
    {name:'Germany',flag:'🇩🇪',rank:12,conf:'UEFA'},
    {name:'Curaçao',flag:'🇨🇼',rank:89,conf:'CONCACAF'},
    {name:'Ivory Coast',flag:'🇨🇮',rank:43,conf:'CAF'},
    {name:'Ecuador',flag:'🇪🇨',rank:44,conf:'CONMEBOL'}
  ]},
  { id:'F', teams:[
    {name:'Netherlands',flag:'🇳🇱',rank:7,conf:'UEFA'},
    {name:'Japan',flag:'🇯🇵',rank:17,conf:'AFC'},
    {name:'Sweden',flag:'🇸🇪',rank:25,conf:'UEFA'},
    {name:'Tunisia',flag:'🇹🇳',rank:35,conf:'CAF'}
  ]},
  { id:'G', teams:[
    {name:'Belgium',flag:'🇧🇪',rank:3,conf:'UEFA'},
    {name:'Egypt',flag:'🇪🇬',rank:36,conf:'CAF'},
    {name:'Iran',flag:'🇮🇷',rank:22,conf:'AFC'},
    {name:'New Zealand',flag:'🇳🇿',rank:95,conf:'OFC'}
  ]},
  { id:'H', teams:[
    {name:'Spain',flag:'🇪🇸',rank:3,conf:'UEFA'},
    {name:'Cape Verde',flag:'🇨🇻',rank:73,conf:'CAF'},
    {name:'Saudi Arabia',flag:'🇸🇦',rank:56,conf:'AFC'},
    {name:'Uruguay',flag:'🇺🇾',rank:18,conf:'CONMEBOL'}
  ]},
  { id:'I', teams:[
    {name:'France',flag:'🇫🇷',rank:2,conf:'UEFA'},
    {name:'Senegal',flag:'🇸🇳',rank:20,conf:'CAF'},
    {name:'Iraq',flag:'🇮🇶',rank:68,conf:'AFC'},
    {name:'Norway',flag:'🇳🇴',rank:35,conf:'UEFA'}
  ]},
  { id:'J', teams:[
    {name:'Argentina',flag:'🇦🇷',rank:1,conf:'CONMEBOL'},
    {name:'Algeria',flag:'🇩🇿',rank:37,conf:'CAF'},
    {name:'Austria',flag:'🇦🇹',rank:25,conf:'UEFA'},
    {name:'Jordan',flag:'🇯🇴',rank:75,conf:'AFC'}
  ]},
  { id:'K', teams:[
    {name:'Portugal',flag:'🇵🇹',rank:6,conf:'UEFA'},
    {name:'DR Congo',flag:'🇨🇩',rank:57,conf:'CAF'},
    {name:'Uzbekistan',flag:'🇺🇿',rank:62,conf:'AFC'},
    {name:'Colombia',flag:'🇨🇴',rank:9,conf:'CONMEBOL'}
  ]},
  { id:'L', teams:[
    {name:'England',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',rank:5,conf:'UEFA'},
    {name:'Croatia',flag:'🇭🇷',rank:10,conf:'UEFA'},
    {name:'Ghana',flag:'🇬🇭',rank:65,conf:'CAF'},
    {name:'Panama',flag:'🇵🇦',rank:72,conf:'CONCACAF'}
  ]}
];

const VENUES = [
  {name:'Estadio Azteca',city:'Mexico City, MEX',cap:87523},
  {name:'Estadio BBVA',city:'Monterrey, MEX',cap:53500},
  {name:'Estadio Akron',city:'Guadalajara, MEX',cap:49850},
  {name:'BC Place',city:'Vancouver, CAN',cap:54500},
  {name:'BMO Field',city:'Toronto, CAN',cap:45736},
  {name:'MetLife Stadium',city:'East Rutherford, NJ',cap:82500},
  {name:'SoFi Stadium',city:'Inglewood, CA',cap:70240},
  {name:'AT&T Stadium',city:'Arlington, TX',cap:80000},
  {name:"Levi's Stadium",city:'Santa Clara, CA',cap:68500},
  {name:'Arrowhead Stadium',city:'Kansas City, MO',cap:76416},
  {name:'Hard Rock Stadium',city:'Miami, FL',cap:65326},
  {name:'Gillette Stadium',city:'Foxborough, MA',cap:65878},
  {name:'Lincoln Financial Field',city:'Philadelphia, PA',cap:69796},
  {name:'Lumen Field',city:'Seattle, WA',cap:72000},
  {name:'NRG Stadium',city:'Houston, TX',cap:72220},
  {name:'Mercedes-Benz Stadium',city:'Atlanta, GA',cap:71000}
];

const SCHEDULE = [
  // ── GROUP STAGE — MATCHDAY 1 ─────────────────────── (All times PDT)
  // Group A
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 11', time:'12:00', home:'Mexico', away:'South Africa', homeFlag:'🇲🇽', awayFlag:'🇿🇦', venue:'Estadio Azteca', group:'A', featured:true },
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 11', time:'19:00', home:'South Korea', away:'Czechia', homeFlag:'🇰🇷', awayFlag:'🇨🇿', venue:'Estadio Akron', group:'A' },
  // Group B
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 12', time:'12:00', home:'Canada', away:'Bosnia and Herzegovina', homeFlag:'🇨🇦', awayFlag:'🇧🇦', venue:'BMO Field', group:'B' },
  // Group D
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 12', time:'18:00', home:'USA', away:'Paraguay', homeFlag:'🇺🇸', awayFlag:'🇵🇾', venue:'SoFi Stadium', group:'D' },
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 13', time:'21:00', home:'Australia', away:'Türkiye', homeFlag:'🇦🇺', awayFlag:'🇹🇷', venue:'BC Place', group:'D' },
  // Group B (cont.)
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 13', time:'12:00', home:'Qatar', away:'Switzerland', homeFlag:'🇶🇦', awayFlag:'🇨🇭', venue:"Levi's Stadium", group:'B' },
  // Group C
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 13', time:'15:00', home:'Brazil', away:'Morocco', homeFlag:'🇧🇷', awayFlag:'🇲🇦', venue:'MetLife Stadium', group:'C', featured:true },
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 13', time:'18:00', home:'Haiti', away:'Scotland', homeFlag:'🇭🇹', awayFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', venue:'Gillette Stadium', group:'C' },
  // Group E
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 14', time:'10:00', home:'Germany', away:'Curaçao', homeFlag:'🇩🇪', awayFlag:'🇨🇼', venue:'NRG Stadium', group:'E' },
  // Group F
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 14', time:'13:00', home:'Netherlands', away:'Japan', homeFlag:'🇳🇱', awayFlag:'🇯🇵', venue:'AT&T Stadium', group:'F' },
  // Group E (cont.)
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 14', time:'16:00', home:'Ivory Coast', away:'Ecuador', homeFlag:'🇨🇮', awayFlag:'🇪🇨', venue:'Lincoln Financial Field', group:'E' },
  // Group F (cont.)
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 14', time:'19:00', home:'Sweden', away:'Tunisia', homeFlag:'🇸🇪', awayFlag:'🇹🇳', venue:'Estadio BBVA', group:'F' },
  // Group H
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 15', time:'09:00', home:'Spain', away:'Cape Verde', homeFlag:'🇪🇸', awayFlag:'🇨🇻', venue:'Mercedes-Benz Stadium', group:'H' },
  // Group G
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 15', time:'12:00', home:'Belgium', away:'Egypt', homeFlag:'🇧🇪', awayFlag:'🇪🇬', venue:'Lumen Field', group:'G' },
  // Group H (cont.)
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 15', time:'15:00', home:'Saudi Arabia', away:'Uruguay', homeFlag:'🇸🇦', awayFlag:'🇺🇾', venue:'Hard Rock Stadium', group:'H' },
  // Group G (cont.)
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 15', time:'18:00', home:'Iran', away:'New Zealand', homeFlag:'🇮🇷', awayFlag:'🇳🇿', venue:'SoFi Stadium', group:'G' },
  // Group I
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 16', time:'12:00', home:'France', away:'Senegal', homeFlag:'🇫🇷', awayFlag:'🇸🇳', venue:'MetLife Stadium', group:'I', featured:true },
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 16', time:'15:00', home:'Iraq', away:'Norway', homeFlag:'🇮🇶', awayFlag:'🇳🇴', venue:'Gillette Stadium', group:'I' },
  // Group J
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 16', time:'18:00', home:'Argentina', away:'Algeria', homeFlag:'🇦🇷', awayFlag:'🇩🇿', venue:'Arrowhead Stadium', group:'J', featured:true },
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 16', time:'21:00', home:'Austria', away:'Jordan', homeFlag:'🇦🇹', awayFlag:'🇯🇴', venue:"Levi's Stadium", group:'J' },
  // Group K
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 17', time:'10:00', home:'Portugal', away:'DR Congo', homeFlag:'🇵🇹', awayFlag:'🇨🇩', venue:'NRG Stadium', group:'K' },
  // Group L
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 17', time:'13:00', home:'England', away:'Croatia', homeFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag:'🇭🇷', venue:'AT&T Stadium', group:'L', featured:true },
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 17', time:'16:00', home:'Ghana', away:'Panama', homeFlag:'🇬🇭', awayFlag:'🇵🇦', venue:'BMO Field', group:'L' },
  // Group K (cont.)
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 17', time:'19:00', home:'Uzbekistan', away:'Colombia', homeFlag:'🇺🇿', awayFlag:'🇨🇴', venue:'Estadio Azteca', group:'K' },
  // ── GROUP STAGE — MATCHDAY 2 ──────────────────────────────────────────
  // Group A
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 18', time:'09:00', home:'Czechia', away:'South Africa', homeFlag:'🇨🇿', awayFlag:'🇿🇦', venue:'Mercedes-Benz Stadium', group:'A' },
  // Group B
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 18', time:'12:00', home:'Switzerland', away:'Bosnia and Herzegovina', homeFlag:'🇨🇭', awayFlag:'🇧🇦', venue:'SoFi Stadium', group:'B' },
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 18', time:'15:00', home:'Canada', away:'Qatar', homeFlag:'🇨🇦', awayFlag:'🇶🇦', venue:'BC Place', group:'B' },
  // Group A (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 18', time:'18:00', home:'Mexico', away:'South Korea', homeFlag:'🇲🇽', awayFlag:'🇰🇷', venue:'Estadio Akron', group:'A' },
  // Group D (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 19', time:'12:00', home:'USA', away:'Australia', homeFlag:'🇺🇸', awayFlag:'🇦🇺', venue:'Lumen Field', group:'D' },
  // Group C
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 19', time:'15:00', home:'Scotland', away:'Morocco', homeFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayFlag:'🇲🇦', venue:'Gillette Stadium', group:'C' },
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 19', time:'18:00', home:'Brazil', away:'Haiti', homeFlag:'🇧🇷', awayFlag:'🇭🇹', venue:'Lincoln Financial Field', group:'C' },
  // Group D (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 19', time:'21:00', home:'Türkiye', away:'Paraguay', homeFlag:'🇹🇷', awayFlag:'🇵🇾', venue:"Levi's Stadium", group:'D' },
  // Group F (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 20', time:'10:00', home:'Netherlands', away:'Sweden', homeFlag:'🇳🇱', awayFlag:'🇸🇪', venue:'NRG Stadium', group:'F' },
  // Group E
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 20', time:'13:00', home:'Germany', away:'Ivory Coast', homeFlag:'🇩🇪', awayFlag:'🇨🇮', venue:'BMO Field', group:'E' },
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 20', time:'17:00', home:'Ecuador', away:'Curaçao', homeFlag:'🇪🇨', awayFlag:'🇨🇼', venue:'Arrowhead Stadium', group:'E' },
  // Group F (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 20', time:'21:00', home:'Tunisia', away:'Japan', homeFlag:'🇹🇳', awayFlag:'🇯🇵', venue:'Estadio BBVA', group:'F' },
  // Group H
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 21', time:'09:00', home:'Spain', away:'Saudi Arabia', homeFlag:'🇪🇸', awayFlag:'🇸🇦', venue:'Mercedes-Benz Stadium', group:'H' },
  // Group G
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 21', time:'12:00', home:'Belgium', away:'Iran', homeFlag:'🇧🇪', awayFlag:'🇮🇷', venue:'SoFi Stadium', group:'G' },
  // Group H (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 21', time:'15:00', home:'Uruguay', away:'Cape Verde', homeFlag:'🇺🇾', awayFlag:'🇨🇻', venue:'Hard Rock Stadium', group:'H' },
  // Group G (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 21', time:'18:00', home:'New Zealand', away:'Egypt', homeFlag:'🇳🇿', awayFlag:'🇪🇬', venue:'BC Place', group:'G' },
  // Group J
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 22', time:'10:00', home:'Argentina', away:'Austria', homeFlag:'🇦🇷', awayFlag:'🇦🇹', venue:'AT&T Stadium', group:'J' },
  // Group I
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 22', time:'14:00', home:'France', away:'Iraq', homeFlag:'🇫🇷', awayFlag:'🇮🇶', venue:'Lincoln Financial Field', group:'I' },
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 22', time:'17:00', home:'Norway', away:'Senegal', homeFlag:'🇳🇴', awayFlag:'🇸🇳', venue:'MetLife Stadium', group:'I' },
  // Group J (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 22', time:'20:00', home:'Jordan', away:'Algeria', homeFlag:'🇯🇴', awayFlag:'🇩🇿', venue:"Levi's Stadium", group:'J' },
  // Group K
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 23', time:'10:00', home:'Portugal', away:'Uzbekistan', homeFlag:'🇵🇹', awayFlag:'🇺🇿', venue:'NRG Stadium', group:'K' },
  // Group L
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 23', time:'13:00', home:'England', away:'Ghana', homeFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag:'🇬🇭', venue:'Gillette Stadium', group:'L' },
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 23', time:'16:00', home:'Panama', away:'Croatia', homeFlag:'🇵🇦', awayFlag:'🇭🇷', venue:'BMO Field', group:'L' },
  // Group K (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 23', time:'19:00', home:'Colombia', away:'DR Congo', homeFlag:'🇨🇴', awayFlag:'🇨🇩', venue:'Estadio Akron', group:'K' },
  // ── GROUP STAGE — MATCHDAY 3 (simultaneous within each group) ─────────
  // Group B
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 24', time:'12:00', home:'Switzerland', away:'Canada', homeFlag:'🇨🇭', awayFlag:'🇨🇦', venue:'BC Place', group:'B' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 24', time:'12:00', home:'Bosnia and Herzegovina', away:'Qatar', homeFlag:'🇧🇦', awayFlag:'🇶🇦', venue:'Lumen Field', group:'B' },
  // Group C
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 24', time:'15:00', home:'Scotland', away:'Brazil', homeFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayFlag:'🇧🇷', venue:'Hard Rock Stadium', group:'C' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 24', time:'15:00', home:'Morocco', away:'Haiti', homeFlag:'🇲🇦', awayFlag:'🇭🇹', venue:'Mercedes-Benz Stadium', group:'C' },
  // Group A
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 24', time:'18:00', home:'Czechia', away:'Mexico', homeFlag:'🇨🇿', awayFlag:'🇲🇽', venue:'Estadio Azteca', group:'A' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 24', time:'18:00', home:'South Africa', away:'South Korea', homeFlag:'🇿🇦', awayFlag:'🇰🇷', venue:'Estadio BBVA', group:'A' },
  // Group E
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 25', time:'13:00', home:'Ecuador', away:'Germany', homeFlag:'🇪🇨', awayFlag:'🇩🇪', venue:'MetLife Stadium', group:'E' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 25', time:'13:00', home:'Curaçao', away:'Ivory Coast', homeFlag:'🇨🇼', awayFlag:'🇨🇮', venue:'Lincoln Financial Field', group:'E' },
  // Group F
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 25', time:'16:00', home:'Japan', away:'Sweden', homeFlag:'🇯🇵', awayFlag:'🇸🇪', venue:'AT&T Stadium', group:'F' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 25', time:'16:00', home:'Tunisia', away:'Netherlands', homeFlag:'🇹🇳', awayFlag:'🇳🇱', venue:'Arrowhead Stadium', group:'F' },
  // Group D
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 25', time:'19:00', home:'Türkiye', away:'USA', homeFlag:'🇹🇷', awayFlag:'🇺🇸', venue:'SoFi Stadium', group:'D' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 25', time:'19:00', home:'Paraguay', away:'Australia', homeFlag:'🇵🇾', awayFlag:'🇦🇺', venue:"Levi's Stadium", group:'D' },
  // Group I
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 26', time:'12:00', home:'Norway', away:'France', homeFlag:'🇳🇴', awayFlag:'🇫🇷', venue:'Gillette Stadium', group:'I' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 26', time:'12:00', home:'Senegal', away:'Iraq', homeFlag:'🇸🇳', awayFlag:'🇮🇶', venue:'BMO Field', group:'I' },
  // Group H
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 26', time:'17:00', home:'Cape Verde', away:'Saudi Arabia', homeFlag:'🇨🇻', awayFlag:'🇸🇦', venue:'NRG Stadium', group:'H' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 26', time:'17:00', home:'Uruguay', away:'Spain', homeFlag:'🇺🇾', awayFlag:'🇪🇸', venue:'Estadio Akron', group:'H' },
  // Group G
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 26', time:'20:00', home:'Egypt', away:'Iran', homeFlag:'🇪🇬', awayFlag:'🇮🇷', venue:'Lumen Field', group:'G' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 26', time:'20:00', home:'New Zealand', away:'Belgium', homeFlag:'🇳🇿', awayFlag:'🇧🇪', venue:'BC Place', group:'G' },
  // Group L
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 27', time:'14:00', home:'Panama', away:'England', homeFlag:'🇵🇦', awayFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', venue:'MetLife Stadium', group:'L' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 27', time:'14:00', home:'Croatia', away:'Ghana', homeFlag:'🇭🇷', awayFlag:'🇬🇭', venue:'Lincoln Financial Field', group:'L' },
  // Group K
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 27', time:'16:30', home:'Colombia', away:'Portugal', homeFlag:'🇨🇴', awayFlag:'🇵🇹', venue:'Hard Rock Stadium', group:'K' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 27', time:'16:30', home:'DR Congo', away:'Uzbekistan', homeFlag:'🇨🇩', awayFlag:'🇺🇿', venue:'Mercedes-Benz Stadium', group:'K' },
  // Group J
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 27', time:'19:00', home:'Algeria', away:'Austria', homeFlag:'🇩🇿', awayFlag:'🇦🇹', venue:'Arrowhead Stadium', group:'J' },
  { phase:'Group Stage', round:'Matchday 3', date:'Jun 27', time:'19:00', home:'Jordan', away:'Argentina', homeFlag:'🇯🇴', awayFlag:'🇦🇷', venue:'AT&T Stadium', group:'J' },
  // ── ROUND OF 32 ──────────────────────────────────────────────────────
  { phase:'Round of 32', round:'R32', date:'Jun 28', time:'12:00', home:'South Africa',         homeFlag:'🇿🇦', away:'Canada',               awayFlag:'🇨🇦', venue:'SoFi Stadium',          group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 29', time:'10:00', home:'Brazil',               homeFlag:'🇧🇷', away:'Japan',                 awayFlag:'🇯🇵', venue:'NRG Stadium',           group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 29', time:'13:30', home:'Germany',              homeFlag:'🇩🇪', away:'Paraguay',              awayFlag:'🇵🇾', venue:'Gillette Stadium',      group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 29', time:'18:00', home:'Netherlands',          homeFlag:'🇳🇱', away:'Morocco',               awayFlag:'🇲🇦', venue:'Estadio BBVA',          group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 30', time:'10:00', home:'Ivory Coast',          homeFlag:'🇨🇮', away:'Norway',                awayFlag:'🇳🇴', venue:'AT&T Stadium',          group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 30', time:'14:00', home:'France',               homeFlag:'🇫🇷', away:'Sweden',                awayFlag:'🇸🇪', venue:'MetLife Stadium',       group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 30', time:'18:00', home:'Mexico',               homeFlag:'🇲🇽', away:'Ecuador',               awayFlag:'🇪🇨', venue:'Estadio Azteca',        group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 1',  time:'09:00', home:'England',              homeFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', away:'DR Congo',              awayFlag:'🇨🇩', venue:'Mercedes-Benz Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 1',  time:'13:00', home:'Belgium',              homeFlag:'🇧🇪', away:'Senegal',               awayFlag:'🇸🇳', venue:'Lumen Field',           group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 1',  time:'17:00', home:'USA',                  homeFlag:'🇺🇸', away:'Bosnia and Herzegovina', awayFlag:'🇧🇦', venue:"Levi's Stadium",        group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 2',  time:'12:00', home:'Spain',                homeFlag:'🇪🇸', away:'Austria',               awayFlag:'🇦🇹', venue:'SoFi Stadium',          group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 2',  time:'16:00', home:'Portugal',             homeFlag:'🇵🇹', away:'Croatia',               awayFlag:'🇭🇷', venue:'BMO Field',             group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 2',  time:'20:00', home:'Switzerland',          homeFlag:'🇨🇭', away:'Algeria',               awayFlag:'🇩🇿', venue:'BC Place',              group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 3',  time:'11:00', home:'Australia',            homeFlag:'🇦🇺', away:'Egypt',                 awayFlag:'🇪🇬', venue:'AT&T Stadium',          group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 3',  time:'15:00', home:'Argentina',            homeFlag:'🇦🇷', away:'Cape Verde',             awayFlag:'🇨🇻', venue:'Hard Rock Stadium',     group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 3',  time:'18:30', home:'Colombia',             homeFlag:'🇨🇴', away:'Ghana',                 awayFlag:'🇬🇭', venue:'Arrowhead Stadium',     group:'' },
  // ── ROUND OF 16 ──────────────────────────────────────────────────────
  { phase:'Round of 16', round:'R16', date:'Jul 4', time:'10:00', home:'Canada', away:'Morocco', homeFlag:'🇨🇦', awayFlag:'🇲🇦', venue:'NRG Stadium', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 4', time:'14:00', home:'Paraguay', away:'France', homeFlag:'🇵🇾', awayFlag:'🇫🇷', venue:'Lincoln Financial Field', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 5', time:'13:00', home:'Brazil', away:'Norway', homeFlag:'🇧🇷', awayFlag:'🇳🇴', venue:'MetLife Stadium', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 5', time:'17:00', home:'Mexico', away:'England', homeFlag:'🇲🇽', awayFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', venue:'Estadio Azteca', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 6', time:'12:00', home:'Portugal', away:'Spain', homeFlag:'🇵🇹', awayFlag:'🇪🇸', venue:'AT&T Stadium', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 6', time:'17:00', home:'USA', away:'Belgium', homeFlag:'🇺🇸', awayFlag:'🇧🇪', venue:'Lumen Field', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 7', time:'09:00', home:'Argentina', away:'Egypt', homeFlag:'🇦🇷', awayFlag:'🇪🇬', venue:'Mercedes-Benz Stadium', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 7', time:'13:00', home:'Switzerland', away:'Colombia', homeFlag:'🇨🇭', awayFlag:'🇨🇴', venue:'BC Place', group:'' },
  // ── QUARTERFINALS ────────────────────────────────────────────────────
  { phase:'Quarterfinals', round:'QF', date:'Jul 9', time:'13:00', home:'France', away:'Morocco', homeFlag:'🇫🇷', awayFlag:'🇲🇦', venue:'Gillette Stadium', group:'' },
  { phase:'Quarterfinals', round:'QF', date:'Jul 10', time:'12:00', home:'Spain', away:'Belgium', homeFlag:'🇪🇸', awayFlag:'🇧🇪', venue:'SoFi Stadium', group:'' },
  { phase:'Quarterfinals', round:'QF', date:'Jul 11', time:'14:00', home:'Norway', away:'England', homeFlag:'🇳🇴', awayFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', venue:'Hard Rock Stadium', group:'' },
  { phase:'Quarterfinals', round:'QF', date:'Jul 11', time:'18:00', home:'Argentina', away:'Switzerland', homeFlag:'🇦🇷', awayFlag:'🇨🇭', venue:'Arrowhead Stadium', group:'' },
  // ── SEMIFINALS ───────────────────────────────────────────────────────
  { phase:'Semifinals', round:'SF', date:'Jul 14', time:'12:00', home:'France', away:'Spain', homeFlag:'🇫🇷', awayFlag:'🇪🇸', venue:'AT&T Stadium', group:'' },
  { phase:'Semifinals', round:'SF', date:'Jul 15', time:'12:00', home:'England', away:'Argentina', homeFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', awayFlag:'🇦🇷', venue:'Mercedes-Benz Stadium', group:'' },
  // ── 3RD PLACE ────────────────────────────────────────────────────────
  { phase:'3rd Place Play-off', round:'3rd', date:'Jul 18', time:'14:00', home:'L SF-1', away:'L SF-2', homeFlag:'🥉', awayFlag:'🥉', venue:'Hard Rock Stadium', group:'' },
  // ── FINAL ────────────────────────────────────────────────────────────
  { phase:'⭐ FINAL ⭐', round:'Final', date:'Jul 19', time:'12:00', home:'W SF-1', away:'W SF-2', homeFlag:'🏆', awayFlag:'🏆', venue:'MetLife Stadium', group:'', featured:true }
];

const TEAMS_DATA = [
  { name:'Argentina', flag:'🇦🇷', group:'J', rank:1, conf:'CONMEBOL', coach:'Lionel Scaloni',
    players:[
      {name:'Lionel Messi',pos:'FW',star:true},{name:'Ángel Di María',pos:'FW'},{name:'Julián Álvarez',pos:'FW',star:true},
      {name:'Lautaro Martínez',pos:'FW',star:true},{name:'Rodrigo De Paul',pos:'MF'},{name:'Alexis Mac Allister',pos:'MF'},
      {name:'Enzo Fernández',pos:'MF',star:true},{name:'Leandro Paredes',pos:'MF'},{name:'Nicolás Otamendi',pos:'DF'},
      {name:'Cristian Romero',pos:'DF'},{name:'Lisandro Martínez',pos:'DF'},{name:'Nahuel Molina',pos:'DF'},
      {name:'Emiliano Martínez',pos:'GK',star:true},{name:'Germán Pezzella',pos:'DF'},{name:'Thiago Almada',pos:'MF'}
    ]},
  { name:'France', flag:'🇫🇷', group:'I', rank:2, conf:'UEFA', coach:'Didier Deschamps',
    players:[
      {name:'Kylian Mbappé',pos:'FW',star:true},{name:'Antoine Griezmann',pos:'FW',star:true},{name:'Ousmane Dembélé',pos:'FW'},
      {name:'Marcus Thuram',pos:'FW'},{name:'Randal Kolo Muani',pos:'FW'},{name:'Eduardo Camavinga',pos:'MF'},
      {name:'Aurélien Tchouaméni',pos:'MF',star:true},{name:'Adrien Rabiot',pos:'MF'},{name:'Mattéo Guendouzi',pos:'MF'},
      {name:'Jules Koundé',pos:'DF'},{name:'Raphaël Varane',pos:'DF'},{name:'Dayot Upamecano',pos:'DF'},
      {name:'Theo Hernandez',pos:'DF'},{name:'Mike Maignan',pos:'GK',star:true},{name:'N\'Golo Kanté',pos:'MF'}
    ]},
  { name:'Spain', flag:'🇪🇸', group:'H', rank:3, conf:'UEFA', coach:'Luis de la Fuente',
    players:[
      {name:'Pedri',pos:'MF',star:true},{name:'Gavi',pos:'MF',star:true},{name:'Lamine Yamal',pos:'FW',star:true},
      {name:'Álvaro Morata',pos:'FW'},{name:'Dani Olmo',pos:'MF'},{name:'Fabián Ruiz',pos:'MF'},
      {name:'Rodri',pos:'MF',star:true},{name:'Jordi Alba',pos:'DF'},{name:'Aymeric Laporte',pos:'DF'},
      {name:'Dani Carvajal',pos:'DF'},{name:'Pau Cubarsí',pos:'DF'},{name:'Unai Simón',pos:'GK'},
      {name:'Ferran Torres',pos:'FW'},{name:'Nico Williams',pos:'FW',star:true},{name:'Mikel Merino',pos:'MF'}
    ]},
  { name:'England', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', group:'L', rank:5, conf:'UEFA', coach:'Gareth Southgate',
    players:[
      {name:'Jude Bellingham',pos:'MF',star:true},{name:'Harry Kane',pos:'FW',star:true},{name:'Phil Foden',pos:'MF',star:true},
      {name:'Bukayo Saka',pos:'FW',star:true},{name:'Marcus Rashford',pos:'FW'},{name:'Declan Rice',pos:'MF'},
      {name:'Jordan Henderson',pos:'MF'},{name:'Kyle Walker',pos:'DF'},{name:'John Stones',pos:'DF'},
      {name:'Harry Maguire',pos:'DF'},{name:'Luke Shaw',pos:'DF'},{name:'Jordan Pickford',pos:'GK'},
      {name:'Trent Alexander-Arnold',pos:'DF'},{name:'Cole Palmer',pos:'MF'},{name:'Ollie Watkins',pos:'FW'}
    ]},
  { name:'Brazil', flag:'🇧🇷', group:'C', rank:5, conf:'CONMEBOL', coach:'Dorival Júnior',
    players:[
      {name:'Vinícius Jr.',pos:'FW',star:true},{name:'Rodrygo',pos:'FW',star:true},{name:'Neymar Jr.',pos:'FW',star:true},
      {name:'Raphinha',pos:'FW'},{name:'Endrick',pos:'FW'},{name:'Bruno Guimarães',pos:'MF',star:true},
      {name:'Lucas Paquetá',pos:'MF'},{name:'Casemiro',pos:'MF'},{name:'Éder Militão',pos:'DF'},
      {name:'Marquinhos',pos:'DF'},{name:'Danilo',pos:'DF'},{name:'Renan Lodi',pos:'DF'},
      {name:'Alisson Becker',pos:'GK',star:true},{name:'Antony',pos:'FW'},{name:'Douglas Luiz',pos:'MF'}
    ]},
  { name:'Portugal', flag:'🇵🇹', group:'K', rank:6, conf:'UEFA', coach:'Roberto Martínez',
    players:[
      {name:'Cristiano Ronaldo',pos:'FW',star:true},{name:'Bruno Fernandes',pos:'MF',star:true},{name:'Rafael Leão',pos:'FW',star:true},
      {name:'Bernardo Silva',pos:'MF',star:true},{name:'João Cancelo',pos:'DF'},{name:'Rúben Dias',pos:'DF'},
      {name:'Vitinha',pos:'MF'},{name:'João Neves',pos:'MF'},{name:'Pedro Neto',pos:'FW'},
      {name:'Diogo Jota',pos:'FW'},{name:'Gonçalo Ramos',pos:'FW'},{name:'Rui Patrício',pos:'GK'},
      {name:'Nuno Mendes',pos:'DF'},{name:'António Silva',pos:'DF'},{name:'Otávio',pos:'MF'}
    ]},
  { name:'Netherlands', flag:'🇳🇱', group:'F', rank:7, conf:'UEFA', coach:'Ronald Koeman',
    players:[
      {name:'Virgil van Dijk',pos:'DF',star:true},{name:'Memphis Depay',pos:'FW'},{name:'Cody Gakpo',pos:'FW',star:true},
      {name:'Frenkie de Jong',pos:'MF',star:true},{name:'Xavi Simons',pos:'MF'},{name:'Nathan Aké',pos:'DF'},
      {name:'Denzel Dumfries',pos:'DF'},{name:'Daley Blind',pos:'DF'},{name:'Ryan Gravenberch',pos:'MF'},
      {name:'Georginio Wijnaldum',pos:'MF'},{name:'Steven Bergwijn',pos:'FW'},{name:'Bart Verbruggen',pos:'GK'},
      {name:'Donyell Malen',pos:'FW'},{name:'Teun Koopmeiners',pos:'MF',star:true},{name:'Tijjani Reijnders',pos:'MF'}
    ]},
  { name:'Belgium', flag:'🇧🇪', group:'G', rank:3, conf:'UEFA', coach:'Domenico Tedesco',
    players:[
      {name:'Kevin De Bruyne',pos:'MF',star:true},{name:'Romelu Lukaku',pos:'FW',star:true},{name:'Eden Hazard',pos:'FW'},
      {name:'Thibaut Courtois',pos:'GK',star:true},{name:'Youri Tielemans',pos:'MF'},{name:'Axel Witsel',pos:'MF'},
      {name:'Thomas Meunier',pos:'DF'},{name:'Jan Vertonghen',pos:'DF'},{name:'Toby Alderweireld',pos:'DF'},
      {name:'Dries Mertens',pos:'FW'},{name:'Charles De Ketelaere',pos:'MF'},{name:'Leandro Trossard',pos:'FW'},
      {name:'Timothy Castagne',pos:'DF'},{name:'Jeremy Doku',pos:'FW',star:true},{name:'Arthur Theate',pos:'DF'}
    ]},
  { name:'Czechia', flag:'🇨🇿', group:'A', rank:40, conf:'UEFA', coach:'Miroslav Koubek',
    players:[
      {name:'Patrik Schick',pos:'FW',star:true},{name:'Tomáš Souček',pos:'MF',star:true},{name:'Ladislav Krejčí',pos:'DF',star:true},
      {name:'Adam Hložek',pos:'FW'},{name:'Vladimír Coufal',pos:'DF'},{name:'Lukáš Provod',pos:'MF'},
      {name:'Matěj Kovář',pos:'GK'},{name:'David Zima',pos:'DF'},{name:'Robin Hranáč',pos:'DF'},
      {name:'Pavel Šulc',pos:'MF',star:true},{name:'Michal Sadílek',pos:'MF'},{name:'David Jurásek',pos:'DF'},
      {name:'Jindřich Staněk',pos:'GK'},{name:'Antonín Barák',pos:'MF'},{name:'Václav Černý',pos:'FW'}
    ]},
  { name:'Colombia', flag:'🇨🇴', group:'K', rank:9, conf:'CONMEBOL', coach:'Néstor Lorenzo',
    players:[
      {name:'James Rodríguez',pos:'MF',star:true},{name:'Luis Díaz',pos:'FW',star:true},{name:'Falcao García',pos:'FW'},
      {name:'Radamel Falcao',pos:'FW'},{name:'Cuadrado',pos:'MF'},{name:'Davinson Sánchez',pos:'DF'},
      {name:'Yerry Mina',pos:'DF'},{name:'David Ospina',pos:'GK'},{name:'Richard Ríos',pos:'MF',star:true},
      {name:'John Córdoba',pos:'FW'},{name:'Jhon Durán',pos:'FW'},{name:'Jorge Carrascal',pos:'MF'},
      {name:'Daniel Muñoz',pos:'DF'},{name:'Jefferson Lerma',pos:'MF'},{name:'Camilo Vargas',pos:'GK'}
    ]},
  { name:'Croatia', flag:'🇭🇷', group:'L', rank:10, conf:'UEFA', coach:'Zlatko Dalić',
    players:[
      {name:'Luka Modrić',pos:'MF',star:true},{name:'Ivan Perišić',pos:'FW'},{name:'Andrej Kramarić',pos:'FW',star:true},
      {name:'Mateo Kovačić',pos:'MF',star:true},{name:'Marcelo Brozović',pos:'MF'},{name:'Joško Gvardiol',pos:'DF',star:true},
      {name:'Dejan Lovren',pos:'DF'},{name:'Dominik Livaković',pos:'GK',star:true},{name:'Šime Vrsaljko',pos:'DF'},
      {name:'Ante Budimir',pos:'FW'},{name:'Mario Pašalić',pos:'MF'},{name:'Bruno Petković',pos:'FW'},
      {name:'Borna Ćorić',pos:'MF'},{name:'Josip Stanišić',pos:'DF'},{name:'Nikola Vlašić',pos:'MF'}
    ]},
  { name:'Bosnia and Herzegovina', flag:'🇧🇦', group:'B', rank:65, conf:'UEFA', coach:'Sergej Barbarez',
    players:[
      {name:'Edin Džeko',pos:'FW',star:true},{name:'Ermedin Demirović',pos:'FW',star:true},{name:'Sead Kolašinac',pos:'DF'},
      {name:'Amir Hadžiahmetović',pos:'MF'},{name:'Esmir Bajraktarević',pos:'FW',star:true},{name:'Kerim Alajbegović',pos:'MF'},
      {name:'Rade Krunić',pos:'MF'},{name:'Nihad Mujakić',pos:'DF'},{name:'Toni Šunjić',pos:'DF'},
      {name:'Ibrahim Šehić',pos:'GK'},{name:'Dennis Hadžikadunić',pos:'DF'},{name:'Anel Ahmedhodžić',pos:'DF'},
      {name:'Amar Rahmanović',pos:'FW'},{name:'Gojko Cimirot',pos:'MF'},{name:'Nedim Bajrami',pos:'MF'}
    ]},
  { name:'Germany', flag:'🇩🇪', group:'E', rank:12, conf:'UEFA', coach:'Julian Nagelsmann',
    players:[
      {name:'Florian Wirtz',pos:'MF',star:true},{name:'Jamal Musiala',pos:'MF',star:true},{name:'Thomas Müller',pos:'FW'},
      {name:'Toni Kroos',pos:'MF',star:true},{name:'Joshua Kimmich',pos:'MF'},{name:'Antonio Rüdiger',pos:'DF'},
      {name:'Kai Havertz',pos:'FW',star:true},{name:'Leroy Sané',pos:'FW'},{name:'Serge Gnabry',pos:'FW'},
      {name:'Manuel Neuer',pos:'GK',star:true},{name:'Niklas Süle',pos:'DF'},{name:'Leon Goretzka',pos:'MF'},
      {name:'David Raum',pos:'DF'},{name:'İlkay Gündoğan',pos:'MF'},{name:'Niclas Füllkrug',pos:'FW'}
    ]},
  { name:'USA', flag:'🇺🇸', group:'D', rank:13, conf:'CONCACAF', coach:'Mauricio Pochettino',
    players:[
      {name:'Christian Pulisic',pos:'FW',star:true},{name:'Gio Reyna',pos:'MF',star:true},{name:'Ricardo Pepi',pos:'FW'},
      {name:'Tyler Adams',pos:'MF'},{name:'Weston McKennie',pos:'MF'},{name:'Yunus Musah',pos:'MF',star:true},
      {name:'Antonee Robinson',pos:'DF'},{name:'Sergiño Dest',pos:'DF'},{name:'Cameron Carter-Vickers',pos:'DF'},
      {name:'Walker Zimmerman',pos:'DF'},{name:'Matt Turner',pos:'GK'},{name:'Folarin Balogun',pos:'FW'},
      {name:'Josh Sargent',pos:'FW'},{name:'Malik Tillman',pos:'MF'},{name:'Joe Scally',pos:'DF'}
    ]},
  { name:'Morocco', flag:'🇲🇦', group:'C', rank:14, conf:'CAF', coach:'Walid Regragui',
    players:[
      {name:'Hakim Ziyech',pos:'FW',star:true},{name:'Achraf Hakimi',pos:'DF',star:true},{name:'Youssef En-Nesyri',pos:'FW',star:true},
      {name:'Sofyan Amrabat',pos:'MF',star:true},{name:'Azzedine Ounahi',pos:'MF'},{name:'Noussair Mazraoui',pos:'DF'},
      {name:'Romain Saiss',pos:'DF'},{name:'Nayef Aguerd',pos:'DF'},{name:'Bono',pos:'GK',star:true},
      {name:'Selim Amallah',pos:'MF'},{name:'Ilias Chair',pos:'MF'},{name:'Sofiane Boufal',pos:'FW'},
      {name:'Abde Ezzalzouli',pos:'FW'},{name:'Yahia Attiat-Allah',pos:'DF'},{name:'Jawad El Yamiq',pos:'DF'}
    ]},
  { name:'Mexico', flag:'🇲🇽', group:'A', rank:14, conf:'CONCACAF', coach:'Javier Aguirre',
    players:[
      {name:'Hirving Lozano',pos:'FW',star:true},{name:'Raúl Jiménez',pos:'FW',star:true},{name:'Guillermo Ochoa',pos:'GK',star:true},
      {name:'Andrés Guardado',pos:'MF'},{name:'Héctor Herrera',pos:'MF'},{name:'Edson Álvarez',pos:'MF'},
      {name:'Jorge Sánchez',pos:'DF'},{name:'César Montes',pos:'DF'},{name:'Héctor Moreno',pos:'DF'},
      {name:'Alexis Vega',pos:'FW'},{name:'Uriel Antuna',pos:'FW'},{name:'Santiago Giménez',pos:'FW',star:true},
      {name:'Johan Vásquez',pos:'DF'},{name:'Orbelín Pineda',pos:'MF'},{name:'Jesús Gallardo',pos:'DF'}
    ]},
  { name:'Japan', flag:'🇯🇵', group:'F', rank:17, conf:'AFC', coach:'Hajime Moriyasu',
    players:[
      {name:'Takumi Minamino',pos:'FW',star:true},{name:'Daichi Kamada',pos:'MF',star:true},{name:'Takehiro Tomiyasu',pos:'DF'},
      {name:'Wataru Endō',pos:'MF'},{name:'Kaoru Mitoma',pos:'FW',star:true},{name:'Ritsu Dōan',pos:'MF'},
      {name:'Shuichi Gonda',pos:'GK'},{name:'Maya Yoshida',pos:'DF'},{name:'Hidemasa Morita',pos:'MF'},
      {name:'Ao Tanaka',pos:'MF'},{name:'Ayase Ueda',pos:'FW'},{name:'Junya Ito',pos:'FW'},
      {name:'Yuto Nagatomo',pos:'DF'},{name:'Ko Itakura',pos:'DF'},{name:'Keito Nakamura',pos:'FW'}
    ]},
  { name:'Uruguay', flag:'🇺🇾', group:'H', rank:18, conf:'CONMEBOL', coach:'Marcelo Bielsa',
    players:[
      {name:'Federico Valverde',pos:'MF',star:true},{name:'Darwin Núñez',pos:'FW',star:true},{name:'Rodrigo Bentancur',pos:'MF'},
      {name:'Luis Suárez',pos:'FW',star:true},{name:'Ronald Araújo',pos:'DF',star:true},{name:'José María Giménez',pos:'DF'},
      {name:'Matías Olivera',pos:'DF'},{name:'Sergio Rochet',pos:'GK'},{name:'Nicolás De La Cruz',pos:'MF'},
      {name:'Maxi Gómez',pos:'FW'},{name:'Facundo Torres',pos:'FW'},{name:'Giorgian de Arrascaeta',pos:'MF'},
      {name:'Diego Godín',pos:'DF'},{name:'Sebastián Coates',pos:'DF'},{name:'Edinson Cavani',pos:'FW'}
    ]},
  { name:'Switzerland', flag:'🇨🇭', group:'B', rank:19, conf:'UEFA', coach:'Murat Yakin',
    players:[
      {name:'Xherdan Shaqiri',pos:'FW',star:true},{name:'Granit Xhaka',pos:'MF',star:true},{name:'Haris Seferović',pos:'FW'},
      {name:'Yann Sommer',pos:'GK'},{name:'Manuel Akanji',pos:'DF',star:true},{name:'Nico Elvedi',pos:'DF'},
      {name:'Denis Zakaria',pos:'MF'},{name:'Remo Freuler',pos:'MF'},{name:'Breel Embolo',pos:'FW'},
      {name:'Ricardo Rodríguez',pos:'DF'},{name:'Fabian Schär',pos:'DF'},{name:'Ruben Vargas',pos:'FW'},
      {name:'Steven Zuber',pos:'MF'},{name:'Noah Okafor',pos:'FW',star:true},{name:'Michel Aebischer',pos:'MF'}
    ]},
  { name:'Senegal', flag:'🇸🇳', group:'I', rank:20, conf:'CAF', coach:'Aliou Cissé',
    players:[
      {name:'Sadio Mané',pos:'FW',star:true},{name:'Kalidou Koulibaly',pos:'DF',star:true},{name:'Edouard Mendy',pos:'GK',star:true},
      {name:'Idrissa Gueye',pos:'MF'},{name:'Cheikhou Kouyaté',pos:'MF'},{name:'Ismaila Sarr',pos:'FW',star:true},
      {name:'Bamba Dieng',pos:'FW'},{name:'Nampalys Mendy',pos:'MF'},{name:'Bouna Sarr',pos:'DF'},
      {name:'Abdou Diallo',pos:'DF'},{name:'Saliou Ciss',pos:'DF'},{name:'Famara Diédhiou',pos:'FW'},
      {name:'Nicolas Jackson',pos:'FW',star:true},{name:'Pape Gueye',pos:'MF'},{name:'Iliman Ndiaye',pos:'FW'}
    ]},
  { name:'Iran', flag:'🇮🇷', group:'G', rank:22, conf:'AFC', coach:'Amir Ghalenoei',
    players:[
      {name:'Sardar Azmoun',pos:'FW',star:true},{name:'Mehdi Taremi',pos:'FW',star:true},{name:'Alireza Jahanbakhsh',pos:'FW'},
      {name:'Ali Gholizadeh',pos:'FW'},{name:'Saeid Ezatolahi',pos:'MF'},{name:'Ehsan Hajsafi',pos:'DF'},
      {name:'Milad Mohammadi',pos:'DF'},{name:'Majid Hosseini',pos:'DF'},{name:'Alireza Beiranvand',pos:'GK'},
      {name:'Morteza Pouraliganji',pos:'DF'},{name:'Ahmad Nourollahi',pos:'MF'},{name:'Saman Ghoddos',pos:'FW'},
      {name:'Karim Ansarifard',pos:'FW'},{name:'Omid Ebrahimi',pos:'MF'},{name:'Ali Karimi',pos:'MF'}
    ]},
  { name:'South Korea', flag:'🇰🇷', group:'A', rank:23, conf:'AFC', coach:'Hong Myung-bo',
    players:[
      {name:'Son Heung-min',pos:'FW',star:true},{name:'Lee Kang-in',pos:'MF',star:true},{name:'Kim Min-jae',pos:'DF',star:true},
      {name:'Hwang Hee-chan',pos:'FW'},{name:'Hwang In-beom',pos:'MF'},{name:'Jung Woo-young',pos:'MF'},
      {name:'Kim Young-gwon',pos:'DF'},{name:'Kim Jin-su',pos:'DF'},{name:'Jo Hyeon-woo',pos:'GK'},
      {name:'Oh Hyeon-gyu',pos:'FW'},{name:'Cho Gue-sung',pos:'FW'},{name:'Kwon Chang-hoon',pos:'MF'},
      {name:'Kim Tae-hwan',pos:'DF'},{name:'Kim Jin-ya',pos:'DF'},{name:'Paik Seung-ho',pos:'MF'}
    ]},
  { name:'Australia', flag:'🇦🇺', group:'D', rank:24, conf:'AFC', coach:'Tony Popovic',
    players:[
      {name:'Mathew Ryan',pos:'GK',star:true},{name:'Mitch Langerak',pos:'GK'},{name:'Harry Souttar',pos:'DF'},
      {name:'Aziz Behich',pos:'DF'},{name:'Aaron Mooy',pos:'MF',star:true},{name:'Jackson Irvine',pos:'MF'},
      {name:'Riley McGree',pos:'MF'},{name:'Martin Boyle',pos:'FW'},{name:'Awer Mabil',pos:'FW'},
      {name:'Mathew Leckie',pos:'FW',star:true},{name:'Craig Goodwin',pos:'FW'},{name:'Miloš Degenek',pos:'DF'},
      {name:'Garang Kuol',pos:'FW',star:true},{name:'Mitchell Duke',pos:'FW'},{name:'Ajdin Hrustic',pos:'MF'}
    ]},
  { name:'Qatar', flag:'🇶🇦', group:'B', rank:37, conf:'AFC', coach:'Julen Lopetegui',
    players:[
      {name:'Akram Afif',pos:'FW',star:true},{name:'Almoez Ali',pos:'FW',star:true},{name:'Hassan Al-Haydos',pos:'MF',star:true},
      {name:'Meshaal Barsham',pos:'GK'},{name:'Boualem Khoukhi',pos:'DF'},{name:'Pedro Miguel',pos:'DF'},
      {name:'Karim Boudiaf',pos:'MF'},{name:'Abdulaziz Hatem',pos:'MF'},{name:'Homam Ahmed',pos:'DF'},
      {name:'Assim Madibo',pos:'MF'},{name:'Mohammed Muntari',pos:'FW'},{name:'Ayoub Al Aloui',pos:'DF'},
      {name:'Jassem Jaber',pos:'MF'},{name:'Mahmoud Abunada',pos:'GK'},{name:'Yusuf Abdurisag',pos:'FW'}
    ]},
  { name:'Haiti', flag:'🇭🇹', group:'C', rank:85, conf:'CONCACAF', coach:'Sébastien Migné',
    players:[
      {name:'Duckens Nazon',pos:'FW',star:true},{name:'Wilson Isidor',pos:'FW',star:true},{name:'Johnny Placide',pos:'GK',star:true},
      {name:'Frantzdy Pierrot',pos:'FW'},{name:'Ricardo Adé',pos:'DF'},{name:'Carlens Arcus',pos:'DF'},
      {name:'Steward Céus',pos:'MF'},{name:'Danley Jean Jacques',pos:'MF'},{name:'Jems Geffrard',pos:'DF'},
      {name:'Bryan Alceus',pos:'MF'},{name:'Cardochelin Guerrier',pos:'DF'},{name:'Berscy Fabien',pos:'MF'},
      {name:'Kim Jaggy',pos:'DF'},{name:'Ruben Providence',pos:'FW'},{name:'Josué Duverger',pos:'GK'}
    ]},
  { name:'Tunisia', flag:'🇹🇳', group:'F', rank:35, conf:'CAF', coach:'Jalel Kadri',
    players:[
      {name:'Youssef Msakni',pos:'FW',star:true},{name:'Wahbi Khazri',pos:'FW'},{name:'Fakhreddine Ben Youssef',pos:'FW'},
      {name:'Ellyes Skhiri',pos:'MF',star:true},{name:'Aïssa Laïdouni',pos:'MF'},{name:'Ghilane Chaâlali',pos:'MF'},
      {name:'Dylan Bronn',pos:'DF'},{name:'Montassar Talbi',pos:'DF'},{name:'Ali Abdi',pos:'DF'},
      {name:'Mohamed Ali Ben Romdhane',pos:'MF'},{name:'Saad Bguir',pos:'FW'},{name:'Aymen Dahmen',pos:'GK'},
      {name:'Wajdi Kechrida',pos:'DF'},{name:'Hamza Mathlouthi',pos:'DF'},{name:'Seifeddine Jaziri',pos:'FW'}
    ]},
  { name:'Algeria', flag:'🇩🇿', group:'J', rank:37, conf:'CAF', coach:'Djamel Belmadi',
    players:[
      {name:'Riyad Mahrez',pos:'FW',star:true},{name:'Islam Slimani',pos:'FW'},{name:'Youcef Atal',pos:'DF'},
      {name:'Sofiane Feghouli',pos:'MF',star:true},{name:'Ismail Bennacer',pos:'MF',star:true},{name:'Ramy Bensebaïni',pos:'DF'},
      {name:'Amar Benítez',pos:'MF'},{name:'Haris Belkebla',pos:'MF'},{name:'Samir Nasri',pos:'MF'},
      {name:'Baghdad Bounedjah',pos:'FW'},{name:'Andy Delort',pos:'FW'},{name:'Raïs M\'bolhi',pos:'GK'},
      {name:'Mohamed Fares',pos:'DF'},{name:'Djamel Benlamri',pos:'DF'},{name:'Yassine Benzia',pos:'FW'}
    ]},
  { name:'Paraguay', flag:'🇵🇾', group:'D', rank:65, conf:'CONMEBOL', coach:'Gustavo Alfaro',
    players:[
      {name:'Julio Enciso',pos:'FW',star:true},{name:'Miguel Almirón',pos:'MF',star:true},{name:'Gustavo Gómez',pos:'DF',star:true},
      {name:'Diego Gómez',pos:'MF',star:true},{name:'Antonio Sanabria',pos:'FW'},{name:'Fabián Balbuena',pos:'DF'},
      {name:'Ángel Cardozo Lucena',pos:'DF'},{name:'Omar Alderete',pos:'DF'},{name:'Mathías Villasanti',pos:'MF'},
      {name:'Ramón Sosa',pos:'FW'},{name:'Gustavo Velázquez',pos:'FW'},{name:'Roberto Fernández',pos:'GK'},
      {name:'Damián Bobadilla',pos:'MF'},{name:'Junior Alonso',pos:'DF'},{name:'Andrés Cubas',pos:'MF'}
    ]},
  { name:'Egypt', flag:'🇪🇬', group:'G', rank:36, conf:'CAF', coach:'Rui Vitória',
    players:[
      {name:'Mohamed Salah',pos:'FW',star:true},{name:'Mohamed El Shenawy',pos:'GK',star:true},{name:'Ahmed Hegazi',pos:'DF'},
      {name:'Mahmoud Trezeguet',pos:'FW'},{name:'Omar Marmoush',pos:'FW',star:true},{name:'Ahmed Sayed',pos:'MF'},
      {name:'Amr Warda',pos:'FW'},{name:'Karim El Delawy',pos:'MF'},{name:'Ahmed Elmohamady',pos:'DF'},
      {name:'Zizo',pos:'MF'},{name:'Mostafa Mohamed',pos:'FW'},{name:'Ayman Ashraf',pos:'DF'},
      {name:'Mahmoud Hassan',pos:'FW'},{name:'Tarek Hamed',pos:'MF'},{name:'Ali Gabr',pos:'DF'}
    ]},
  { name:'Ghana', flag:'🇬🇭', group:'L', rank:65, conf:'CAF', coach:'Otto Addo',
    players:[
      {name:'Jordan Ayew',pos:'FW',star:true},{name:'André Ayew',pos:'FW'},{name:'Thomas Partey',pos:'MF',star:true},
      {name:'Mohammed Salisu',pos:'DF'},{name:'Daniel Amartey',pos:'DF'},{name:'Kudus Mohammed',pos:'MF',star:true},
      {name:'Alexander Djiku',pos:'DF'},{name:'Lawrence Ati-Zigi',pos:'GK'},{name:'Ibrahim Sulemana',pos:'FW'},
      {name:'Antoine Semenyo',pos:'FW'},{name:'Joel Fameyeh',pos:'FW'},{name:'Elisha Owusu',pos:'MF'},
      {name:'Daniel Korkor',pos:'FW'},{name:'Inaki Williams',pos:'FW',star:true},{name:'Nico Williams',pos:'FW'}
    ]},
  { name:'Türkiye', flag:'🇹🇷', group:'D', rank:29, conf:'UEFA', coach:'Vincenzo Montella',
    players:[
      {name:'Hakan Çalhanoğlu',pos:'MF',star:true},{name:'Arda Güler',pos:'MF',star:true},{name:'Kenan Yıldız',pos:'FW',star:true},
      {name:'Uğurcan Çakır',pos:'GK'},{name:'Merih Demiral',pos:'DF'},{name:'Zeki Çelik',pos:'DF'},
      {name:'Kerem Aktürkoğlu',pos:'FW'},{name:'Orkun Kökçü',pos:'MF',star:true},{name:'Salih Özcan',pos:'MF'},
      {name:'Barış Alper Yılmaz',pos:'FW'},{name:'İsmail Yüksek',pos:'MF'},{name:'Ferdi Kadıoğlu',pos:'DF'},
      {name:'Abdülkerim Bardakçı',pos:'DF'},{name:'Okay Yokuşlu',pos:'MF'},{name:'Cengiz Ünder',pos:'FW'}
    ]},
  { name:'Ecuador', flag:'🇪🇨', group:'E', rank:44, conf:'CONMEBOL', coach:'Sebastián Beccacece',
    players:[
      {name:'Enner Valencia',pos:'FW',star:true},{name:'Moisés Caicedo',pos:'MF',star:true},{name:'Gonzalo Plata',pos:'FW'},
      {name:'Ángel Mena',pos:'FW'},{name:'Felipe Caicedo',pos:'FW'},{name:'Carlos Gruezo',pos:'MF'},
      {name:'Piero Hincapié',pos:'DF',star:true},{name:'Félix Torres',pos:'DF'},{name:'Erick Ferigra',pos:'GK'},
      {name:'Jeremy Sarmiento',pos:'FW'},{name:'Romario Ibarra',pos:'FW'},{name:'Byron Castillo',pos:'DF'},
      {name:'José Cifuentes',pos:'MF'},{name:'Djorkaeff Reasco',pos:'FW'},{name:'Kendry Páez',pos:'MF',star:true}
    ]},
  { name:'Canada', flag:'🇨🇦', group:'B', rank:40, conf:'CONCACAF', coach:'Jesse Marsch',
    players:[
      {name:'Alphonso Davies',pos:'DF',star:true},{name:'Jonathan David',pos:'FW',star:true},{name:'Cyle Larin',pos:'FW'},
      {name:'Tajon Buchanan',pos:'FW',star:true},{name:'Stephen Eustáquio',pos:'MF'},{name:'Junior Hoilett',pos:'FW'},
      {name:'Atiba Hutchinson',pos:'MF'},{name:'Richie Laryea',pos:'DF'},{name:'Kamal Miller',pos:'DF'},
      {name:'Steven Vitória',pos:'DF'},{name:'Milan Borjan',pos:'GK'},{name:'Alistair Johnston',pos:'DF'},
      {name:'Liam Millar',pos:'FW'},{name:'Mark-Anthony Kaye',pos:'MF'},{name:'Ismaël Koné',pos:'MF',star:true}
    ]},
  { name:'Ivory Coast', flag:'🇨🇮', group:'E', rank:59, conf:'CAF', coach:'Emerse Faé',
    players:[
      {name:'Sébastien Haller',pos:'FW',star:true},{name:'Nicolas Pépé',pos:'FW'},{name:'Wilfried Zaha',pos:'FW',star:true},
      {name:'Jean Michaël Seri',pos:'MF'},{name:'Franck Kessié',pos:'MF',star:true},{name:'Eric Bailly',pos:'DF'},
      {name:'Serge Aurier',pos:'DF'},{name:'Willy Boly',pos:'DF'},{name:'Badra Ali Sangaré',pos:'GK'},
      {name:'Joël Asoro',pos:'FW'},{name:'Christian Kouamé',pos:'FW'},{name:'Max-Alain Gradel',pos:'FW'},
      {name:'Odilon Kossounou',pos:'DF'},{name:'Ibrahim Sangaré',pos:'MF',star:true},{name:'Mory Koné',pos:'GK'}
    ]},
  { name:'South Africa', flag:'🇿🇦', group:'A', rank:60, conf:'CAF', coach:'Hugo Broos',
    players:[
      {name:'Percy Tau',pos:'FW',star:true},{name:'Ronwen Williams',pos:'GK',star:true},{name:'Thulani Serero',pos:'MF'},
      {name:'Bafana Mbenga',pos:'DF'},{name:'Keagan Dolly',pos:'FW'},{name:'Themba Zwane',pos:'MF',star:true},
      {name:'Luther Singh',pos:'FW'},{name:'Sifiso Hlanti',pos:'DF'},{name:'Rushine de Reuck',pos:'DF'},
      {name:'Ethan Brooks',pos:'MF'},{name:'Evidence Makgopa',pos:'FW'},{name:'Phathutshedzo Nange',pos:'MF'},
      {name:'Elias Mokwana',pos:'FW'},{name:'Ramahlwe Mphahlele',pos:'DF'},{name:'Grant Kekana',pos:'DF'}
    ]},
  { name:'Saudi Arabia', flag:'🇸🇦', group:'H', rank:56, conf:'AFC', coach:'Roberto Mancini',
    players:[
      {name:'Salem Al-Dawsari',pos:'FW',star:true},{name:'Firas Al-Buraikan',pos:'FW'},{name:'Mohammed Al-Owais',pos:'GK',star:true},
      {name:'Ali Al-Bulaihi',pos:'DF'},{name:'Yasser Al-Shahrani',pos:'DF'},{name:'Abdullah Otayf',pos:'MF'},
      {name:'Saleh Al-Shehri',pos:'FW'},{name:'Saud Abdulhamid',pos:'DF'},{name:'Hattan Bahebri',pos:'MF'},
      {name:'Mohammed Kanno',pos:'MF',star:true},{name:'Ali Lajami',pos:'DF'},{name:'Nawaf Al-Abid',pos:'FW'},
      {name:'Riyadh Sharahili',pos:'MF'},{name:'Fahad Al-Muwallad',pos:'FW'},{name:'Mohamed Al-Buraik',pos:'DF'}
    ]},
  { name:'Curaçao', flag:'🇨🇼', group:'E', rank:89, conf:'CONCACAF', coach:'Dick Advocaat',
    players:[
      {name:'Leandro Bacuna',pos:'MF',star:true},{name:'Eloy Room',pos:'GK',star:true},{name:'Jurgen Locadia',pos:'FW',star:true},
      {name:'Gervane Kastaneer',pos:'FW'},{name:'Kenji Gorre',pos:'MF'},{name:'Tahith Chong',pos:'FW'},
      {name:'Jurien Gaari',pos:'DF'},{name:'Roshon van Eijma',pos:'DF'},{name:'Jearl Margaritha',pos:'FW'},
      {name:'Juninho Bacuna',pos:'MF'},{name:'Cuco Martina',pos:'DF'},{name:'Elson Hooi',pos:'DF'},
      {name:'Charlison Benschop',pos:'FW'},{name:'Godfried Roemeratoe',pos:'MF'},{name:'Vurnon Anita',pos:'MF'}
    ]},
  { name:'Austria', flag:'🇦🇹', group:'J', rank:25, conf:'UEFA', coach:'Ralf Rangnick',
    players:[
      {name:'David Alaba',pos:'DF',star:true},{name:'Marcel Sabitzer',pos:'MF',star:true},{name:'Marko Arnautović',pos:'FW',star:true},
      {name:'Christoph Baumgartner',pos:'MF'},{name:'Konrad Laimer',pos:'MF',star:true},{name:'Florian Grillitsch',pos:'MF'},
      {name:'Stefan Lainer',pos:'DF'},{name:'Maximilian Wöber',pos:'DF'},{name:'Patrick Pentz',pos:'GK'},
      {name:'Michael Gregoritsch',pos:'FW'},{name:'Patrick Wimmer',pos:'MF'},{name:'Louis Schaub',pos:'MF'},
      {name:'Philipp Lienhart',pos:'DF'},{name:'Andreas Weimann',pos:'FW'},{name:'Romano Schmid',pos:'MF'}
    ]},
  { name:'Scotland', flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', group:'C', rank:30, conf:'UEFA', coach:'Steve Clarke',
    players:[
      {name:'Andrew Robertson',pos:'DF',star:true},{name:'Scott McTominay',pos:'MF',star:true},{name:'Kieran Tierney',pos:'DF'},
      {name:'Lyndon Dykes',pos:'FW'},{name:'Ryan Fraser',pos:'FW'},{name:'Ryan Jack',pos:'MF'},
      {name:'John McGinn',pos:'MF',star:true},{name:'Stuart Armstrong',pos:'MF'},{name:'Craig Gordon',pos:'GK'},
      {name:'Ryan Christie',pos:'MF'},{name:'Billy Gilmour',pos:'MF',star:true},{name:'Grant Hanley',pos:'DF'},
      {name:'Callum McGregor',pos:'MF'},{name:'Nathan Patterson',pos:'DF'},{name:'Che Adams',pos:'FW'}
    ]},
  { name:'Sweden', flag:'🇸🇪', group:'F', rank:25, conf:'UEFA', coach:'Graham Potter',
    players:[
      {name:'Viktor Gyökeres',pos:'FW',star:true},{name:'Alexander Isak',pos:'FW',star:true},{name:'Victor Lindelöf',pos:'DF',star:true},
      {name:'Anthony Elanga',pos:'FW'},{name:'Lucas Bergvall',pos:'MF',star:true},{name:'Daniel Svensson',pos:'DF'},
      {name:'Robin Olsen',pos:'GK'},{name:'Jesper Karlström',pos:'MF'},{name:'Gustaf Nilsson',pos:'FW'},
      {name:'Isak Hien',pos:'DF'},{name:'Kristoffer Olsson',pos:'MF'},{name:'Emil Krafth',pos:'DF'},
      {name:'Yasin Ayari',pos:'MF',star:true},{name:'Jonathan Levi',pos:'DF'},{name:'Adam Lundqvist',pos:'DF'}
    ]},
  { name:'Uzbekistan', flag:'🇺🇿', group:'K', rank:62, conf:'AFC', coach:'Srecko Katanec',
    players:[
      {name:'Eldor Shomurodov',pos:'FW',star:true},{name:'Jaloliddin Masharipov',pos:'MF',star:true},{name:'Otabek Shukurov',pos:'GK'},
      {name:'Dostonbek Khamdamov',pos:'MF'},{name:'Abbosbek Fayzullaev',pos:'MF',star:true},{name:'Otabek Dzhaparov',pos:'MF'},
      {name:'Sanjar Tursunov',pos:'FW'},{name:'Khojimat Erkinov',pos:'DF'},{name:'Laziz Azimov',pos:'FW'},
      {name:'Ilhom Zaynutdinov',pos:'MF'},{name:'Azizbek Turgunboev',pos:'DF'},{name:'Shamsiddin Latipov',pos:'DF'},
      {name:'Sherzod Nishonov',pos:'GK'},{name:'Bunyod Hamidov',pos:'DF'},{name:'Jamshid Iskanderov',pos:'FW'}
    ]},
  { name:'Cape Verde', flag:'🇨🇻', group:'H', rank:73, conf:'CAF', coach:'Pedro "Bubista" Brito',
    players:[
      {name:'Ryan Mendes',pos:'FW',star:true},{name:'Dailon Livramento',pos:'FW',star:true},{name:'Vozinha',pos:'GK',star:true},
      {name:'Jamiro Monteiro',pos:'MF'},{name:'Kenny Rocha Santos',pos:'MF'},{name:'Garry Rodrigues',pos:'FW'},
      {name:'Steven Fortes',pos:'DF'},{name:'Diney Borges',pos:'DF'},{name:'Stopira',pos:'DF'},
      {name:'Patrick Andrade',pos:'MF'},{name:'Bryan Teixeira',pos:'FW'},{name:'Kevin Jamir Monteiro',pos:'MF'},
      {name:'Marco Soares',pos:'GK'},{name:'Jefté Betú',pos:'DF'},{name:'Willy Semedo',pos:'MF'}
    ]},
  { name:'Iraq', flag:'🇮🇶', group:'I', rank:68, conf:'AFC', coach:'Graham Arnold',
    players:[
      {name:'Aymen Hussein',pos:'FW',star:true},{name:'Ali Al-Hamadi',pos:'FW',star:true},{name:'Zidane Iqbal',pos:'MF',star:true},
      {name:'Ali Jasim',pos:'FW'},{name:'Jalal Hassan',pos:'GK'},{name:'Rebin Sulaka',pos:'DF'},
      {name:'Amjad Attwan',pos:'DF'},{name:'Hussein Ali',pos:'DF'},{name:'Amir Al-Ammari',pos:'MF'},
      {name:'Frans Putros',pos:'MF'},{name:'Manaf Younis',pos:'MF'},{name:'Mohanad Ali',pos:'FW'},
      {name:'Merchas Doski',pos:'DF'},{name:'Ahmed Yasin',pos:'MF'},{name:'Fahad Talib',pos:'GK'}
    ]},
  { name:'Panama', flag:'🇵🇦', group:'L', rank:72, conf:'CONCACAF', coach:'Thomas Christiansen',
    players:[
      {name:'Rolando Blackburn',pos:'FW',star:true},{name:'Ismael Díaz',pos:'FW',star:true},{name:'José Fajardo',pos:'FW'},
      {name:'Adalberto Carrasquilla',pos:'MF',star:true},{name:'Anibal Godoy',pos:'MF'},{name:'Alfredo Stephens',pos:'DF'},
      {name:'Eric Davis',pos:'DF'},{name:'César Blackman',pos:'DF'},{name:'Orlando Mosquera',pos:'GK'},
      {name:'Édgar Bárcenas',pos:'FW'},{name:'Amir Murillo',pos:'DF'},{name:'Luis Mejía',pos:'GK'},
      {name:'Moisés Montero',pos:'MF'},{name:'Abdiel Arroyo',pos:'FW'},{name:'Éric Davis',pos:'DF'}
    ]},
  { name:'Norway', flag:'🇳🇴', group:'I', rank:35, conf:'UEFA', coach:'Ståle Solbakken',
    players:[
      {name:'Erling Haaland',pos:'FW',star:true},{name:'Martin Ødegaard',pos:'MF',star:true},{name:'Antonio Nusa',pos:'FW',star:true},
      {name:'Alexander Sørloth',pos:'FW'},{name:'Sander Berge',pos:'MF'},{name:'Patrick Berg',pos:'MF'},
      {name:'Kristoffer Ajer',pos:'DF'},{name:'Leo Østigård',pos:'DF'},{name:'Julian Ryerson',pos:'DF'},
      {name:'Jens Petter Hauge',pos:'FW'},{name:'Oscar Bobb',pos:'MF',star:true},{name:'Andreas Schjelderup',pos:'FW'},
      {name:'Fredrik Aursnes',pos:'MF'},{name:'David Møller Wolfe',pos:'DF'},{name:'Ørjan Nyland',pos:'GK'}
    ]},
  { name:'Jordan', flag:'🇯🇴', group:'J', rank:75, conf:'AFC', coach:'Jamal Sellami',
    players:[
      {name:'Musa Al-Taamari',pos:'FW',star:true},{name:'Ali Olwan',pos:'FW',star:true},{name:'Ehsan Haddad',pos:'DF'},
      {name:'Yazan Al-Naimat',pos:'FW'},{name:'Mohammad Abu Zrayq',pos:'DF'},{name:'Noor Rawabdeh',pos:'MF'},
      {name:'Salem Al-Ajalin',pos:'MF'},{name:'Baha Abdelrahman',pos:'DF'},{name:'Yazan Al-Arab',pos:'GK'},
      {name:'Anas Bani Yaseen',pos:'MF'},{name:'Yousef Al-Rawashdeh',pos:'FW'},{name:'Mahmoud Al-Mardi',pos:'DF'},
      {name:'Ihsan Haddad',pos:'MF'},{name:'Rajaei Ayed',pos:'MF'},{name:'Amer Shafi',pos:'GK'}
    ]},
  { name:'New Zealand', flag:'🇳🇿', group:'G', rank:95, conf:'OFC', coach:'Darren Bazeley',
    players:[
      {name:'Chris Wood',pos:'FW',star:true},{name:'Kosta Barbarouses',pos:'FW'},{name:'Liberato Cacace',pos:'DF',star:true},
      {name:'Joe Bell',pos:'MF'},{name:'Marco Rojas',pos:'FW'},{name:'Ryan Thomas',pos:'MF'},
      {name:'Clayton Lewis',pos:'MF'},{name:'Tommy Smith',pos:'DF'},{name:'Winston Reid',pos:'DF'},
      {name:'Elijah Just',pos:'MF'},{name:'Callan Elliot',pos:'MF'},{name:'Filippo Giovagnoli',pos:'MF'},
      {name:'Stefan Marinovic',pos:'GK'},{name:'Michael Boxall',pos:'DF'},{name:'Sarpreet Singh',pos:'MF',star:true}
    ]},
  { name:'DR Congo', flag:'🇨🇩', group:'K', rank:57, conf:'CAF', coach:'Sébastien Desabre',
    players:[
      {name:'Yoane Wissa',pos:'FW',star:true},{name:'Fiston Mayele',pos:'FW',star:true},{name:'Chancel Mbemba',pos:'DF',star:true},
      {name:'Lionel Mpasi',pos:'GK',star:true},{name:'Brian Cipenga',pos:'MF'},{name:'Silas Katompa Mvumpa',pos:'FW'},
      {name:'Meschack Elia',pos:'MF'},{name:'Arthur Masuaku',pos:'DF'},{name:'Gaël Kakuta',pos:'MF'},
      {name:'Jackson Muleka',pos:'FW'},{name:'Dylan Batubinsika',pos:'DF'},{name:'Samuel Moutoussamy',pos:'MF'},
      {name:'Timothy Fayulu',pos:'DF'},{name:'Elie Kroupi',pos:'FW'},{name:'Ley Matampi',pos:'GK'}
    ]}
];

const ANALYSIS_TOP20 = [
  { name:'Argentina', flag:'🇦🇷', rank:1, worldRank:1,
    strengths:['World champions (2022)','Messi leading the attack','Deep squad depth','Winning mentality','Strong midfield'],
    strengthsZh:['2022世界盃冠軍','梅西領銜攻線','球員深度充裕','冠軍心態','強大中場'],
    weaknesses:['Aging key players','Post-Messi era uncertainty','Defensive injuries risk','Pressure of defending title'],
    weaknessesZh:['核心球員老化','後梅西時代隱憂','防線傷病風險','衛冕壓力巨大'],
    ace:{name:'Lionel Messi',pos:'FW',club:'Inter Miami'},
    winProb:22, odds:'3.5x' },
  { name:'France', flag:'🇫🇷', rank:2, worldRank:2,
    strengths:['Generation talent','"Les Bleus" quality depth','Mbappé world class','Strong defensive unit','Youth + experience mix'],
    strengthsZh:['天才輩出的一代','藍衣軍陣容深度','Mbappé世界頂級','防守體系穩固','老將新秀兼具'],
    weaknesses:['Internal squad conflicts','Deschamps system rigidity','Overreliance on Mbappé','Pressure after 2022 final loss'],
    weaknessesZh:['內部矛盾隱患','德尚戰術偏保守','過度依賴Mbappé','2022決賽敗陣壓力'],
    ace:{name:'Kylian Mbappé',pos:'FW',club:'Real Madrid'},
    winProb:18, odds:'4.0x' },
  { name:'Spain', flag:'🇪🇸', rank:3, worldRank:3,
    strengths:['EURO 2024 Champions','Tiki-taka evolved','Lamine Yamal phenomenon','Strongest midfield','Tactical sophistication'],
    strengthsZh:['2024歐洲盃冠軍','Tiki-taka進化版','Lamine Yamal橫空出世','最強中場組合','戰術極為精細'],
    weaknesses:['Striker reliance on Morata','Defensive experience gaps','Pressure from success','Inconsistency away from home'],
    weaknessesZh:['前鋒依賴Morata','防線經驗不足','成功帶來的壓力','客場表現不穩定'],
    ace:{name:'Lamine Yamal',pos:'FW',club:'Barcelona'},
    winProb:16, odds:'4.5x' },
  { name:'Belgium', flag:'🇧🇪', rank:4, worldRank:3,
    strengths:['De Bruyne genius','World class GK Courtois','Physical team','Big game experience','European quality'],
    strengthsZh:['De Bruyne天才指揮','Courtois世界頂級門將','身體對抗強悍','大賽經驗豐富','歐洲頂尖品質'],
    weaknesses:['Golden generation aging','Over-reliance on De Bruyne','Tactical rigidity','Post-peak window'],
    weaknessesZh:['黃金一代全面老化','過度依賴De Bruyne','戰術彈性不足','已過巔峰期'],
    ace:{name:'Kevin De Bruyne',pos:'MF',club:'Manchester City'},
    winProb:6, odds:'10x' },
  { name:'Brazil', flag:'🇧🇷', rank:5, worldRank:5,
    strengths:['Vinícius world-class form','Attacking flair','Squad depth','Tournament pedigree','Star power'],
    strengthsZh:['Vinícius Jr.狀態驚人','攻勢足球天賦','陣容深度充裕','世盃傳統豪門','明星雲集'],
    weaknesses:['No World Cup since 2002','Defensive vulnerability','Squad harmony issues','Pressure of expectation'],
    weaknessesZh:['2002年後未奪冠','防守脆弱','球員和諧度疑問','期望值帶來的壓力'],
    ace:{name:'Vinícius Jr.',pos:'FW',club:'Real Madrid'},
    winProb:12, odds:'5.5x' },
  { name:'Portugal', flag:'🇵🇹', rank:6, worldRank:6,
    strengths:['Bruno Fernandes creativity','Strong attacking options','Ronaldo still delivering','Defensive solidity','Experience in tournaments'],
    strengthsZh:['Bruno Fernandes創造力','攻擊選擇多元','C羅仍在貢獻','防守陣線穩固','大賽經驗豐富'],
    weaknesses:['Tactical disputes','Over-reliance on veterans','Ronaldo age concern','Mid-tournament inconsistency'],
    weaknessesZh:['戰術意見分歧','過度依賴老將','C羅年齡隱憂','大賽中期狀態不穩'],
    ace:{name:'Bruno Fernandes',pos:'MF',club:'Manchester United'},
    winProb:8, odds:'7x' },
  { name:'Netherlands', flag:'🇳🇱', rank:7, worldRank:7,
    strengths:['Van Dijk leadership','Gakpo + Depay attack','Strong defensive core','Koeman tactical clarity','Ajax-bred passing'],
    strengthsZh:['Van Dijk領袖氣質','Gakpo+Depay攻線','防守核心穩固','科曼戰術清晰','阿賈克斯傳承傳控'],
    weaknesses:['Final step struggles','Frenkie de Jong fitness','Psychological barrier in semis','Squad depth behind starters'],
    weaknessesZh:['最後一步屢屢功虧','De Jong健康隱患','半決賽心理障礙','首發後備落差大'],
    ace:{name:'Virgil van Dijk',pos:'DF',club:'Liverpool'},
    winProb:7, odds:'8x' },
  { name:'Colombia', flag:'🇨🇴', rank:8, worldRank:9,
    strengths:['CONMEBOL 2024 Copa América winners','Luis Díaz in top form','James Rodríguez maestro','Young talent blend','Strong team spirit'],
    strengthsZh:['2024美洲盃冠軍','Luis Díaz狀態絕佳','James Rodríguez大師指揮','老少配合默契','強烈團隊精神'],
    weaknesses:['Experience in deep knockout rounds','Defensive set pieces','Goalkeeper inconsistency','Midfield depth'],
    weaknessesZh:['深度淘汰賽經驗不足','防守定位球漏洞','門將發揮不穩定','中場深度有限'],
    ace:{name:'James Rodríguez',pos:'MF',club:'Rayo Vallecano'},
    winProb:5, odds:'12x' },
  { name:'Switzerland', flag:'🇨🇭', rank:9, worldRank:19,
    strengths:['Disciplined tactical structure','Sommer world-class GK','Deep, well-organized squad','Major tournament consistency','Xhaka leadership in midfield'],
    strengthsZh:['戰術紀律嚴明','Sommer頂尖門將','陣容深度均衡','大賽穩定性高','Xhaka中場領袖氣質'],
    weaknesses:['Lack of a true world-class striker','Limited attacking creativity','Squad ceiling below elite favorites','Physicality against bigger nations'],
    weaknessesZh:['缺乏世界級前鋒','進攻創造力有限','陣容上限不及頂級強隊','對抗大隊身體對抗吃虧'],
    ace:{name:'Granit Xhaka',pos:'MF',club:'Bayer Leverkusen'},
    winProb:4, odds:'14x' },
  { name:'Croatia', flag:'🇭🇷', rank:10, worldRank:10,
    strengths:['Modrić elite leadership','World Cup finalists experience','Strong midfield','Overachieving tradition','Gvardiol emerging star'],
    strengthsZh:['Modrić精英領袖','世盃決賽豐富經驗','強大中場組合','超水平發揮傳統','Gvardiol新星崛起'],
    weaknesses:['Aging core especially Modrić','Small nation depth','Post-golden generation','Physical demands on veterans'],
    weaknessesZh:['核心老化尤以Modrić為甚','小國陣容深度有限','後黃金一代時期','老將體能負擔沉重'],
    ace:{name:'Luka Modrić',pos:'MF',club:'Real Madrid'},
    winProb:3, odds:'18x' },
  { name:'Iran', flag:'🇮🇷', rank:11, worldRank:22,
    strengths:['Taremi clinical finishing','Physical, well-drilled defense','Set-piece threat','Strong team spirit','Experienced core'],
    strengthsZh:['Taremi門前終結效率高','防守身體對抗紮實','定位球威脅不小','團隊凝聚力強','核心陣容經驗豐富'],
    weaknesses:['Limited creativity in build-up','Overreliance on Taremi and Azmoun','Squad depth behind starters','Adjusting to fast transitions'],
    weaknessesZh:['出球創造力有限','過度依賴Taremi與Azmoun','替補深度不足','應對快速轉換能力欠佳'],
    ace:{name:'Mehdi Taremi',pos:'FW',club:'Inter Milan'},
    winProb:3, odds:'20x' },
  { name:'Germany', flag:'🇩🇪', rank:12, worldRank:12,
    strengths:['Musiala + Wirtz star pair','Tactical innovation under Nagelsmann','Tournament experience','Host nation momentum similar','Physical intensity'],
    strengthsZh:['Musiala+Wirtz明星組合','納格爾斯曼戰術創新','大賽傳統深厚','主場之利效應','身體對抗強度高'],
    weaknesses:['2018-2022 World Cup failures','Mental resilience questions','Defensive injuries','Pressure from media'],
    weaknessesZh:['2018-2022世盃慘敗陰影','心理韌性受質疑','防線傷病困擾','媒體壓力沉重'],
    ace:{name:'Florian Wirtz',pos:'MF',club:'Bayern Munich'},
    winProb:5, odds:'11x' },
  { name:'USA', flag:'🇺🇸', rank:13, worldRank:13,
    strengths:['Home advantage','Bellingham-era MLS + Europe talent','Athletic intensity','Pulisic leadership','Young hungry squad'],
    strengthsZh:['主場優勢明顯','旅歐球員新生代','運動強度極高','Pulisic領導力','年輕且飢渴的陣容'],
    weaknesses:['Inexperience at elite level','Goalkeeper uncertainty','Depth at center forward','Tactical sophistication gap'],
    weaknessesZh:['精英賽場經驗不足','門將人選不確定','中鋒深度欠缺','戰術精細度差距'],
    ace:{name:'Christian Pulisic',pos:'FW',club:'AC Milan'},
    winProb:4, odds:'15x' },
  { name:'Morocco', flag:'🇲🇦', rank:14, worldRank:14,
    strengths:['2022 semi-finalists','Defensive wall','Hakimi wing dominance','Strong team spirit','Amrabat engine'],
    strengthsZh:['2022世盃四強創歷史','防線銅牆鐵壁','Hakimi右路統治','強烈團隊精神','Amrabat中場發動機'],
    weaknesses:['Attacking consistency','Away from home form','Reliance on counter attack','Ziyech injury risk'],
    weaknessesZh:['進攻穩定性不足','客場表現偏差','過度依賴反擊','Ziyech傷病風險'],
    ace:{name:'Achraf Hakimi',pos:'DF',club:'Paris Saint-Germain'},
    winProb:3, odds:'20x' },
  { name:'Mexico', flag:'🇲🇽', rank:15, worldRank:14,
    strengths:['Home nation pressure/advantage','Lozano pace','Experience in CONCACAF','Passionate support','Jiménez leader'],
    strengthsZh:['主場壓力轉化動力','Lozano速度利器','CONCACAF傳統強隊','狂熱球迷支持','Jiménez領隊核心'],
    weaknesses:['Round of 16 curse','Aging squad','Tactical predictability','Underperformance historically in WC'],
    weaknessesZh:['連六屆16強魔咒','陣容年齡偏大','戰術太可預測','世盃大賽成績欠佳'],
    ace:{name:'Santiago Giménez',pos:'FW',club:'AC Milan'},
    winProb:2, odds:'25x' },
  { name:'Japan', flag:'🇯🇵', rank:16, worldRank:17,
    strengths:['Tactical discipline','Giant-killing record (2022)','Mitoma / Kamada quality','Defensive organization','High work rate'],
    strengthsZh:['戰術紀律嚴明','2022屠殺巨人先例','Mitoma/Kamada高品質','防守組織嚴密','工作效率極高'],
    weaknesses:['Small physical stature','Lack of international proven finisher','Struggles in extra time','Inconsistency vs. weaker teams'],
    weaknessesZh:['球員身材較小','缺乏國際頂級射手','加時賽表現差','對陣弱隊時起伏'],
    ace:{name:'Kaoru Mitoma',pos:'FW',club:'Brighton'},
    winProb:2, odds:'25x' },
  { name:'Uruguay', flag:'🇺🇾', rank:17, worldRank:18,
    strengths:['Valverde masterclass','Darwin Núñez power','Araujo defensive rock','Bielsa intensity','South American grit'],
    strengthsZh:['Valverde大師表現','Darwin Núñez衝擊力','Araujo防守基石','比爾薩強度足球','南美頑強鬥志'],
    weaknesses:['Suárez age dependency','Volatile discipline','Small squad depth','Physical intensity sustainability'],
    weaknessesZh:['蘇亞雷斯高齡依賴','情緒化紀律問題','陣容深度偏薄','高強度能否持續'],
    ace:{name:'Federico Valverde',pos:'MF',club:'Real Madrid'},
    winProb:3, odds:'20x' },
  { name:'Senegal', flag:'🇸🇳', rank:18, worldRank:20,
    strengths:['Africa Cup Champions','Mané leadership','Koulibaly defensive excellence','Physical dominance','Mendy goalkeeping'],
    strengthsZh:['非洲盃冠軍','Mané領袖地位','Koulibaly防守卓越','身體強悍佔優','Mendy門將穩定'],
    weaknesses:['Post-Mané reliance','Limited creative midfield','European experience gaps','Under-pressure performance'],
    weaknessesZh:['過度依賴Mané','創造性中場有限','歐洲大賽經驗欠缺','高壓下表現不穩'],
    ace:{name:'Sadio Mané',pos:'FW',club:'Al-Nassr'},
    winProb:2, odds:'28x' },
  { name:'South Korea', flag:'🇰🇷', rank:19, worldRank:23,
    strengths:['Son Heung-min elite talent','Kim Min-jae world class DF','Lee Kang-in creativity','Tactical flexibility','Asian champions'],
    strengthsZh:['孫興慜頂尖天才','金珉哉世界級後衛','李康仁創意十足','戰術彈性強','亞洲冠軍'],
    weaknesses:['Lack of depth behind Son','Midfield physicality','Pressure after 2002 expectations','Long flights in group play'],
    weaknessesZh:['孫興慜之外深度不足','中場身體對抗弱','2002年光輝帶來壓力','分組賽長途飛行疲勞'],
    ace:{name:'Son Heung-min',pos:'FW',club:'Tottenham Hotspur'},
    winProb:2, odds:'28x' },
  { name:'Austria', flag:'🇦🇹', rank:20, worldRank:25,
    strengths:['Alaba versatility','Rangnick high press','Arnautovic experience','Physical intensity','Sabitzer quality'],
    strengthsZh:['Alaba多功能全能','朗尼克高位壓迫','Arnautović豐富經驗','身體對抗強度高','Sabitzer中場品質'],
    weaknesses:['Lack of top tournament pedigree','Alaba injury risk','Striker depth','Defensive transition gaps'],
    weaknessesZh:['缺乏頂尖大賽底蘊','Alaba傷病風險','前鋒深度不足','防守轉換漏洞'],
    ace:{name:'David Alaba',pos:'DF',club:'Real Madrid'},
    winProb:1, odds:'35x' }
];

const WC_HISTORY = [
  {year:1974,host:'West Germany',champion:'West Germany',runner:'Netherlands',third:'Poland',goals:97},
  {year:1978,host:'Argentina',champion:'Argentina',runner:'Netherlands',third:'Brazil',goals:102},
  {year:1982,host:'Spain',champion:'Italy',runner:'West Germany',third:'Poland',goals:146},
  {year:1986,host:'Mexico',champion:'Argentina',runner:'West Germany',third:'France',goals:132},
  {year:1990,host:'Italy',champion:'West Germany',runner:'Argentina',third:'Italy',goals:115},
  {year:1994,host:'USA',champion:'Brazil',runner:'Italy',third:'Sweden',goals:141},
  {year:1998,host:'France',champion:'France',runner:'Brazil',third:'Croatia',goals:171},
  {year:2002,host:'Korea/Japan',champion:'Brazil',runner:'Germany',third:'Turkey',goals:161},
  {year:2006,host:'Germany',champion:'Italy',runner:'France',third:'Germany',goals:147},
  {year:2010,host:'South Africa',champion:'Spain',runner:'Netherlands',third:'Germany',goals:145},
  {year:2014,host:'Brazil',champion:'Germany',runner:'Argentina',third:'Netherlands',goals:171},
  {year:2018,host:'Russia',champion:'France',runner:'Croatia',third:'Belgium',goals:169},
  {year:2022,host:'Qatar',champion:'Argentina',runner:'France',third:'Croatia',goals:172}
];

const CHAMPION_STATS = {
  Brazil: {wins:5, titles:[1958,1962,1970,1994,2002]},
  Germany: {wins:4, titles:[1954,1974,1990,2014]},
  Italy: {wins:4, titles:[1934,1938,1982,2006]},
  Argentina: {wins:3, titles:[1978,1986,2022]},
  France: {wins:2, titles:[1998,2018]},
  Uruguay: {wins:2, titles:[1930,1950]},
  England: {wins:1, titles:[1966]},
  Spain: {wins:1, titles:[2010]}
};
