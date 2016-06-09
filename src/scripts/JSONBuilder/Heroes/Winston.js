var Hero = require('./Hero.js');

var hero = new Hero('winston', 'Winston', 400, 100, 0, 100, 2, 'Tank');
//Supports
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Zenyatta', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);
hero.addInnerHero('Zenyatta', 100, 0, 0, 0);

hero.printToFile('../../out/winston.json');