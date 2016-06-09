var Hero = require('./Hero.js');

var hero = new Hero('genji', 'Genji', 200, 0, 0, 100, 3, 'Offense');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Zenyatta', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Bastion', 100, 0, 0, 0);
hero.addInnerHero('Hanzo', 100, 0, 0, 0);
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);

hero.printToFile('../../out/genji.json');