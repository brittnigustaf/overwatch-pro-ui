var Hero = require('./Hero.js');

var hero = new Hero('widowmaker', 'Widowmaker', 200, 0, 0, 100, 2, 'Defense');
//Supports
hero.addInnerHero('Winston', 0, 0, 75, 0);
hero.addInnerHero('Zenyatta', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Bastion', 100, 0, 0, 0);
hero.addInnerHero('Torbjorn', 100, 0, 0, 0);
hero.addInnerHero('Zenyatta', 100, 0, 0, 0);

hero.printToFile('../../out/widowmaker.json');