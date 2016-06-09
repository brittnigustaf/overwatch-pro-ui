var Hero = require('./Hero.js');

var hero = new Hero('torbjorn', 'Torbjörn', 200, 0, 0, 100, 2, 'Defense');
//Supports
hero.addInnerHero('Tracer', 0, 0, 75, 0);
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Lucio', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

hero.printToFile('../../out/torbjorn.json');

return hero.get();