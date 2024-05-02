
/*
Problem
Given a sorted array of n elements, and a target element t, find the
index of the target element in the array. Return -1 if the target element
is not found.
*/


// Big-O => O(log(n))
function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1)
}

function search(array, target,leftIndex,rightIndex) {
  if(leftIndex > rightIndex) {
    return -1
  }
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if(array[middleIndex] === target) {
    return middleIndex
  }
  else if(array[middleIndex] > target) {
    return search(array, target, leftIndex, middleIndex - 1)
  }
  else {
    return search(array, target, middleIndex + 1, rightIndex)
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); 
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); 
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));