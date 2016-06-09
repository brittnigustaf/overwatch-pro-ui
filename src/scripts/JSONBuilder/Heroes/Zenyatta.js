var Hero = require('./Hero.js');

var hero = new Hero('zenyatta', 'Zenyatta', 50, 0, 100, 100, 3, 'Support');
//Supports
hero.addInnerHero('Genji', 0, 0, 75, 0);
hero.addInnerHero('Reaper', 0, 0, 75, 0);
hero.addInnerHero('Pharah', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Zarya', 100, 0, 0, 0);
hero.addInnerHero('Winston', 100, 0, 0, 0);
hero.addInnerHero('Roadhog', 100, 0, 0, 0);

hero.printToFile('../../out/zenyatta.json');