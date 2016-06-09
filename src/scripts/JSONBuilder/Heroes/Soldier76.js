var Hero = require('./Hero.js');

var hero = new Hero('soldier76', 'Soldier: 76', 200, 0, 0, 100, 1, 'Offense');
//Supports
hero.addInnerHero('Reinhardt', 0, 0, 75, 0);
hero.addInnerHero('Winston', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Pharah', 100, 0, 0, 0);
hero.addInnerHero('Roadhog', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

hero.printToFile('../../out/soldier76.json');