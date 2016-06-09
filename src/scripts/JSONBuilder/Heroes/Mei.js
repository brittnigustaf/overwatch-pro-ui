var Hero = require('./Hero.js');

var hero = new Hero('mei', 'Mei', 250, 0, 0, 100, 3, 'Defense');
//Supports
hero.addInnerHero('Hanzo', 0, 0, 75, 0);
hero.addInnerHero('Lucio', 0, 0, 75, 0);
hero.addInnerHero('Reaper', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Genji', 100, 0, 0, 0);
hero.addInnerHero('Lucio', 100, 0, 0, 0);
hero.addInnerHero('DVa', 100, 0, 0, 0);

hero.printToFile('../../out/mei.json');