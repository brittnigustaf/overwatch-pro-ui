var Hero = require('./Hero.js');

var hero = new Hero('mercy', 'Mercy', 200, 0, 0, 100, 1, 'Support');
//Supports
hero.addInnerHero('Hanzo', 0, 0, 75, 0);
hero.addInnerHero('Junkrat', 0, 0, 75, 0);
hero.addInnerHero('Pharah', 0, 0, 75, 0);

//Counters
hero.addInnerHero('Reinhardt', 50, 0, 0, 0);
hero.addInnerHero('Winston', 50, 0, 0, 0);

hero.printToFile('../../out/mercy.json');