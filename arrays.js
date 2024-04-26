

const arr = [1,2,3,4];

// To log the initial array values
console.log(arr);


// To add item to end of array, use push() method
arr.push(5);
console.log(arr) // [1,2,3,4,5]


//To add item at begining of array, use unshift() method
arr.unshift(0);
console.log(arr) // [0,1,2,3,4,5]


// To remove item from end of array, use pop() method
arr.pop();
console.log(arr) // [0,1,2,3,4]


// To remove item from begining of array, use shift() method
arr.shift();
console.log(arr) // [1,2,3,4]


// To obtain the values of the array and multiply them, use map() method
const newArr = arr.map(item => {
  return item * 2;
})

console.log(newArr) // will output [0,2,4,6,8]


// To filter an array based on a certain condition eg even numbers
const evenNumbers = arr.filter( item => {
  return item % 2 === 0
})

console.log(evenNumbers) // will output [0,2,4]


// USE OF REDUCE() METHOD
// 1. To find maximum in an array using tenary operator
 const max = arr.reduce((max, current) => {
  return current > max ? current : max
 }, arr[0])

 console.log(max) // will output 5

 // 2. To find maximum in an array using if
 const maxx = arr.reduce((maxx, currrent) => {
  
    if(currrent > maxx) {
      maxx = currrent
    }
    return maxx
  
 }, arr[0])

 console.log(maxx) // will output 5

 // 3. To find minimum in array using if
 const min = arr.reduce((min, current) => {
  if (current < min) {
    min = current
  }
  return min;

 },arr[0])

 console.log(min) // will output 0

 // 4. To find minimum in array using tenary operator
 var minn = arr.reduce((min, currentt) => {
  return currentt < minn ? min : currentt
 }, arr[0])

 console.log(minn) // will output 0


// USE OF SPLICE() METHOD  array.splice(start, deleteCount, item1, item2, ...);
// 1. Removing elements from an array
const array1 = ['A', 'B', 'C', 'D', 'E']
const removed = array1.splice(1,1)
console.log(array1) // will output ['A', 'C', 'D', 'E']
console.log(removed) // will output 'B'

// 2. Replacing elements:
const array2 = ['A', 'B', 'C', 'D', 'E']
const removed1 = array2.splice(0,2,1,2) //after starting from index 0, it deletes 2 items then it replaces with 1 & 2
console.log(array2) // will output ['1', '2', 'C', 'D', 'E']
console.log(removed1) // will output ['A', 'B']

// 3. Adding elements
const array3 = ['A', 'B', 'C']
array3.splice(1, 0, 'g', 'h', 'i')
console.log(array3) // will output ['A', 'g', 'h', 'i', 'B', 'C']

// 4. Removing elements from the end
const array4 = ['A','B','C','D']
array4.splice(-1,2)
console.log(array4) // will output ['A', 'B']

// 5. Replacing elements from the end
const array5 = ['A','B','C','D']
array5.splice(-1,2,'z','h')
console.log(array5) // will output ['A', 'B', 'z', 'h']'


// USE OF SLICE() METHOD array.slice(begin, end)
const array6 = [1,2,3,4,5,6]
array6.slice(2,4)
console.log(array6) // will output [3,4] since end is not included

// Use for..of to print numbers in the array
for (const item of arr) {
  console.log(item) // will print 1234
}


// For..in itterates thru the indices (object keys)
for(const item in arr) {
  console.log(item) // will print 0123
}



// PRACTICE QUESTION
// Write an effective algorithm to remove duplicates from an array and return the new array

//Solution 1
const array7 = [2, 4, 8, 8, 7, 3, 2];
const newArray = [];

for (let i = 0; i < array7.length; i++) {
  if(!newArray.includes(array7[i])) {
    newArray.push(array7[i])
  }
}

console.log(newArray) 


//Solution 2
const array8 = [2, 4, 8, 8, 7, 3, 2];
const newArray8 = array8.map(item => item);

for (let i = 0; i < newArray8.length; i++) {
    const currentItem = newArray8[i];
    const indexOfItem = newArray8.indexOf(currentItem);
    if (indexOfItem !== i) {
        newArray8.splice(indexOfItem, 1);
        i--; 
    }
}

console.log(newArray8); 


/*
When duplicates are removed from an array, and only even numbers are left, 
array A[3,5,3,6,8,3,8,4] will result to   [ 6, 8, 4 ]. and B [56,45,33,98,67,22] 
will result to [ 56, 98, 22 ].  Given the  Array C = [2, 4, 8, 8, 7, 5, 5, 3, 2], 
write an effective algorithm (using array methods) to ensure that the final array 
is a result containing even numbers and have no duplicates and log the result
*/

function solution(A) {

  const newArray = []
  
  for(let i = 0; i < A.length; i++) {
    if(!newArray.includes(A[i])) {
      newArray.push(A[i]);
    }
  }
  const evenArray = newArray.filter(number => {  return number%2 === 0})

  return evenArray

}

console.log(solution([3,5,3,6,8,3,8,4]))


/*
An array of N intergers is shifted K times such that if array A = [28, 30, 32, 33] is rotated 2 times,
the result will be
1st -> [33, 28, 30, 32]
2nd -> [32, 33, 28, 30]

Write an effective algorithm for achieving the same

*/
 

function solution(A, K) {

  for(let i = 0; i < K; i++) {
    let popedItem = A.pop()

    A.unshift(popedItem)
  }

  return A

}

console.log(solution([28, 30, 32, 33], 2));

// Function to give the index of the first occurence of a certain number
function solution(A,N) {

  if(!A.includes(N)) {
    return -1
  }
  return A.indexOf(N)
}

console.log(solution([ 29, 39, 19, 49, 59, 19, 69 ], 19))


/*
ODD OCCURENCES IN AN ARRAY:  [9,3,9,3,9,7,9] = 7
*/

function solution(A) {

  let counts = {}; 

  for (let i = 0; i < A.length; i++) {
    if (counts[A[i]] === undefined) {
      counts[A[i]] = 1; 
    } else {
      counts[A[i]]++; 
    }
  }

  for (let key in counts) {
    if (counts[key] % 2 !== 0) {
      return parseInt(key); 
    }
  }
}

console.log(solution([9,3,9,3,9,7,9]))