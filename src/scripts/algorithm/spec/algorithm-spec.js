describe("Algorithm", function() {
    var Algo = require('../algorithm');
    var algo;

    beforeEach(function() {
        algo = new Algo();
    });

    it("algo test does something", function() {
        algo.run();
        expect(true).toBe(true);
    });
});
