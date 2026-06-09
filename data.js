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
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 12', time:'21:00', home:'Australia', away:'Türkiye', homeFlag:'🇦🇺', awayFlag:'🇹🇷', venue:'BC Place', group:'D' },
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
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 15', time:'21:00', home:'Austria', away:'Jordan', homeFlag:'🇦🇹', awayFlag:'🇯🇴', venue:"Levi's Stadium", group:'J' },
  // Group I
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 16', time:'12:00', home:'France', away:'Senegal', homeFlag:'🇫🇷', awayFlag:'🇸🇳', venue:'MetLife Stadium', group:'I', featured:true },
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 16', time:'15:00', home:'Iraq', away:'Norway', homeFlag:'🇮🇶', awayFlag:'🇳🇴', venue:'Gillette Stadium', group:'I' },
  // Group J (cont.)
  { phase:'Group Stage', round:'Matchday 1', date:'Jun 16', time:'18:00', home:'Argentina', away:'Algeria', homeFlag:'🇦🇷', awayFlag:'🇩🇿', venue:'Arrowhead Stadium', group:'J', featured:true },
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
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 18', time:'21:00', home:'Türkiye', away:'Paraguay', homeFlag:'🇹🇷', awayFlag:'🇵🇾', venue:"Levi's Stadium", group:'D' },
  // Group D (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 19', time:'12:00', home:'USA', away:'Australia', homeFlag:'🇺🇸', awayFlag:'🇦🇺', venue:'Lumen Field', group:'D' },
  // Group C
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 19', time:'15:00', home:'Scotland', away:'Morocco', homeFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', awayFlag:'🇲🇦', venue:'Gillette Stadium', group:'C' },
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 19', time:'18:00', home:'Brazil', away:'Haiti', homeFlag:'🇧🇷', awayFlag:'🇭🇹', venue:'Lincoln Financial Field', group:'C' },
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 19', time:'21:00', home:'Tunisia', away:'Japan', homeFlag:'🇹🇳', awayFlag:'🇯🇵', venue:'Estadio BBVA', group:'F' },
  // Group F (cont.)
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 20', time:'10:00', home:'Netherlands', away:'Sweden', homeFlag:'🇳🇱', awayFlag:'🇸🇪', venue:'NRG Stadium', group:'F' },
  // Group E
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 20', time:'13:00', home:'Germany', away:'Ivory Coast', homeFlag:'🇩🇪', awayFlag:'🇨🇮', venue:'BMO Field', group:'E' },
  { phase:'Group Stage', round:'Matchday 2', date:'Jun 20', time:'17:00', home:'Ecuador', away:'Curaçao', homeFlag:'🇪🇨', awayFlag:'🇨🇼', venue:'Arrowhead Stadium', group:'E' },
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
  { phase:'Round of 32', round:'R32', date:'Jun 28', time:'12:00', home:'1A', away:'3D/E/F', homeFlag:'🏆', awayFlag:'🥉', venue:'SoFi Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 29', time:'10:00', home:'1B', away:'3G/H/I', homeFlag:'🏆', awayFlag:'🥉', venue:'NRG Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 29', time:'13:30', home:'1C', away:'3A/B/L', homeFlag:'🏆', awayFlag:'🥉', venue:'Gillette Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 29', time:'18:00', home:'2A', away:'2C', homeFlag:'🥈', awayFlag:'🥈', venue:'Estadio BBVA', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 30', time:'10:00', home:'1D', away:'3J/K', homeFlag:'🏆', awayFlag:'🥉', venue:'AT&T Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 30', time:'14:00', home:'2B', away:'2D', homeFlag:'🥈', awayFlag:'🥈', venue:'MetLife Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jun 30', time:'18:00', home:'1E', away:'3A/C', homeFlag:'🏆', awayFlag:'🥉', venue:'Estadio Azteca', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 1', time:'09:00', home:'2E', away:'2F', homeFlag:'🥈', awayFlag:'🥈', venue:'Mercedes-Benz Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 1', time:'13:00', home:'1F', away:'3B/J', homeFlag:'🏆', awayFlag:'🥉', venue:'Lumen Field', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 1', time:'17:00', home:'2G', away:'2H', homeFlag:'🥈', awayFlag:'🥈', venue:"Levi's Stadium", group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 2', time:'12:00', home:'1G', away:'3C/D', homeFlag:'🏆', awayFlag:'🥉', venue:'SoFi Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 2', time:'16:00', home:'2I', away:'2J', homeFlag:'🥈', awayFlag:'🥈', venue:'BMO Field', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 2', time:'20:00', home:'1H', away:'3K/L', homeFlag:'🏆', awayFlag:'🥉', venue:'BC Place', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 3', time:'11:00', home:'2K', away:'2L', homeFlag:'🥈', awayFlag:'🥈', venue:'AT&T Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 3', time:'15:00', home:'1I', away:'3E/F', homeFlag:'🏆', awayFlag:'🥉', venue:'Hard Rock Stadium', group:'' },
  { phase:'Round of 32', round:'R32', date:'Jul 3', time:'18:30', home:'1J/K/L', away:'1L', homeFlag:'🏆', awayFlag:'🏆', venue:'Arrowhead Stadium', group:'' },
  // ── ROUND OF 16 ──────────────────────────────────────────────────────
  { phase:'Round of 16', round:'R16', date:'Jul 4', time:'10:00', home:'W R32-1', away:'W R32-2', homeFlag:'🏆', awayFlag:'🏆', venue:'NRG Stadium', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 4', time:'14:00', home:'W R32-3', away:'W R32-4', homeFlag:'🏆', awayFlag:'🏆', venue:'Lincoln Financial Field', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 5', time:'13:00', home:'W R32-5', away:'W R32-6', homeFlag:'🏆', awayFlag:'🏆', venue:'MetLife Stadium', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 5', time:'17:00', home:'W R32-7', away:'W R32-8', homeFlag:'🏆', awayFlag:'🏆', venue:'Estadio Azteca', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 6', time:'12:00', home:'W R32-9', away:'W R32-10', homeFlag:'🏆', awayFlag:'🏆', venue:'AT&T Stadium', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 6', time:'17:00', home:'W R32-11', away:'W R32-12', homeFlag:'🏆', awayFlag:'🏆', venue:'Lumen Field', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 7', time:'09:00', home:'W R32-13', away:'W R32-14', homeFlag:'🏆', awayFlag:'🏆', venue:'Mercedes-Benz Stadium', group:'' },
  { phase:'Round of 16', round:'R16', date:'Jul 7', time:'13:00', home:'W R32-15', away:'W R32-16', homeFlag:'🏆', awayFlag:'🏆', venue:'BC Place', group:'' },
  // ── QUARTERFINALS ────────────────────────────────────────────────────
  { phase:'Quarterfinals', round:'QF', date:'Jul 9', time:'13:00', home:'W R16-1', away:'W R16-2', homeFlag:'🏆', awayFlag:'🏆', venue:'Gillette Stadium', group:'' },
  { phase:'Quarterfinals', round:'QF', date:'Jul 10', time:'12:00', home:'W R16-3', away:'W R16-4', homeFlag:'🏆', awayFlag:'🏆', venue:'SoFi Stadium', group:'' },
  { phase:'Quarterfinals', round:'QF', date:'Jul 11', time:'14:00', home:'W R16-5', away:'W R16-6', homeFlag:'🏆', awayFlag:'🏆', venue:'Hard Rock Stadium', group:'' },
  { phase:'Quarterfinals', round:'QF', date:'Jul 11', time:'18:00', home:'W R16-7', away:'W R16-8', homeFlag:'🏆', awayFlag:'🏆', venue:'Arrowhead Stadium', group:'' },
  // ── SEMIFINALS ───────────────────────────────────────────────────────
  { phase:'Semifinals', round:'SF', date:'Jul 14', time:'12:00', home:'W QF-1', away:'W QF-2', homeFlag:'🏆', awayFlag:'🏆', venue:'AT&T Stadium', group:'' },
  { phase:'Semifinals', round:'SF', date:'Jul 15', time:'12:00', home:'W QF-3', away:'W QF-4', homeFlag:'🏆', awayFlag:'🏆', venue:'Mercedes-Benz Stadium', group:'' },
  // ── 3RD PLACE ────────────────────────────────────────────────────────
  { phase:'3rd Place Play-off', round:'3rd', date:'Jul 18', time:'14:00', home:'L SF-1', away:'L SF-2', homeFlag:'🥉', awayFlag:'🥉', venue:'Hard Rock Stadium', group:'' },
  // ── FINAL ────────────────────────────────────────────────────────────
  { phase:'⭐ FINAL ⭐', round:'Final', date:'Jul 19', time:'12:00', home:'W SF-1', away:'W SF-2', homeFlag:'🏆', awayFlag:'🏆', venue:'MetLife Stadium', group:'', featured:true }
];

const TEAMS_DATA = [
  { name:'Argentina', flag:'🇦🇷', group:'D', rank:1, conf:'CONMEBOL', coach:'Lionel Scaloni',
    players:[
      {name:'Lionel Messi',pos:'FW',star:true},{name:'Ángel Di María',pos:'FW'},{name:'Julián Álvarez',pos:'FW',star:true},
      {name:'Lautaro Martínez',pos:'FW',star:true},{name:'Rodrigo De Paul',pos:'MF'},{name:'Alexis Mac Allister',pos:'MF'},
      {name:'Enzo Fernández',pos:'MF',star:true},{name:'Leandro Paredes',pos:'MF'},{name:'Nicolás Otamendi',pos:'DF'},
      {name:'Cristian Romero',pos:'DF'},{name:'Lisandro Martínez',pos:'DF'},{name:'Nahuel Molina',pos:'DF'},
      {name:'Emiliano Martínez',pos:'GK',star:true},{name:'Germán Pezzella',pos:'DF'},{name:'Thiago Almada',pos:'MF'}
    ]},
  { name:'France', flag:'🇫🇷', group:'D', rank:2, conf:'UEFA', coach:'Didier Deschamps',
    players:[
      {name:'Kylian Mbappé',pos:'FW',star:true},{name:'Antoine Griezmann',pos:'FW',star:true},{name:'Ousmane Dembélé',pos:'FW'},
      {name:'Marcus Thuram',pos:'FW'},{name:'Randal Kolo Muani',pos:'FW'},{name:'Eduardo Camavinga',pos:'MF'},
      {name:'Aurélien Tchouaméni',pos:'MF',star:true},{name:'Adrien Rabiot',pos:'MF'},{name:'Mattéo Guendouzi',pos:'MF'},
      {name:'Jules Koundé',pos:'DF'},{name:'Raphaël Varane',pos:'DF'},{name:'Dayot Upamecano',pos:'DF'},
      {name:'Theo Hernandez',pos:'DF'},{name:'Mike Maignan',pos:'GK',star:true},{name:'N\'Golo Kanté',pos:'MF'}
    ]},
  { name:'Spain', flag:'🇪🇸', group:'F', rank:3, conf:'UEFA', coach:'Luis de la Fuente',
    players:[
      {name:'Pedri',pos:'MF',star:true},{name:'Gavi',pos:'MF',star:true},{name:'Lamine Yamal',pos:'FW',star:true},
      {name:'Álvaro Morata',pos:'FW'},{name:'Dani Olmo',pos:'MF'},{name:'Fabián Ruiz',pos:'MF'},
      {name:'Rodri',pos:'MF',star:true},{name:'Jordi Alba',pos:'DF'},{name:'Aymeric Laporte',pos:'DF'},
      {name:'Dani Carvajal',pos:'DF'},{name:'Pau Cubarsí',pos:'DF'},{name:'Unai Simón',pos:'GK'},
      {name:'Ferran Torres',pos:'FW'},{name:'Nico Williams',pos:'FW',star:true},{name:'Mikel Merino',pos:'MF'}
    ]},
  { name:'England', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', group:'B', rank:5, conf:'UEFA', coach:'Gareth Southgate',
    players:[
      {name:'Jude Bellingham',pos:'MF',star:true},{name:'Harry Kane',pos:'FW',star:true},{name:'Phil Foden',pos:'MF',star:true},
      {name:'Bukayo Saka',pos:'FW',star:true},{name:'Marcus Rashford',pos:'FW'},{name:'Declan Rice',pos:'MF'},
      {name:'Jordan Henderson',pos:'MF'},{name:'Kyle Walker',pos:'DF'},{name:'John Stones',pos:'DF'},
      {name:'Harry Maguire',pos:'DF'},{name:'Luke Shaw',pos:'DF'},{name:'Jordan Pickford',pos:'GK'},
      {name:'Trent Alexander-Arnold',pos:'DF'},{name:'Cole Palmer',pos:'MF'},{name:'Ollie Watkins',pos:'FW'}
    ]},
  { name:'Brazil', flag:'🇧🇷', group:'E', rank:5, conf:'CONMEBOL', coach:'Dorival Júnior',
    players:[
      {name:'Vinícius Jr.',pos:'FW',star:true},{name:'Rodrygo',pos:'FW',star:true},{name:'Neymar Jr.',pos:'FW',star:true},
      {name:'Raphinha',pos:'FW'},{name:'Endrick',pos:'FW'},{name:'Bruno Guimarães',pos:'MF',star:true},
      {name:'Lucas Paquetá',pos:'MF'},{name:'Casemiro',pos:'MF'},{name:'Éder Militão',pos:'DF'},
      {name:'Marquinhos',pos:'DF'},{name:'Danilo',pos:'DF'},{name:'Renan Lodi',pos:'DF'},
      {name:'Alisson Becker',pos:'GK',star:true},{name:'Antony',pos:'FW'},{name:'Douglas Luiz',pos:'MF'}
    ]},
  { name:'Portugal', flag:'🇵🇹', group:'E', rank:6, conf:'UEFA', coach:'Roberto Martínez',
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
  { name:'Italy', flag:'🇮🇹', group:'H', rank:9, conf:'UEFA', coach:'Luciano Spalletti',
    players:[
      {name:'Gianluigi Donnarumma',pos:'GK',star:true},{name:'Leonardo Bonucci',pos:'DF'},{name:'Giorgio Chiellini',pos:'DF'},
      {name:'Federico Chiesa',pos:'FW',star:true},{name:'Marco Verratti',pos:'MF'},{name:'Jorginho',pos:'MF'},
      {name:'Nicolo Barella',pos:'MF',star:true},{name:'Giacomo Raspadori',pos:'FW'},{name:'Giovanni Di Lorenzo',pos:'DF'},
      {name:'Alessandro Bastoni',pos:'DF'},{name:'Sandro Tonali',pos:'MF'},{name:'Federico Dimarco',pos:'DF'},
      {name:'Gianluca Scamacca',pos:'FW'},{name:'Lorenzo Pellegrini',pos:'MF'},{name:'Matteo Politano',pos:'FW'}
    ]},
  { name:'Colombia', flag:'🇨🇴', group:'G', rank:9, conf:'CONMEBOL', coach:'Néstor Lorenzo',
    players:[
      {name:'James Rodríguez',pos:'MF',star:true},{name:'Luis Díaz',pos:'FW',star:true},{name:'Falcao García',pos:'FW'},
      {name:'Radamel Falcao',pos:'FW'},{name:'Cuadrado',pos:'MF'},{name:'Davinson Sánchez',pos:'DF'},
      {name:'Yerry Mina',pos:'DF'},{name:'David Ospina',pos:'GK'},{name:'Richard Ríos',pos:'MF',star:true},
      {name:'John Córdoba',pos:'FW'},{name:'Jhon Durán',pos:'FW'},{name:'Jorge Carrascal',pos:'MF'},
      {name:'Daniel Muñoz',pos:'DF'},{name:'Jefferson Lerma',pos:'MF'},{name:'Camilo Vargas',pos:'GK'}
    ]},
  { name:'Croatia', flag:'🇭🇷', group:'C', rank:10, conf:'UEFA', coach:'Zlatko Dalić',
    players:[
      {name:'Luka Modrić',pos:'MF',star:true},{name:'Ivan Perišić',pos:'FW'},{name:'Andrej Kramarić',pos:'FW',star:true},
      {name:'Mateo Kovačić',pos:'MF',star:true},{name:'Marcelo Brozović',pos:'MF'},{name:'Joško Gvardiol',pos:'DF',star:true},
      {name:'Dejan Lovren',pos:'DF'},{name:'Dominik Livaković',pos:'GK',star:true},{name:'Šime Vrsaljko',pos:'DF'},
      {name:'Ante Budimir',pos:'FW'},{name:'Mario Pašalić',pos:'MF'},{name:'Bruno Petković',pos:'FW'},
      {name:'Borna Ćorić',pos:'MF'},{name:'Josip Stanišić',pos:'DF'},{name:'Nikola Vlašić',pos:'MF'}
    ]},
  { name:'Denmark', flag:'🇩🇰', group:'J', rank:11, conf:'UEFA', coach:'Kasper Hjulmand',
    players:[
      {name:'Christian Eriksen',pos:'MF',star:true},{name:'Kasper Dolberg',pos:'FW'},{name:'Martin Braithwaite',pos:'FW'},
      {name:'Pierre-Emile Höjbjerg',pos:'MF',star:true},{name:'Simon Kjær',pos:'DF'},{name:'Kasper Schmeichel',pos:'GK'},
      {name:'Andreas Christensen',pos:'DF'},{name:'Joachim Andersen',pos:'DF'},{name:'Rasmus Hojlund',pos:'FW',star:true},
      {name:'Mikkel Damsgaard',pos:'MF'},{name:'Yussuf Poulsen',pos:'FW'},{name:'Viktor Claesson',pos:'MF'},
      {name:'Thomas Delaney',pos:'MF'},{name:'Brentford Maehle',pos:'DF'},{name:'Alexander Bah',pos:'DF'}
    ]},
  { name:'Germany', flag:'🇩🇪', group:'I', rank:12, conf:'UEFA', coach:'Julian Nagelsmann',
    players:[
      {name:'Florian Wirtz',pos:'MF',star:true},{name:'Jamal Musiala',pos:'MF',star:true},{name:'Thomas Müller',pos:'FW'},
      {name:'Toni Kroos',pos:'MF',star:true},{name:'Joshua Kimmich',pos:'MF'},{name:'Antonio Rüdiger',pos:'DF'},
      {name:'Kai Havertz',pos:'FW',star:true},{name:'Leroy Sané',pos:'FW'},{name:'Serge Gnabry',pos:'FW'},
      {name:'Manuel Neuer',pos:'GK',star:true},{name:'Niklas Süle',pos:'DF'},{name:'Leon Goretzka',pos:'MF'},
      {name:'David Raum',pos:'DF'},{name:'İlkay Gündoğan',pos:'MF'},{name:'Niclas Füllkrug',pos:'FW'}
    ]},
  { name:'USA', flag:'🇺🇸', group:'B', rank:13, conf:'CONCACAF', coach:'Mauricio Pochettino',
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
  { name:'Switzerland', flag:'🇨🇭', group:'I', rank:19, conf:'UEFA', coach:'Murat Yakin',
    players:[
      {name:'Xherdan Shaqiri',pos:'FW',star:true},{name:'Granit Xhaka',pos:'MF',star:true},{name:'Haris Seferović',pos:'FW'},
      {name:'Yann Sommer',pos:'GK'},{name:'Manuel Akanji',pos:'DF',star:true},{name:'Nico Elvedi',pos:'DF'},
      {name:'Denis Zakaria',pos:'MF'},{name:'Remo Freuler',pos:'MF'},{name:'Breel Embolo',pos:'FW'},
      {name:'Ricardo Rodríguez',pos:'DF'},{name:'Fabian Schär',pos:'DF'},{name:'Ruben Vargas',pos:'FW'},
      {name:'Steven Zuber',pos:'MF'},{name:'Noah Okafor',pos:'FW',star:true},{name:'Michel Aebischer',pos:'MF'}
    ]},
  { name:'Senegal', flag:'🇸🇳', group:'B', rank:20, conf:'CAF', coach:'Aliou Cissé',
    players:[
      {name:'Sadio Mané',pos:'FW',star:true},{name:'Kalidou Koulibaly',pos:'DF',star:true},{name:'Edouard Mendy',pos:'GK',star:true},
      {name:'Idrissa Gueye',pos:'MF'},{name:'Cheikhou Kouyaté',pos:'MF'},{name:'Ismaila Sarr',pos:'FW',star:true},
      {name:'Bamba Dieng',pos:'FW'},{name:'Nampalys Mendy',pos:'MF'},{name:'Bouna Sarr',pos:'DF'},
      {name:'Abdou Diallo',pos:'DF'},{name:'Saliou Ciss',pos:'DF'},{name:'Famara Diédhiou',pos:'FW'},
      {name:'Nicolas Jackson',pos:'FW',star:true},{name:'Pape Gueye',pos:'MF'},{name:'Iliman Ndiaye',pos:'FW'}
    ]},
  { name:'Iran', flag:'🇮🇷', group:'H', rank:22, conf:'AFC', coach:'Amir Ghalenoei',
    players:[
      {name:'Sardar Azmoun',pos:'FW',star:true},{name:'Mehdi Taremi',pos:'FW',star:true},{name:'Alireza Jahanbakhsh',pos:'FW'},
      {name:'Ali Gholizadeh',pos:'FW'},{name:'Saeid Ezatolahi',pos:'MF'},{name:'Ehsan Hajsafi',pos:'DF'},
      {name:'Milad Mohammadi',pos:'DF'},{name:'Majid Hosseini',pos:'DF'},{name:'Alireza Beiranvand',pos:'GK'},
      {name:'Morteza Pouraliganji',pos:'DF'},{name:'Ahmad Nourollahi',pos:'MF'},{name:'Saman Ghoddos',pos:'FW'},
      {name:'Karim Ansarifard',pos:'FW'},{name:'Omid Ebrahimi',pos:'MF'},{name:'Ali Karimi',pos:'MF'}
    ]},
  { name:'South Korea', flag:'🇰🇷', group:'G', rank:23, conf:'AFC', coach:'Hong Myung-bo',
    players:[
      {name:'Son Heung-min',pos:'FW',star:true},{name:'Lee Kang-in',pos:'MF',star:true},{name:'Kim Min-jae',pos:'DF',star:true},
      {name:'Hwang Hee-chan',pos:'FW'},{name:'Hwang In-beom',pos:'MF'},{name:'Jung Woo-young',pos:'MF'},
      {name:'Kim Young-gwon',pos:'DF'},{name:'Kim Jin-su',pos:'DF'},{name:'Jo Hyeon-woo',pos:'GK'},
      {name:'Oh Hyeon-gyu',pos:'FW'},{name:'Cho Gue-sung',pos:'FW'},{name:'Kwon Chang-hoon',pos:'MF'},
      {name:'Kim Tae-hwan',pos:'DF'},{name:'Kim Jin-ya',pos:'DF'},{name:'Paik Seung-ho',pos:'MF'}
    ]},
  { name:'Australia', flag:'🇦🇺', group:'I', rank:24, conf:'AFC', coach:'Tony Popovic',
    players:[
      {name:'Mathew Ryan',pos:'GK',star:true},{name:'Mitch Langerak',pos:'GK'},{name:'Harry Souttar',pos:'DF'},
      {name:'Aziz Behich',pos:'DF'},{name:'Aaron Mooy',pos:'MF',star:true},{name:'Jackson Irvine',pos:'MF'},
      {name:'Riley McGree',pos:'MF'},{name:'Martin Boyle',pos:'FW'},{name:'Awer Mabil',pos:'FW'},
      {name:'Mathew Leckie',pos:'FW',star:true},{name:'Craig Goodwin',pos:'FW'},{name:'Miloš Degenek',pos:'DF'},
      {name:'Garang Kuol',pos:'FW',star:true},{name:'Mitchell Duke',pos:'FW'},{name:'Ajdin Hrustic',pos:'MF'}
    ]},
  { name:'Poland', flag:'🇵🇱', group:'A', rank:22, conf:'UEFA', coach:'Michał Probierz',
    players:[
      {name:'Robert Lewandowski',pos:'FW',star:true},{name:'Piotr Zieliński',pos:'MF',star:true},{name:'Wojciech Szczęsny',pos:'GK',star:true},
      {name:'Kamil Grosicki',pos:'FW'},{name:'Arkadiusz Milik',pos:'FW'},{name:'Grzegorz Krychowiak',pos:'MF'},
      {name:'Bartosz Bereszyński',pos:'DF'},{name:'Kamil Glik',pos:'DF'},{name:'Matty Cash',pos:'DF'},
      {name:'Sebastian Szymański',pos:'MF'},{name:'Michał Skóraś',pos:'FW'},{name:'Paweł Dawidowicz',pos:'DF'},
      {name:'Przemysław Frankowski',pos:'MF'},{name:'Karol Świderski',pos:'FW'},{name:'Jakub Moder',pos:'MF'}
    ]},
  { name:'Nigeria', flag:'🇳🇬', group:'D', rank:34, conf:'CAF', coach:'Finidi George',
    players:[
      {name:'Victor Osimhen',pos:'FW',star:true},{name:'Asisat Oshoala',pos:'FW'},{name:'Wilfred Ndidi',pos:'MF',star:true},
      {name:'Alex Iwobi',pos:'MF'},{name:'Kelechi Iheanacho',pos:'FW'},{name:'Moses Simon',pos:'FW'},
      {name:'William Troost-Ekong',pos:'DF'},{name:'Innocent Bonke',pos:'MF'},{name:'Samuel Chukwueze',pos:'FW',star:true},
      {name:'Taiwo Awoniyi',pos:'FW'},{name:'Calvin Bassey',pos:'DF'},{name:'Zaidu Sanusi',pos:'DF'},
      {name:'Maduka Okoye',pos:'GK'},{name:'Frank Onyeka',pos:'MF'},{name:'Terem Moffi',pos:'FW'}
    ]},
  { name:'Tunisia', flag:'🇹🇳', group:'L', rank:35, conf:'CAF', coach:'Jalel Kadri',
    players:[
      {name:'Youssef Msakni',pos:'FW',star:true},{name:'Wahbi Khazri',pos:'FW'},{name:'Fakhreddine Ben Youssef',pos:'FW'},
      {name:'Ellyes Skhiri',pos:'MF',star:true},{name:'Aïssa Laïdouni',pos:'MF'},{name:'Ghilane Chaâlali',pos:'MF'},
      {name:'Dylan Bronn',pos:'DF'},{name:'Montassar Talbi',pos:'DF'},{name:'Ali Abdi',pos:'DF'},
      {name:'Mohamed Ali Ben Romdhane',pos:'MF'},{name:'Saad Bguir',pos:'FW'},{name:'Aymen Dahmen',pos:'GK'},
      {name:'Wajdi Kechrida',pos:'DF'},{name:'Hamza Mathlouthi',pos:'DF'},{name:'Seifeddine Jaziri',pos:'FW'}
    ]},
  { name:'Algeria', flag:'🇩🇿', group:'F', rank:37, conf:'CAF', coach:'Djamel Belmadi',
    players:[
      {name:'Riyad Mahrez',pos:'FW',star:true},{name:'Islam Slimani',pos:'FW'},{name:'Youcef Atal',pos:'DF'},
      {name:'Sofiane Feghouli',pos:'MF',star:true},{name:'Ismail Bennacer',pos:'MF',star:true},{name:'Ramy Bensebaïni',pos:'DF'},
      {name:'Amar Benítez',pos:'MF'},{name:'Haris Belkebla',pos:'MF'},{name:'Samir Nasri',pos:'MF'},
      {name:'Baghdad Bounedjah',pos:'FW'},{name:'Andy Delort',pos:'FW'},{name:'Raïs M\'bolhi',pos:'GK'},
      {name:'Mohamed Fares',pos:'DF'},{name:'Djamel Benlamri',pos:'DF'},{name:'Yassine Benzia',pos:'FW'}
    ]},
  { name:'Serbia', flag:'🇷🇸', group:'J', rank:33, conf:'UEFA', coach:'Dragan Stojković',
    players:[
      {name:'Aleksandar Mitrović',pos:'FW',star:true},{name:'Dušan Vlahović',pos:'FW',star:true},{name:'Sergej Milinković-Savić',pos:'MF',star:true},
      {name:'Nemanja Gudelj',pos:'MF'},{name:'Dušan Tadić',pos:'MF'},{name:'Nikola Milenković',pos:'DF'},
      {name:'Stefan Mitrović',pos:'DF'},{name:'Predrag Rajković',pos:'GK'},{name:'Filip Kostić',pos:'MF'},
      {name:'Luka Jović',pos:'FW'},{name:'Sasa Lukić',pos:'MF'},{name:'Ivan Ilić',pos:'MF'},
      {name:'Stefan Blazić',pos:'GK'},{name:'Andrija Živković',pos:'FW'},{name:'Milan Gajić',pos:'DF'}
    ]},
  { name:'Egypt', flag:'🇪🇬', group:'J', rank:36, conf:'CAF', coach:'Rui Vitória',
    players:[
      {name:'Mohamed Salah',pos:'FW',star:true},{name:'Mohamed El Shenawy',pos:'GK',star:true},{name:'Ahmed Hegazi',pos:'DF'},
      {name:'Mahmoud Trezeguet',pos:'FW'},{name:'Omar Marmoush',pos:'FW',star:true},{name:'Ahmed Sayed',pos:'MF'},
      {name:'Amr Warda',pos:'FW'},{name:'Karim El Delawy',pos:'MF'},{name:'Ahmed Elmohamady',pos:'DF'},
      {name:'Zizo',pos:'MF'},{name:'Mostafa Mohamed',pos:'FW'},{name:'Ayman Ashraf',pos:'DF'},
      {name:'Mahmoud Hassan',pos:'FW'},{name:'Tarek Hamed',pos:'MF'},{name:'Ali Gabr',pos:'DF'}
    ]},
  { name:'Ghana', flag:'🇬🇭', group:'H', rank:65, conf:'CAF', coach:'Otto Addo',
    players:[
      {name:'Jordan Ayew',pos:'FW',star:true},{name:'André Ayew',pos:'FW'},{name:'Thomas Partey',pos:'MF',star:true},
      {name:'Mohammed Salisu',pos:'DF'},{name:'Daniel Amartey',pos:'DF'},{name:'Kudus Mohammed',pos:'MF',star:true},
      {name:'Alexander Djiku',pos:'DF'},{name:'Lawrence Ati-Zigi',pos:'GK'},{name:'Ibrahim Sulemana',pos:'FW'},
      {name:'Antoine Semenyo',pos:'FW'},{name:'Joel Fameyeh',pos:'FW'},{name:'Elisha Owusu',pos:'MF'},
      {name:'Daniel Korkor',pos:'FW'},{name:'Inaki Williams',pos:'FW',star:true},{name:'Nico Williams',pos:'FW'}
    ]},
  { name:'Cameroon', flag:'🇨🇲', group:'E', rank:43, conf:'CAF', coach:'Rigobert Song',
    players:[
      {name:'Vincent Aboubakar',pos:'FW',star:true},{name:'Eric Maxim Choupo-Moting',pos:'FW',star:true},{name:'Bryan Mbeumo',pos:'FW',star:true},
      {name:'Andre Onana',pos:'GK',star:true},{name:'Jean-Charles Castelletto',pos:'DF'},{name:'Collins Fai',pos:'DF'},
      {name:'Nicolas Nkoulou',pos:'DF'},{name:'Pierre Kunde',pos:'MF'},{name:'Martin Hongla',pos:'MF'},
      {name:'Jérôme Ngom Mbekeli',pos:'MF'},{name:'Georges-Kévin Nkoudou',pos:'FW'},{name:'Christian Bassogog',pos:'FW'},
      {name:'Tolo Nouhou',pos:'DF'},{name:'Olivier Ntcham',pos:'MF'},{name:'Stéphane Bahoken',pos:'FW'}
    ]},
  { name:'Ecuador', flag:'🇪🇨', group:'D', rank:44, conf:'CONMEBOL', coach:'Sebastián Beccacece',
    players:[
      {name:'Enner Valencia',pos:'FW',star:true},{name:'Moisés Caicedo',pos:'MF',star:true},{name:'Gonzalo Plata',pos:'FW'},
      {name:'Ángel Mena',pos:'FW'},{name:'Felipe Caicedo',pos:'FW'},{name:'Carlos Gruezo',pos:'MF'},
      {name:'Piero Hincapié',pos:'DF',star:true},{name:'Félix Torres',pos:'DF'},{name:'Erick Ferigra',pos:'GK'},
      {name:'Jeremy Sarmiento',pos:'FW'},{name:'Romario Ibarra',pos:'FW'},{name:'Byron Castillo',pos:'DF'},
      {name:'José Cifuentes',pos:'MF'},{name:'Djorkaeff Reasco',pos:'FW'},{name:'Kendry Páez',pos:'MF',star:true}
    ]},
  { name:'Canada', flag:'🇨🇦', group:'C', rank:40, conf:'CONCACAF', coach:'Jesse Marsch',
    players:[
      {name:'Alphonso Davies',pos:'DF',star:true},{name:'Jonathan David',pos:'FW',star:true},{name:'Cyle Larin',pos:'FW'},
      {name:'Tajon Buchanan',pos:'FW',star:true},{name:'Stephen Eustáquio',pos:'MF'},{name:'Junior Hoilett',pos:'FW'},
      {name:'Atiba Hutchinson',pos:'MF'},{name:'Richie Laryea',pos:'DF'},{name:'Kamal Miller',pos:'DF'},
      {name:'Steven Vitória',pos:'DF'},{name:'Milan Borjan',pos:'GK'},{name:'Alistair Johnston',pos:'DF'},
      {name:'Liam Millar',pos:'FW'},{name:'Mark-Anthony Kaye',pos:'MF'},{name:'Ismaël Koné',pos:'MF',star:true}
    ]},
  { name:'Ivory Coast', flag:'🇨🇮', group:'I', rank:59, conf:'CAF', coach:'Emerse Faé',
    players:[
      {name:'Sébastien Haller',pos:'FW',star:true},{name:'Nicolas Pépé',pos:'FW'},{name:'Wilfried Zaha',pos:'FW',star:true},
      {name:'Jean Michaël Seri',pos:'MF'},{name:'Franck Kessié',pos:'MF',star:true},{name:'Eric Bailly',pos:'DF'},
      {name:'Serge Aurier',pos:'DF'},{name:'Willy Boly',pos:'DF'},{name:'Badra Ali Sangaré',pos:'GK'},
      {name:'Joël Asoro',pos:'FW'},{name:'Christian Kouamé',pos:'FW'},{name:'Max-Alain Gradel',pos:'FW'},
      {name:'Odilon Kossounou',pos:'DF'},{name:'Ibrahim Sangaré',pos:'MF',star:true},{name:'Mory Koné',pos:'GK'}
    ]},
  { name:'South Africa', flag:'🇿🇦', group:'G', rank:60, conf:'CAF', coach:'Hugo Broos',
    players:[
      {name:'Percy Tau',pos:'FW',star:true},{name:'Ronwen Williams',pos:'GK',star:true},{name:'Thulani Serero',pos:'MF'},
      {name:'Bafana Mbenga',pos:'DF'},{name:'Keagan Dolly',pos:'FW'},{name:'Themba Zwane',pos:'MF',star:true},
      {name:'Luther Singh',pos:'FW'},{name:'Sifiso Hlanti',pos:'DF'},{name:'Rushine de Reuck',pos:'DF'},
      {name:'Ethan Brooks',pos:'MF'},{name:'Evidence Makgopa',pos:'FW'},{name:'Phathutshedzo Nange',pos:'MF'},
      {name:'Elias Mokwana',pos:'FW'},{name:'Ramahlwe Mphahlele',pos:'DF'},{name:'Grant Kekana',pos:'DF'}
    ]},
  { name:'Saudi Arabia', flag:'🇸🇦', group:'A', rank:56, conf:'AFC', coach:'Roberto Mancini',
    players:[
      {name:'Salem Al-Dawsari',pos:'FW',star:true},{name:'Firas Al-Buraikan',pos:'FW'},{name:'Mohammed Al-Owais',pos:'GK',star:true},
      {name:'Ali Al-Bulaihi',pos:'DF'},{name:'Yasser Al-Shahrani',pos:'DF'},{name:'Abdullah Otayf',pos:'MF'},
      {name:'Saleh Al-Shehri',pos:'FW'},{name:'Saud Abdulhamid',pos:'DF'},{name:'Hattan Bahebri',pos:'MF'},
      {name:'Mohammed Kanno',pos:'MF',star:true},{name:'Ali Lajami',pos:'DF'},{name:'Nawaf Al-Abid',pos:'FW'},
      {name:'Riyadh Sharahili',pos:'MF'},{name:'Fahad Al-Muwallad',pos:'FW'},{name:'Mohamed Al-Buraik',pos:'DF'}
    ]},
  { name:'Turkey', flag:'🇹🇷', group:'K', rank:29, conf:'UEFA', coach:'Vincenzo Montella',
    players:[
      {name:'Hakan Çalhanoğlu',pos:'MF',star:true},{name:'Arda Güler',pos:'MF',star:true},{name:'Kerem Aktürkoğlu',pos:'FW',star:true},
      {name:'Burak Yılmaz',pos:'FW'},{name:'Zeki Çelik',pos:'DF'},{name:'Merih Demiral',pos:'DF'},
      {name:'Samet Akaydın',pos:'DF'},{name:'Mert Günok',pos:'GK'},{name:'Orkun Kökçü',pos:'MF',star:true},
      {name:'Yusuf Yazıcı',pos:'MF'},{name:'Ferdi Kadıoğlu',pos:'DF'},{name:'İlkay Gündoğan',pos:'MF'},
      {name:'Okay Yokuslu',pos:'MF'},{name:'Cenk Tosun',pos:'FW'},{name:'Abdülkerim Bardakçı',pos:'DF'}
    ]},
  { name:'Austria', flag:'🇦🇹', group:'K', rank:25, conf:'UEFA', coach:'Ralf Rangnick',
    players:[
      {name:'David Alaba',pos:'DF',star:true},{name:'Marcel Sabitzer',pos:'MF',star:true},{name:'Marko Arnautović',pos:'FW',star:true},
      {name:'Christoph Baumgartner',pos:'MF'},{name:'Konrad Laimer',pos:'MF',star:true},{name:'Florian Grillitsch',pos:'MF'},
      {name:'Stefan Lainer',pos:'DF'},{name:'Maximilian Wöber',pos:'DF'},{name:'Patrick Pentz',pos:'GK'},
      {name:'Michael Gregoritsch',pos:'FW'},{name:'Patrick Wimmer',pos:'MF'},{name:'Louis Schaub',pos:'MF'},
      {name:'Philipp Lienhart',pos:'DF'},{name:'Andreas Weimann',pos:'FW'},{name:'Romano Schmid',pos:'MF'}
    ]},
  { name:'Scotland', flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', group:'L', rank:30, conf:'UEFA', coach:'Steve Clarke',
    players:[
      {name:'Andrew Robertson',pos:'DF',star:true},{name:'Scott McTominay',pos:'MF',star:true},{name:'Kieran Tierney',pos:'DF'},
      {name:'Lyndon Dykes',pos:'FW'},{name:'Ryan Fraser',pos:'FW'},{name:'Ryan Jack',pos:'MF'},
      {name:'John McGinn',pos:'MF',star:true},{name:'Stuart Armstrong',pos:'MF'},{name:'Craig Gordon',pos:'GK'},
      {name:'Ryan Christie',pos:'MF'},{name:'Billy Gilmour',pos:'MF',star:true},{name:'Grant Hanley',pos:'DF'},
      {name:'Callum McGregor',pos:'MF'},{name:'Nathan Patterson',pos:'DF'},{name:'Che Adams',pos:'FW'}
    ]},
  { name:'Venezuela', flag:'🇻🇪', group:'E', rank:69, conf:'CONMEBOL', coach:'Fernando Batista',
    players:[
      {name:'Salomón Rondón',pos:'FW',star:true},{name:'Josef Martínez',pos:'FW',star:true},{name:'Tomás Rincón',pos:'MF'},
      {name:'Roberto Rosales',pos:'DF'},{name:'Alexander González',pos:'DF'},{name:'Eric Ramírez',pos:'FW'},
      {name:'Yangel Herrera',pos:'MF',star:true},{name:'Wuilker Faríñez',pos:'GK'},{name:'José Martínez',pos:'MF'},
      {name:'Cristian Casseres Jr.',pos:'MF'},{name:'Jan Arango',pos:'MF'},{name:'Jhon Murillo',pos:'FW'},
      {name:'Adalberto Peñaranda',pos:'FW'},{name:'Yordan Osorio',pos:'DF'},{name:'Luis Mago',pos:'FW'}
    ]},
  { name:'Uzbekistan', flag:'🇺🇿', group:'L', rank:62, conf:'AFC', coach:'Srecko Katanec',
    players:[
      {name:'Eldor Shomurodov',pos:'FW',star:true},{name:'Jaloliddin Masharipov',pos:'MF',star:true},{name:'Otabek Shukurov',pos:'GK'},
      {name:'Dostonbek Khamdamov',pos:'MF'},{name:'Abbosbek Fayzullaev',pos:'MF',star:true},{name:'Otabek Dzhaparov',pos:'MF'},
      {name:'Sanjar Tursunov',pos:'FW'},{name:'Khojimat Erkinov',pos:'DF'},{name:'Laziz Azimov',pos:'FW'},
      {name:'Ilhom Zaynutdinov',pos:'MF'},{name:'Azizbek Turgunboev',pos:'DF'},{name:'Shamsiddin Latipov',pos:'DF'},
      {name:'Sherzod Nishonov',pos:'GK'},{name:'Bunyod Hamidov',pos:'DF'},{name:'Jamshid Iskanderov',pos:'FW'}
    ]},
  { name:'Peru', flag:'🇵🇪', group:'L', rank:71, conf:'CONMEBOL', coach:'Jorge Fossati',
    players:[
      {name:'Paolo Guerrero',pos:'FW',star:true},{name:'Gianluca Lapadula',pos:'FW'},{name:'Renato Tapia',pos:'MF',star:true},
      {name:'André Carrillo',pos:'FW'},{name:'Yoshimar Yotún',pos:'MF'},{name:'Alexis Flores',pos:'MF'},
      {name:'Pedro Gallese',pos:'GK',star:true},{name:'Luis Advíncula',pos:'DF'},{name:'Alexander Callens',pos:'DF'},
      {name:'Miguel Araujo',pos:'DF'},{name:'Christian Cueva',pos:'MF'},{name:'Edison Flores',pos:'MF'},
      {name:'Christofer Gonzales',pos:'MF'},{name:'Bryan Reyna',pos:'FW'},{name:'Marcos López',pos:'DF'}
    ]},
  { name:'Honduras', flag:'🇭🇳', group:'A', rank:80, conf:'CONCACAF', coach:'Reinaldo Rueda',
    players:[
      {name:'Romell Quioto',pos:'FW',star:true},{name:'Alberth Elis',pos:'FW',star:true},{name:'Anthony Lozano',pos:'FW'},
      {name:'Rigoberto Rivas',pos:'FW'},{name:'Deybi Flores',pos:'MF'},{name:'Edwin Rodríguez',pos:'MF'},
      {name:'Jonathan Rubio',pos:'MF'},{name:'Maynor Figueroa',pos:'DF'},{name:'Denil Maldonado',pos:'DF'},
      {name:'Júnior Lacayo',pos:'DF'},{name:'Harold Fonseca',pos:'GK'},{name:'Luis Palma',pos:'FW',star:true},
      {name:'Oscar Salas',pos:'MF'},{name:'Edrick Menjívar',pos:'GK'},{name:'Bryan Acosta',pos:'MF'}
    ]},
  { name:'Panama', flag:'🇵🇦', group:'B', rank:72, conf:'CONCACAF', coach:'Thomas Christiansen',
    players:[
      {name:'Rolando Blackburn',pos:'FW',star:true},{name:'Ismael Díaz',pos:'FW',star:true},{name:'José Fajardo',pos:'FW'},
      {name:'Adalberto Carrasquilla',pos:'MF',star:true},{name:'Anibal Godoy',pos:'MF'},{name:'Alfredo Stephens',pos:'DF'},
      {name:'Eric Davis',pos:'DF'},{name:'César Blackman',pos:'DF'},{name:'Orlando Mosquera',pos:'GK'},
      {name:'Édgar Bárcenas',pos:'FW'},{name:'Amir Murillo',pos:'DF'},{name:'Luis Mejía',pos:'GK'},
      {name:'Moisés Montero',pos:'MF'},{name:'Abdiel Arroyo',pos:'FW'},{name:'Éric Davis',pos:'DF'}
    ]},
  { name:'Jamaica', flag:'🇯🇲', group:'C', rank:53, conf:'CONCACAF', coach:'Steve McClaren',
    players:[
      {name:'Michail Antonio',pos:'FW',star:true},{name:'Bobby Reid',pos:'FW'},{name:'Shamar Nicholson',pos:'FW',star:true},
      {name:'Leon Bailey',pos:'FW',star:true},{name:'Daniel Johnson',pos:'MF'},{name:'Kasey Palmer',pos:'MF'},
      {name:'Adrian Mariappa',pos:'DF'},{name:'Michael Hector',pos:'DF'},{name:'Damion Lowe',pos:'DF'},
      {name:'Adryan',pos:'MF'},{name:'Liam Moore',pos:'DF'},{name:'Andre Blake',pos:'GK',star:true},
      {name:'Cory Burke',pos:'FW'},{name:'Demarai Gray',pos:'FW'},{name:'Ethan Pinnock',pos:'DF'}
    ]},
  { name:'Costa Rica', flag:'🇨🇷', group:'J', rank:45, conf:'CONCACAF', coach:'Gustavo Alfaro',
    players:[
      {name:'Bryan Ruiz',pos:'MF'},{name:'Keylor Navas',pos:'GK',star:true},{name:'Joel Campbell',pos:'FW',star:true},
      {name:'Marco Ureña',pos:'FW'},{name:'Celso Borges',pos:'MF'},{name:'Bryan Oviedo',pos:'DF'},
      {name:'Francisco Calvo',pos:'DF'},{name:'Óscar Duarte',pos:'DF'},{name:'Yeltsin Tejeda',pos:'MF'},
      {name:'Randall Leal',pos:'MF'},{name:'Anthony Contreras',pos:'FW'},{name:'Jewison Bennette',pos:'FW',star:true},
      {name:'Brandon Aguilera',pos:'MF'},{name:'Álvaro Zamora',pos:'GK'},{name:'Rónald Matarrita',pos:'DF'}
    ]},
  { name:'New Zealand', flag:'🇳🇿', group:'K', rank:95, conf:'OFC', coach:'Darren Bazeley',
    players:[
      {name:'Chris Wood',pos:'FW',star:true},{name:'Kosta Barbarouses',pos:'FW'},{name:'Liberato Cacace',pos:'DF',star:true},
      {name:'Joe Bell',pos:'MF'},{name:'Marco Rojas',pos:'FW'},{name:'Ryan Thomas',pos:'MF'},
      {name:'Clayton Lewis',pos:'MF'},{name:'Tommy Smith',pos:'DF'},{name:'Winston Reid',pos:'DF'},
      {name:'Elijah Just',pos:'MF'},{name:'Callan Elliot',pos:'MF'},{name:'Filippo Giovagnoli',pos:'MF'},
      {name:'Stefan Marinovic',pos:'GK'},{name:'Michael Boxall',pos:'DF'},{name:'Sarpreet Singh',pos:'MF',star:true}
    ]},
  { name:'Indonesia', flag:'🇮🇩', group:'K', rank:130, conf:'AFC', coach:'Shin Tae-yong',
    players:[
      {name:'Egy Maulana Vikri',pos:'FW',star:true},{name:'Witan Sulaeman',pos:'FW'},{name:'Pratama Arhan',pos:'DF'},
      {name:'Ricky Kambuaya',pos:'MF'},{name:'Elkan Baggott',pos:'DF',star:true},{name:'Sandy Walsh',pos:'DF'},
      {name:'Marc Klok',pos:'MF'},{name:'Ernando Ari',pos:'GK'},{name:'Justin Hubner',pos:'DF',star:true},
      {name:'Nathan Tjoe-A-On',pos:'DF'},{name:'Rafael Struick',pos:'FW',star:true},{name:'Hokky Caraka',pos:'FW'},
      {name:'Kevin Diks',pos:'DF'},{name:'Marselino Ferdinan',pos:'MF',star:true},{name:'Jay Idzes',pos:'DF'}
    ]}
];

const ANALYSIS_TOP20 = [
  { name:'Argentina', flag:'🇦🇷', rank:1, worldRank:1,
    strengths:['World champions (2022)','Messi leading the attack','Deep squad depth','Winning mentality','Strong midfield'],
    weaknesses:['Aging key players','Post-Messi era uncertainty','Defensive injuries risk','Pressure of defending title'],
    ace:{name:'Lionel Messi',pos:'FW',club:'Inter Miami'},
    winProb:22, odds:'3.5x' },
  { name:'France', flag:'🇫🇷', rank:2, worldRank:2,
    strengths:['Generation talent','"Les Bleus" quality depth','Mbappé world class','Strong defensive unit','Youth + experience mix'],
    weaknesses:['Internal squad conflicts','Deschamps system rigidity','Overreliance on Mbappé','Pressure after 2022 final loss'],
    ace:{name:'Kylian Mbappé',pos:'FW',club:'Real Madrid'},
    winProb:18, odds:'4.0x' },
  { name:'Spain', flag:'🇪🇸', rank:3, worldRank:3,
    strengths:['EURO 2024 Champions','Tiki-taka evolved','Lamine Yamal phenomenon','Strongest midfield','Tactical sophistication'],
    weaknesses:['Striker reliance on Morata','Defensive experience gaps','Pressure from success','Inconsistency away from home'],
    ace:{name:'Lamine Yamal',pos:'FW',club:'Barcelona'},
    winProb:16, odds:'4.5x' },
  { name:'Belgium', flag:'🇧🇪', rank:4, worldRank:3,
    strengths:['De Bruyne genius','World class GK Courtois','Physical team','Big game experience','European quality'],
    weaknesses:['Golden generation aging','Over-reliance on De Bruyne','Tactical rigidity','Post-peak window'],
    ace:{name:'Kevin De Bruyne',pos:'MF',club:'Manchester City'},
    winProb:6, odds:'10x' },
  { name:'Brazil', flag:'🇧🇷', rank:5, worldRank:5,
    strengths:['Vinícius world-class form','Attacking flair','Squad depth','Tournament pedigree','Star power'],
    weaknesses:['No World Cup since 2002','Defensive vulnerability','Squad harmony issues','Pressure of expectation'],
    ace:{name:'Vinícius Jr.',pos:'FW',club:'Real Madrid'},
    winProb:12, odds:'5.5x' },
  { name:'Portugal', flag:'🇵🇹', rank:6, worldRank:6,
    strengths:['Bruno Fernandes creativity','Strong attacking options','Ronaldo still delivering','Defensive solidity','Experience in tournaments'],
    weaknesses:['Tactical disputes','Over-reliance on veterans','Ronaldo age concern','Mid-tournament inconsistency'],
    ace:{name:'Bruno Fernandes',pos:'MF',club:'Manchester United'},
    winProb:8, odds:'7x' },
  { name:'Netherlands', flag:'🇳🇱', rank:7, worldRank:7,
    strengths:['Van Dijk leadership','Gakpo + Depay attack','Strong defensive core','Koeman tactical clarity','Ajax-bred passing'],
    weaknesses:['Final step struggles','Frenkie de Jong fitness','Psychological barrier in semis','Squad depth behind starters'],
    ace:{name:'Virgil van Dijk',pos:'DF',club:'Liverpool'},
    winProb:7, odds:'8x' },
  { name:'Colombia', flag:'🇨🇴', rank:8, worldRank:9,
    strengths:['CONMEBOL 2024 Copa América winners','Luis Díaz in top form','James Rodríguez maestro','Young talent blend','Strong team spirit'],
    weaknesses:['Experience in deep knockout rounds','Defensive set pieces','Goalkeeper inconsistency','Midfield depth'],
    ace:{name:'James Rodríguez',pos:'MF',club:'Rayo Vallecano'},
    winProb:5, odds:'12x' },
  { name:'Italy', flag:'🇮🇹', rank:9, worldRank:9,
    strengths:['Tactical intelligence','Donnarumma world-class GK','Defensive tradition','European Champions pedigree','Chiesa pace & creativity'],
    weaknesses:['Inconsistent form','Striker quality concerns','Aging core players','Qualification struggles'],
    ace:{name:'Federico Chiesa',pos:'FW',club:'Liverpool'},
    winProb:4, odds:'14x' },
  { name:'Croatia', flag:'🇭🇷', rank:10, worldRank:10,
    strengths:['Modrić elite leadership','World Cup finalists experience','Strong midfield',  'Overachieving tradition','Gvardiol emerging star'],
    weaknesses:['Aging core especially Modrić','Small nation depth','Post-golden generation','Physical demands on veterans'],
    ace:{name:'Luka Modrić',pos:'MF',club:'Real Madrid'},
    winProb:3, odds:'18x' },
  { name:'Denmark', flag:'🇩🇰', rank:11, worldRank:11,
    strengths:['Eriksen resurrection story','Physical fitness','Strong set pieces','Team unity after 2021 tragedy','Hojlund rising star'],
    weaknesses:['Lack of world-class attackers','Dependence on Eriksen','High press vulnerability','Knockout consistency'],
    ace:{name:'Rasmus Hojlund',pos:'FW',club:'Manchester United'},
    winProb:3, odds:'20x' },
  { name:'Germany', flag:'🇩🇪', rank:12, worldRank:12,
    strengths:['Musiala + Wirtz star pair','Tactical innovation under Nagelsmann','Tournament experience','Host nation momentum similar','Physical intensity'],
    weaknesses:['2018-2022 World Cup failures','Mental resilience questions','Defensive injuries','Pressure from media'],
    ace:{name:'Florian Wirtz',pos:'MF',club:'Bayern Munich'},
    winProb:5, odds:'11x' },
  { name:'USA', flag:'🇺🇸', rank:13, worldRank:13,
    strengths:['Home advantage','Bellingham-era MLS + Europe talent','Athletic intensity','Pulisic leadership','Young hungry squad'],
    weaknesses:['Inexperience at elite level','Goalkeeper uncertainty','Depth at center forward','Tactical sophistication gap'],
    ace:{name:'Christian Pulisic',pos:'FW',club:'AC Milan'},
    winProb:4, odds:'15x' },
  { name:'Morocco', flag:'🇲🇦', rank:14, worldRank:14,
    strengths:['2022 semi-finalists','Defensive wall','Hakimi wing dominance','Strong team spirit','Amrabat engine'],
    weaknesses:['Attacking consistency','Away from home form','Reliance on counter attack','Ziyech injury risk'],
    ace:{name:'Achraf Hakimi',pos:'DF',club:'Paris Saint-Germain'},
    winProb:3, odds:'20x' },
  { name:'Mexico', flag:'🇲🇽', rank:15, worldRank:14,
    strengths:['Home nation pressure/advantage','Lozano pace','Experience in CONCACAF','Passionate support','Jiménez leader'],
    weaknesses:['Round of 16 curse','Aging squad','Tactical predictability','Underperformance historically in WC'],
    ace:{name:'Santiago Giménez',pos:'FW',club:'AC Milan'},
    winProb:2, odds:'25x' },
  { name:'Japan', flag:'🇯🇵', rank:16, worldRank:17,
    strengths:['Tactical discipline','Giant-killing record (2022)','Mitoma / Kamada quality','Defensive organization','High work rate'],
    weaknesses:['Small physical stature','Lack of international proven finisher','Struggles in extra time','Inconsistency vs. weaker teams'],
    ace:{name:'Kaoru Mitoma',pos:'FW',club:'Brighton'},
    winProb:2, odds:'25x' },
  { name:'Uruguay', flag:'🇺🇾', rank:17, worldRank:18,
    strengths:['Valverde masterclass','Darwin Núñez power','Araujo defensive rock','Bielsa intensity','South American grit'],
    weaknesses:['Suárez age dependency','Volatile discipline','Small squad depth','Physical intensity sustainability'],
    ace:{name:'Federico Valverde',pos:'MF',club:'Real Madrid'},
    winProb:3, odds:'20x' },
  { name:'Senegal', flag:'🇸🇳', rank:18, worldRank:20,
    strengths:['Africa Cup Champions','Mané leadership','Koulibaly defensive excellence','Physical dominance','Mendy goalkeeping'],
    weaknesses:['Post-Mané reliance','Limited creative midfield','European experience gaps','Under-pressure performance'],
    ace:{name:'Sadio Mané',pos:'FW',club:'Al-Nassr'},
    winProb:2, odds:'28x' },
  { name:'South Korea', flag:'🇰🇷', rank:19, worldRank:23,
    strengths:['Son Heung-min elite talent','Kim Min-jae world class DF','Lee Kang-in creativity','Tactical flexibility','Asian champions'],
    weaknesses:['Lack of depth behind Son','Midfield physicality','Pressure after 2002 expectations','Long flights in group play'],
    ace:{name:'Son Heung-min',pos:'FW',club:'Tottenham Hotspur'},
    winProb:2, odds:'28x' },
  { name:'Austria', flag:'🇦🇹', rank:20, worldRank:25,
    strengths:['Alaba versatility','Rangnick high press','Arnautovic experience','Physical intensity','Sabitzer quality'],
    weaknesses:['Lack of top tournament pedigree','Alaba injury risk','Striker depth','Defensive transition gaps'],
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
