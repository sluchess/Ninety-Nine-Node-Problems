#!/usr/bin/env node

module.exports = {
  // console.log("Hello, World!\n");

  // 1. Write a function that return the last element of a list.
  last_element: function (l) {
    if (l.length >= 1) {
      return l.at(-1);
      // l.slice(-1); // I am not sure which is better to use and why.
    }
    else {
      return -1;
    }
  },

  // 2. FInd the last but one (last and penultimate) elements of a list.
  penultimate_element: function (l) {
    if (l.length >= 2) {
      return l.at(-2);
      // return l.slice(-2);
    }
    else {
      return -1; // return -1 if there is not a second to last element in the array.
    }
  },

  // 3. Find the K'th element of a list.
  kth_element: function (l, k) {
    if (l.length >= k) {
      return l.at(k);
      // return l.slice(-k);
    }
    else {
      return -1;
    }
  },

  // 4. Find the number of elements of a list.
  len: function (l) {
    return l.length;
  },

  // 5. Reverse a list.
  rev: function (l) {
    l.reverse();
    return l
  },

  // 6. Find out whether a list is a palindrome
  is_palindrome: function (l) {
    var temp = [...l]; // make a copy of the array.
    temp.reverse();
    if (JSON.stringify(temp) === JSON.stringify(l)){
      return true;
    }
    return false;
  },

  // 7. Flatten a nested list structure.
  flatten_array: function (l) {
    return l.flat(Infinity);
  },

  // 8. Eliminate consecutive duplicates of list elements.
  remove_dupes: function (l) {
    var set = new Set(l);
    return Array.from(set);
  },

  // 9. Pack consecutive duplicates of list elements into sublists.
  pack: function (l) {

  },

  // 10. Run-length encoding of a list.
  encode: function (l) {

  },

  // 11. Modify run-length encoding.
  new_encode: function (l) {

  },

  // 12. Decode a run-length encoded list.
  decode: function (l) {

  },

  // 13. Run-length encoding of a list (direct solution).
  new_decode: function (l) {

  }
}
