// if (typeof define !== 'function') {var define = require('amdefine')(module);}

var fs = require('fs');

// define(function (require) {
    
    function Map(id, name, mode) {
        this.id = id;
        this.name = name;
        this.mode = mode;
        
        this.variants = [];
        this.heroes = [];
    };
    
    Map.prototype.addHero = function(name, weight, direction) {
        var hero = {}
        hero.name = name;
        hero.weight = weight;
        hero.direction = direction;
        this.heroes.push(hero);
    }
    Map.prototype.addVariant = function(variant) {
        this.variants.push(variant);
    }
    
    Map.prototype.get = function() {
        return this;
    }
    
//     return Map;
// });

module.exports = Map;