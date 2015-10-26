var assert = require('assert');

var index = require('../src');

describe('Dummy', function() {
  it('should succeed always', function() {
    assert.equal(true, true);
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
