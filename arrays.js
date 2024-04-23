
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
// 1. To find maximum in an array using if
 const max = arr.reduce((max, current) => {
  return current > max ? current : max
 }, arr[0])

 console.log(max) // will output 5

 // 2. To find maximum in an array using tenary operator
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


