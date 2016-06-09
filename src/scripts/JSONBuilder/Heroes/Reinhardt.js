var Hero = require('./Hero.js');

var hero = new Hero('reinhardt', 'Reinhardt', 300, 200, 0, 100, 1, 'Tank');
//Supports
hero.addInnerHero('Bastion', 0, 0, 75, 0);
hero.addInnerHero('McCree', 0, 0, 75, 0);
hero.addInnerHero('Soldier76', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Torbjorn', 100, 0, 0, 0);
hero.addInnerHero('Zarya', 100, 0, 0, 0);
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);

hero.printToFile('../../out/reinhardt.json');