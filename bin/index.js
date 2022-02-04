#!/usr/bin/env node

// console.log("Hello, World!\n");

// 1. Write a function that return the last element of a list.
function last_element(l) {
  if (l.length >= 1) {
    l.at(-1);
    // l.slice(-1); // I am not sure which is better to use and why.
  }
}

// 2. FInd the last but one (last and penultimate) elements of a list.
function penultimate_element(l) {
  if (l.length >= 2) {
    return l.at(-2);
    // return l.slice(-2);
  }
  else {
    return -1; // return -1 if there is not a second to last element in the array.
  }
}

// 3. Find the K'th element of a list.
function kth_element(l, k) {
  if (l.length >= k) {
    return l.at(-k);
    // return l.slice(-k);
  }
  else {
    return -1;
  }
}

// 4. Find the number of elements of a list.
function len(l) {
  return l.length;
}

// 5. Reverse a list.
function rev(l) {
  l.reverse();
}

// 6. Find out whether a list is a palindrome
function is_palindrome(l) {
  temp = [...l]; // make a copy of the array.
  temp.reverse();
  if (temp == l){
    return True;
  }
  return False;
}

// 7. Flatten a nested list structure.
function flatten_array(l) {

}
