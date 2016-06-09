var Hero = require('./Hero.js');

var hero = new Hero('pharah', 'Pharah', 200, 0, 0, 100, 1, 'Offense');
//Supports
hero.addInnerHero('Mercy', 0, 0, 75, 0);
hero.addInnerHero('Zarya', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Junkrat', 100, 0, 0, 0);
hero.addInnerHero('Reaper', 100, 0, 0, 0);
hero.addInnerHero('Zarya', 100, 0, 0, 0);

hero.printToFile('../../out/pharah.json');