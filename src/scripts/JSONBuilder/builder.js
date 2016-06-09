// require('./Heroes/Bastion.js');
// require('./Heroes/DVa.js');
// require('./Heroes/Genji.js');
// require('./Heroes/Hanzo.js');
// require('./Heroes/Junkrat.js');
// require('./Heroes/Lucio.js');
// require('./Heroes/McCree.js');
// require('./Heroes/Mei.js');
// require('./Heroes/Mercy.js');
// require('./Heroes/Pharah.js');
// require('./Heroes/Reaper.js');
// require('./Heroes/Reinhardt.js');
// require('./Heroes/Roadhog.js');
// require('./Heroes/Soldier76.js');
// require('./Heroes/Symmetra.js');
// require('./Heroes/Torbjorn.js');
// require('./Heroes/Tracer.js');
// require('./Heroes/Widowmaker.js');
// require('./Heroes/Winston.js');
// require('./Heroes/Zarya.js');
// require('./Heroes/Zenyatta.js');

//           _____                    _____                    _____                   _______                   _____                    _____          
//          /\    \                  /\    \                  /\    \                 /::\    \                 /\    \                  /\    \         
//         /::\____\                /::\    \                /::\    \               /::::\    \               /::\    \                /::\    \        
//        /:::/    /               /::::\    \              /::::\    \             /::::::\    \             /::::\    \              /::::\    \       
//       /:::/    /               /::::::\    \            /::::::\    \           /::::::::\    \           /::::::\    \            /::::::\    \      
//      /:::/    /               /:::/\:::\    \          /:::/\:::\    \         /:::/~~\:::\    \         /:::/\:::\    \          /:::/\:::\    \     
//     /:::/____/               /:::/__\:::\    \        /:::/__\:::\    \       /:::/    \:::\    \       /:::/__\:::\    \        /:::/__\:::\    \    
//    /::::\    \              /::::\   \:::\    \      /::::\   \:::\    \     /:::/    / \:::\    \     /::::\   \:::\    \       \:::\   \:::\    \   
//   /::::::\    \   _____    /::::::\   \:::\    \    /::::::\   \:::\    \   /:::/____/   \:::\____\   /::::::\   \:::\    \    ___\:::\   \:::\    \  
//  /:::/\:::\    \ /\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\____\ |:::|    |     |:::|    | /:::/\:::\   \:::\    \  /\   \:::\   \:::\    \ 
// /:::/  \:::\    /::\____\/:::/__\:::\   \:::\____\/:::/  \:::\   \:::|    ||:::|____|     |:::|    |/:::/__\:::\   \:::\____\/::\   \:::\   \:::\____\
// \::/    \:::\  /:::/    /\:::\   \:::\   \::/    /\::/   |::::\  /:::|____| \:::\    \   /:::/    / \:::\   \:::\   \::/    /\:::\   \:::\   \::/    /
//  \/____/ \:::\/:::/    /  \:::\   \:::\   \/____/  \/____|:::::\/:::/    /   \:::\    \ /:::/    /   \:::\   \:::\   \/____/  \:::\   \:::\   \/____/ 
//           \::::::/    /    \:::\   \:::\    \            |:::::::::/    /     \:::\    /:::/    /     \:::\   \:::\    \       \:::\   \:::\    \     
//            \::::/    /      \:::\   \:::\____\           |::|\::::/    /       \:::\__/:::/    /       \:::\   \:::\____\       \:::\   \:::\____\    
//            /:::/    /        \:::\   \::/    /           |::| \::/____/         \::::::::/    /         \:::\   \::/    /        \:::\  /:::/    /    
//           /:::/    /          \:::\   \/____/            |::|  ~|                \::::::/    /           \:::\   \/____/          \:::\/:::/    /     
//          /:::/    /            \:::\    \                |::|   |                 \::::/    /             \:::\    \               \::::::/    /      
//         /:::/    /              \:::\____\               \::|   |                  \::/____/               \:::\____\               \::::/    /       
//         \::/    /                \::/    /                \:|   |                   ~~                      \::/    /                \::/    /        
//          \/____/                  \/____/                  \|___|                                            \/____/                  \/____/         
                                                                                                                                                      

var Hero = require('./Heroes/Hero.js');
var fs = require('fs');

var out = [];
var hero;


//***************************Bastion***************************
hero = new Hero('bastion', 'Bastion', 200, 100, 0, 100, 1, 'Defense');
//Supports
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);
hero.addInnerHero('Mercy', 0, 0, 75, 0);
hero.addInnerHero('Zarya', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Reinhardt', 100, 0, 0, 0);
hero.addInnerHero('Winston', 100, 0, 0, 0);

out.push(hero.get());

//***************************DVa***************************
hero = new Hero('dva', 'D. Va', 100, 400, 0, 100, 2, 'Tank');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Mei', 0, 0, 75, 0);
//Counters
hero.addInnerHero('Hanzo', 100, 0, 0, 0);
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);
hero.addInnerHero('Winston', 100, 0, 0, 0);

out.push(hero.get());

//***************************Genji***************************
hero = new Hero('genji', 'Genji', 200, 0, 0, 100, 3, 'Offense');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Zenyatta', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Bastion', 100, 0, 0, 0);
hero.addInnerHero('Hanzo', 100, 0, 0, 0);
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);

out.push(hero.get());

//***************************Hanzo***************************
hero = new Hero('hanzo', 'Hanzo', 200, 0, 0, 100, 3, 'Defense');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Mercy', 0, 0, 75, 0);
hero.addInnerHero('Mei', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Bastion', 100, 0, 0, 0);
hero.addInnerHero('Roadhog', 100, 0, 0, 0);
hero.addInnerHero('Torbjorn', 100, 0, 0, 0);

out.push(hero.get());

//***************************Junkrat***************************
hero = new Hero('junkrat', 'Junkrat', 200, 0, 0, 100, 2, 'Defense');
//Supports
hero.addInnerHero('Mercy', 0, 0, 75, 0);
hero.addInnerHero('Winston', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Mei', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

out.push(hero.get());

//***************************Lúcio***************************
hero = new Hero('lucio', 'Lúcio', 200, 0, 0, 100, 2, 'Support');
//Supports
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);
hero.addInnerHero('Reaper', 0, 0, 75, 0);
hero.addInnerHero('Roadhog', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Genji', 50, 0, 0, 0);
hero.addInnerHero('Reaper', 50, 0, 0, 0);
hero.addInnerHero('Roadhog', 50, 0, 0, 0);

out.push(hero.get());

//***************************McCree***************************
hero = new Hero('mccree', 'McCree', 200, 0, 0, 100, 2, 'Offense');
//Supports
hero.addInnerHero('Mei', 0, 0, 75, 0);
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Tracer', 100, 0, 0, 0);
hero.addInnerHero('Reinhardt', 100, 0, 0, 0);

out.push(hero.get());

//***************************Mei***************************
hero = new Hero('mei', 'Mei', 250, 0, 0, 100, 3, 'Defense');
//Supports
hero.addInnerHero('Hanzo', 0, 0, 75, 0);
hero.addInnerHero('Lucio', 0, 0, 75, 0);
hero.addInnerHero('Reaper', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Genji', 100, 0, 0, 0);
hero.addInnerHero('Lucio', 100, 0, 0, 0);
hero.addInnerHero('DVa', 100, 0, 0, 0);

out.push(hero.get());

//***************************Mercy***************************
hero = new Hero('mercy', 'Mercy', 200, 0, 0, 100, 1, 'Support');
//Supports
hero.addInnerHero('Hanzo', 0, 0, 75, 0);
hero.addInnerHero('Junkrat', 0, 0, 75, 0);
hero.addInnerHero('Pharah', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Reinhardt', 50, 0, 0, 0);
hero.addInnerHero('Winston', 50, 0, 0, 0);

out.push(hero.get());

//***************************Pharah***************************
hero = new Hero('pharah', 'Pharah', 200, 0, 0, 100, 1, 'Offense');
//Supports
hero.addInnerHero('Mercy', 0, 0, 75, 0);
hero.addInnerHero('Zarya', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Junkrat', 100, 0, 0, 0);
hero.addInnerHero('Reaper', 100, 0, 0, 0);
hero.addInnerHero('Zarya', 100, 0, 0, 0);

out.push(hero.get());

//***************************Reaper***************************
hero = new Hero('reaper', 'Reaper', 250, 0, 0, 100, 1, 'Offense');
//Supports
hero.addInnerHero('Lucio', 0, 0, 75, 0);
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Mei', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Mei', 100, 0, 0, 0);
hero.addInnerHero('Roadhog', 100, 0, 0, 0);
hero.addInnerHero('Winston', 100, 0, 0, 0);

out.push(hero.get());

//***************************Reinhardt***************************
hero = new Hero('reinhardt', 'Reinhardt', 300, 200, 0, 100, 1, 'Tank');
//Supports
hero.addInnerHero('Bastion', 0, 0, 75, 0);
hero.addInnerHero('McCree', 0, 0, 75, 0);
hero.addInnerHero('Soldier76', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Torbjorn', 100, 0, 0, 0);
hero.addInnerHero('Zarya', 100, 0, 0, 0);
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);

out.push(hero.get());

//***************************Raodhog***************************
hero = new Hero('roadhog', 'Roadhog', 600, 0, 0, 100, 2, 'Tank');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Mercy', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Bastion', 100, 0, 0, 0);
hero.addInnerHero('Pharah', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

out.push(hero.get());

//***************************Soldier: 76***************************
hero = new Hero('soldier76', 'Soldier: 76', 200, 0, 0, 100, 1, 'Offense');
//Supports
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);
hero.addInnerHero('Winston', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Pharah', 100, 0, 0, 0);
hero.addInnerHero('Roadhog', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

out.push(hero.get());

//***************************Symmetra***************************
hero = new Hero('symmetra', 'Symmetra', 100, 0, 100, 100, 2, 'Support');
//Supports
hero.addInnerHero('Tracer', 0, 0, 75, 0);
hero.addInnerHero('Zenyatta', 0, 0, 75, 0);

//Counters
hero.addInnerHero('DVa', 100, 0, 0, 0);
hero.addInnerHero('Genji', 100, 0, 0, 0);
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);

out.push(hero.get());

//***************************Torbjörn***************************
hero = new Hero('torbjorn', 'Torbjörn', 200, 0, 0, 100, 2, 'Defense');
//Supports
hero.addInnerHero('Tracer', 0, 0, 75, 0);
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Lucio', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

out.push(hero.get());

//***************************Tracer***************************
hero = new Hero('tracer', 'Tracer', 150, 0, 0, 100, 2, 'Offense');
//Supports
hero.addInnerHero('Symmetra', 0, 0, 75, 0);
hero.addInnerHero('Torbjorn', 0, 0, 75, 0);
hero.addInnerHero('Zarya', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Reinhardt', 100, 0, 0, 0);
hero.addInnerHero('Symmetra', 100, 0, 0, 0);
hero.addInnerHero('Zenyatta', 100, 0, 0, 0);

out.push(hero.get());

//***************************Widowmaker***************************
hero = new Hero('widowmaker', 'Widowmaker', 200, 0, 0, 100, 2, 'Defense');
//Supports
hero.addInnerHero('Winston', 0, 0, 75, 0);
hero.addInnerHero('Zenyatta', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Bastion', 100, 0, 0, 0);
hero.addInnerHero('Torbjorn', 100, 0, 0, 0);
hero.addInnerHero('Zenyatta', 100, 0, 0, 0);

out.push(hero.get());

//***************************Winston***************************
hero = new Hero('winston', 'Winston', 400, 100, 0, 100, 2, 'Tank');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Zenyatta', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);
hero.addInnerHero('Zenyatta', 100, 0, 0, 0);

out.push(hero.get());

//***************************Zarya***************************
hero = new Hero('zarya', 'Zarya', 200, 0, 200, 100, 3, 'Tank');
//Supports
hero.addInnerHero('Genji', 0, 0, 75, 0);
hero.addInnerHero('Reaper', 0, 0, 75, 0);
hero.addInnerHero('Tracer', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Mei', 100, 0, 0, 0);
hero.addInnerHero('Genji', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

out.push(hero.get());

//***************************Zenyatta***************************
hero = new Hero('zenyatta', 'Zenyatta', 50, 0, 100, 100, 3, 'Support');
//Supports
hero.addInnerHero('Genji', 0, 0, 75, 0);
hero.addInnerHero('Reaper', 0, 0, 75, 0);
hero.addInnerHero('Pharah', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Zarya', 100, 0, 0, 0);
hero.addInnerHero('Winston', 100, 0, 0, 0);
hero.addInnerHero('Roadhog', 100, 0, 0, 0);

out.push(hero.get());


fs.writeFile('./out/heroes.json', JSON.stringify(out, 4, 4)),  'utf-8';




//           _____                    _____                    _____                    _____          
//          /\    \                  /\    \                  /\    \                  /\    \         
//         /::\____\                /::\    \                /::\    \                /::\    \        
//        /::::|   |               /::::\    \              /::::\    \              /::::\    \       
//       /:::::|   |              /::::::\    \            /::::::\    \            /::::::\    \      
//      /::::::|   |             /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \     
//     /:::/|::|   |            /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \    
//    /:::/ |::|   |           /::::\   \:::\    \      /::::\   \:::\    \       \:::\   \:::\    \   
//   /:::/  |::|___|______    /::::::\   \:::\    \    /::::::\   \:::\    \    ___\:::\   \:::\    \  
//  /:::/   |::::::::\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\____\  /\   \:::\   \:::\    \ 
// /:::/    |:::::::::\____\/:::/  \:::\   \:::\____\/:::/  \:::\   \:::|    |/::\   \:::\   \:::\____\
// \::/    / ~~~~~/:::/    /\::/    \:::\  /:::/    /\::/    \:::\  /:::|____|\:::\   \:::\   \::/    /
//  \/____/      /:::/    /  \/____/ \:::\/:::/    /  \/_____/\:::\/:::/    /  \:::\   \:::\   \/____/ 
//              /:::/    /            \::::::/    /            \::::::/    /    \:::\   \:::\    \     
//             /:::/    /              \::::/    /              \::::/    /      \:::\   \:::\____\    
//            /:::/    /               /:::/    /                \::/____/        \:::\  /:::/    /    
//           /:::/    /               /:::/    /                  ~~               \:::\/:::/    /     
//          /:::/    /               /:::/    /                                     \::::::/    /      
//         /:::/    /               /:::/    /                                       \::::/    /       
//         \::/    /                \::/    /                                         \::/    /        
//          \/____/                  \/____/                                           \/____/         
                                                                                                    
var Map = require('./Maps/Map.js');
var map;
var variant;

out = [];
//***************************Hanamura***************************
map = new Map('hanamura', 'Hanamura', 'Assault');

out.push(map.get());

//***************************Temple of Anubis***************************
map = new Map('temple_of_anubis', 'Temple of Anubis', 'Assault');

out.push(map.get());

//***************************Volskaya Industries***************************
map = new Map('volskaya_industries', 'Volskaya Industries', 'Assault');

out.push(map.get());

//***************************Dorado***************************
map = new Map('dorado', 'Dorado', 'Escort');

out.push(map.get());

//***************************Route 66***************************
map = new Map('route66', 'Route 66', 'Escort');

out.push(map.get());

//***************************Watchpoint: Gibraltar***************************
map = new Map('watchpoint_gibraltar', 'Watchpoint: Gibraltar', 'Escort');

out.push(map.get());

//***************************Hollywood***************************
map = new Map('hollywood', 'Hollywood', 'Hybrid');

out.push(map.get());

//***************************King's Row***************************
map = new Map('kings_row', 'King\'s Row', 'Hybrid');

out.push(map.get());

//***************************Numbani***************************
map = new Map('numbani', 'Numbani', 'Hybrid');

out.push(map.get());

//***************************Ilios***************************
map = new Map('ilios', 'Ilios', 'Control');
variant = new Map('lighthouse', 'Lighthouse', 'Control');
map.addVariant(variant);
variant = new Map('ruins', 'Ruins', 'Control');
map.addVariant(variant);
variant = new Map('well', 'Well', 'Control');
map.addVariant(variant);

out.push(map.get());

//***************************Lijiang Tower***************************
map = new Map('lijiang_tower', 'Lijiang Tower', 'Control');
variant = new Map('control_center', 'Control Center', 'Control');
map.addVariant(variant);
variant = new Map('garden', 'Garden', 'Control');
map.addVariant(variant);
variant = new Map('night_market', 'Night Market', 'Control');
map.addVariant(variant);

out.push(map.get());

//***************************Nepal***************************
map = new Map('nepal', 'Nepal', 'Control');
variant = new Map('sanctum', 'Sanctum', 'Control');
map.addVariant(variant);
variant = new Map('shrine', 'Shrine', 'Control');
map.addVariant(variant);
variant = new Map('village', 'Village', 'Control');
map.addVariant(variant);

out.push(map.get());

fs.writeFile('./out/maps.json', JSON.stringify(out, 4, 4)),  'utf-8';