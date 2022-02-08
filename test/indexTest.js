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

  describe('is_palindrome()', function() {
    it('function should return True if input is a palindrome.', function() {
      assert.equal(index.is_palindrome([1,2,3,2,1]), true);
    });
  });

  describe('flatten_array()', function() {
    it('function should remove nested arrays from input while keeping the contents of said arrays.', function() {
      // assert.equal(index.flatten_array([[[0], [1]], [[2], [3]], [[4], [5]]]), [0, 1, 2, 3, 4, 5]);
      expect(index.flatten_array([[[0], [1]], [[2], [3]], [[4], [5]]])).to.eql([0, 1, 2, 3, 4, 5]);
    });
  });

  describe('remove_dupes()', function() {
    it('function should eliminate consecutive duplicates of list elements.', function() {
      // assert.equal(index.flatten_array([[[0], [1]], [[2], [3]], [[4], [5]]]), [0, 1, 2, 3, 4, 5]);
      expect(index.remove_dupes([0, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5])).to.eql([0, 1, 2, 3, 4, 5]);
    });
  });

});
