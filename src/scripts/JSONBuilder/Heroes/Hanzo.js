var Hero = require('./Hero.js');

var hero = new Hero('hanzo', 'Hanzo', 200, 0, 0, 100, 3, 'Defense');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Mercy', 0, 0, 75, 0);
hero.addInnerHero('Mei', 0, 0, 75, 0);


//Counters
hero.addInnerHero('Bastion', 100, 0, 0, 0);
hero.addInnerHero('Roadhog', 100, 0, 0, 0);
hero.addInnerHero('Torbjorn', 100, 0, 0, 0);

hero.printToFile('../../out/hanzo.json');