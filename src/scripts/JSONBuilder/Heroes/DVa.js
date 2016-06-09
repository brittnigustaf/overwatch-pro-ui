var Hero = require('./Hero.js');

var hero = new Hero('dva', 'D. Va', 100, 400, 0, 100, 2, 'Tank');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Mei', 0, 0, 75, 0);
//Counters
hero.addInnerHero('Hanzo', 100, 0, 0, 0);
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);
hero.addInnerHero('Winston', 100, 0, 0, 0);

hero.printToFile('../../out/dva.json');