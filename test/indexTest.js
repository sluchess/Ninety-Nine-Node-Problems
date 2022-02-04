const assert = require('chai').assert;
const index = require('../bin/index');

// Results
// last_element_result = index.last_element();


describe('Index', function() {
  describe('last_element()', function() {
    it('function should return the last element of an array.', function() {
      assert.equal(index.last_element([5,2,6,7,1]), 1);
    });
  });

  describe('penultimate_element()', function() {
    it('function should return the second to last element of the array.', function() {
      assert.equal(index.penultimate_element([5,2,6,7,1]), 7);
    });
  });

  describe('kth_element()', function() {
    it('function should return the kth element of the array.', function() {
      assert.equal(index.penultimate_element([5,2,6,7,1], 2), 6);
    });
  });

});
