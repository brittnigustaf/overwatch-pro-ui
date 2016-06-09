var Hero = require('./Hero.js');

var hero = new Hero('mccree', 'McCree', 200, 0, 0, 100, 2, 'Offense');
//Supports
hero.addInnerHero('Mei', 0, 0, 75, 0);
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);


//Counters
hero.addInnerHero('Tracer', 100, 0, 0, 0);
hero.addInnerHero('Reinhardt', 100, 0, 0, 0);

hero.printToFile('../../out/mccree.json');