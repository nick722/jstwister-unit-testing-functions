const sum = require('./sum.js');

describe('sum suite', function () {
    test('Should add 2 positive numbers together and return the result', function() {
        expect(sum(1,2).toBe(3));
    });
});