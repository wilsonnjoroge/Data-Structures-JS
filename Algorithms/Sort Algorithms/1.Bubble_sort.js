
/*
Problem
Given an array of n positive intergers, sort the array

Solution:
-> Compare the numbers at the begining to  the one adjascnt. 
-> if the number is greater swap tthe numbers

*/

function bubbleSortDescending(arr) {
  let swapped;
  do {
    swapped = false;
  for(let i = 0; i < arr.length - 1; i++) {
    //to sort in descending order
    if(arr[i] < arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  }
  } while(swapped)

  return arr;
}

console.log(`Sorting [-6, 10, -2, 8, 22] in descending order: `, bubbleSortDescending([-6, 10, -2, 8, 22]))
function bubbleSortAscending(arr) {
  let swapped;
  do {
    swapped = false;
  for(let i = 0; i < arr.length - 1; i++) {
    //to sort in ascending order
    if(arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  }
  } while(swapped)

  return arr;
}

console.log(`Sorting [-6, 10, -2, 8, 22] in ascending order: `, bubbleSortAscending([-6, 10, -2, 8, 22]))