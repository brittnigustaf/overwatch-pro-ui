var Hero = require('./Hero.js');

var hero = new Hero('reaper', 'Reaper', 250, 0, 0, 100, 1, 'Offense');
//Supports
hero.addInnerHero('Lucio', 0, 0, 75, 0);
hero.addInnerHero('Zarya', 0, 0, 75, 0);
hero.addInnerHero('Mei', 0, 0, 75, 0);


//Counters
hero.addInnerHero('Mei', 100, 0, 0, 0);
hero.addInnerHero('Roadhog', 100, 0, 0, 0);
hero.addInnerHero('Winston', 100, 0, 0, 0);

hero.printToFile('../../out/reaper.json');