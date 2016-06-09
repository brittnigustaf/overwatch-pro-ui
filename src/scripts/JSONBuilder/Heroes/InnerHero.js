// if (typeof define !== 'function') {
//     var define = require('amdefine')(module);
// }
// define(function (require) {
    function InnerHero(name, counters, counteredBy, supports, hinders) {
        this.names = name;
        this.counters = counters;
        this.counteredBy = counteredBy;
        this.supports = supports;
        this.hinders = hinders;
    };
//     return InnerHero;
// });

module.exports = InnerHero;