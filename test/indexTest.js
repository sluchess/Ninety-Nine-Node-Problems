const assert = require('chai').assert;
const expect = require('chai').expect;
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
      assert.equal(index.kth_element([5,2,6,7,1], 2), 6);
    });
  });

  describe('len()', function() {
    it('function should return the length of the array.', function() {
      assert.equal(index.len([1,3,6,1,7]), 5);
    });
  });

  describe('rev()', function() {
    it('function should return the input array in reversed order.', function() {
      // assert.equal(index.rev([5,4,3,2,1]), [1,2,3,4,5]);
      expect(index.rev([5,4,3,2,1])).to.eql([1,2,3,4,5]);
    });
  });

});
