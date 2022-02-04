const assert = require('chai').assert;
const index = require('../bin/index');

// Results
// last_element_result = index.last_element();


describe('Index', function() {
  it('function should return the last element of an array.', function() {
    assert.equal(index.last_element([5,2,6,7,1], 1));
  });
});
