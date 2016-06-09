var Hero = require('./Hero.js');

var hero = new Hero('bastion', 'Bastion', 200, 100, 0, 100, 1, 'Defense');
//Supports
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);
hero.addInnerHero('Mercy', 0, 0, 75, 0);
hero.addInnerHero('Zarya', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Reinhardt', 100, 0, 0, 0);
hero.addInnerHero('Winston', 100, 0, 0, 0);

hero.printToFile('../../out/bastion.json');