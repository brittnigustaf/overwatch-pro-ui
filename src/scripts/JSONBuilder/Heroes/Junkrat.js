var Hero = require('./Hero.js');

var hero = new Hero('junkrat', 'Junkrat', 200, 0, 0, 100, 2, 'Defense');
//Supports
hero.addInnerHero('Mercy', 0, 0, 75, 0);
hero.addInnerHero('Winston', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Mei', 100, 0, 0, 0);
hero.addInnerHero('Tracer', 100, 0, 0, 0);

hero.printToFile('../../out/junkrat.json');