/*
Problem
Given a sorted array of n elements, and a target element t, find the
index of the target element in the array. Return -1 if the target element
is not found.

Solution:
Binary Search works with sorted arrays. If the array is not sorted,
sort it first then proceed to perform the binary search.

if:
-> n = [-5, 2, 4, 6, 10] and t = 10
 then should return 4
-> n = [-5, 2, 4, 6, 10] and t = 6
 then should return 3
-> n = [-5, 2, 4, 6, 10] and t = 20
 then should return -1

 Guide:
-> if array is empty then return -1
-> if not empty, find the middle element and return the element if
 equal to the target element
-> if target element is less than the middle element, search the left
 half of the array
-> if target element is greater than the middle element, search the
 right half of the array
*/

// Big-O => O(log(n))
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === target) {
      return middle; // Target found, return its index
    } else if (array[middle] < target) {
      start = middle + 1; // Adjust start pointer
    } else {
      end = middle - 1; // Adjust end pointer
    }
  }

  return -1; // Return -1 if target is not found
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); 
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); 
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); 
