var Hero = require('./Hero.js');

var hero = new Hero('tracer', 'Tracer', 150, 0, 0, 100, 2, 'Offense');
//Supports
hero.addInnerHero('Symmetra', 0, 0, 75, 0);
hero.addInnerHero('Torbjorn', 0, 0, 75, 0);
hero.addInnerHero('Zarya', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Reinhardt', 100, 0, 0, 0);
hero.addInnerHero('Symmetra', 100, 0, 0, 0);
hero.addInnerHero('Zenyatta', 100, 0, 0, 0);

hero.printToFile('../../out/tracer.json');