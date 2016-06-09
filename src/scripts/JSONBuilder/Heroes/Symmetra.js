var Hero = require('./Hero.js');

var hero = new Hero('symmetra', 'Symmetra', 100, 0, 100, 100, 2, 'Support');
//Supports
hero.addInnerHero('Tracer', 0, 0, 75, 0);
hero.addInnerHero('Zenyatta', 0, 0, 75, 0);

//Counters
hero.addInnerHero('DVa', 100, 0, 0, 0);
hero.addInnerHero('Genji', 100, 0, 0, 0);
hero.addInnerHero('Widowmaker', 100, 0, 0, 0);

hero.printToFile('../../out/symmetra.json');