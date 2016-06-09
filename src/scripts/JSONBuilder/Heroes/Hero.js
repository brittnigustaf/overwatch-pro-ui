// if (typeof define !== 'function') {var define = require('amdefine')(module);}

var InnerHero = require('./innerHero.js');
var fs = require('fs');

// define(function (require) {
    
    function Hero(id, name, health, armor, shield, speed, difficulty, roll) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.armor = armor;
        this.shield = shield;
        this.speed = speed;
        this.difficulty = difficulty;
        this.roll = roll;
        
        this.heroes = [];
    };
    
    Hero.prototype.addInnerHero = function(name, counters, counteredBy, supports, hinders) {
        this.heroes.push(new InnerHero(name, counters, counteredBy, supports, hinders));
    }
    
    Hero.prototype.printToFile = function(path) {
        fs.writeFile(path, JSON.stringify(this, 4, 4)),  'utf-8';
    }
    
    Hero.prototype.get = function() {
        return this;
    }
    
//     return Hero;
// });
module.exports = Hero;