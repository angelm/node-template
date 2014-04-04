var should = require('should');
var assert = require('assert');

describe("Testing the test framework", function() {
    it("should run Mocha.", function() {
        assert.equal(1, 1);
    });
    it("should run Should", function() {
        true.should.equal(true);
    });
});