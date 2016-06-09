var Hero = require('./Hero.js');

var hero = new Hero('lucio', 'Lúcio', 200, 0, 0, 100, 2, 'Support');
//Supports
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);
hero.addInnerHero('Reaper', 0, 0, 75, 0);
hero.addInnerHero('Roadhog', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Genji', 50, 0, 0, 0);
hero.addInnerHero('Reaper', 50, 0, 0, 0);
hero.addInnerHero('Roadhog', 50, 0, 0, 0);

hero.printToFile('../../out/lucio.json');