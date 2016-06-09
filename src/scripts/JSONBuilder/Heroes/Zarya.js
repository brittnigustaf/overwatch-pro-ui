var Hero = require('./Hero.js');

var hero = new Hero('zarya', 'Zarya', 200, 0, 200, 100, 3, 'Tank');
//Supports
hero.addInnerHero('Genji', 0, 0, 75, 0);
hero.addInnerHero('Reaper', 0, 0, 75, 0);
hero.addInnerHero('Tracer', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Mei', 100, 0, 0, 0);
hero.addInnerHero('Genji', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

hero.printToFile('../../out/zarya.json');