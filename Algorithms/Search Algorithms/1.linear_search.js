
/*
Problem
Given an array of n elements and a target element t, find the index of t
in the array. Return -1 if the target element is not found.

Solution:
if:
-> n = [23,22,43,45,65] t = 45, 
  should return 3
-> n = [23,22,43,45,65] t = 12
  should return -1

*/

// Big-O = O(n)
function linearSearch(n, t) {

  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) return i
  }

  return -1
}

console.log(linearSearch([23,22,43,45,65], 45))
console.log(linearSearch([23,22,43,45,65], 12))