var Hero = require('./Hero.js');

var hero = new Hero('roadhog', 'Roadhog', 600, 0, 0, 100, 2, 'Tank');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Mercy', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Bastion', 100, 0, 0, 0);
hero.addInnerHero('Pharah', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

hero.printToFile('../../out/roadhog.json');