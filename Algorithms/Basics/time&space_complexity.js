/*
  Time Complecity
-> Amount of time taken for an algorith to run as a function of input size

  Space Complecity
-> Amount of space taken for an algorith to run as a function of input size


Both are measured using : 
1. Asymptotic notations
-> Mathematical tools to represent time and space
  a) Big-O notation - for worst case complexity
  b) Omega Notation - for best case complexity
  c) Theta Notation - for average case complexity

BIG-O notation
-> describes using algebraic expressions
-> expressed in terms of inputs
-> focuses on bigger picture


* TIME COMPLEXITY CHEAT SHEET
-> not dependent on input size = O(1) - Constant Time
-> one loop = O(n) - Linear Time
-> two nested loops = O(n^2) 
-> input size reduced by half = O(log(n)) 

*/

/*

Example 1:
Addition of two numbers

*/

function summation (a, b) {

  let result = a + b

    return result
  }

console.log("Example 1: ",summation(2,3))

/*

Example 2 
Addition of n natural numbers

if n = 1, sum of n = 1
if n = 2, sum of n = 1 + 2 = 3
if n = 3, sum of n = 1 + 2 + 3 = 6

*/

// time complecity = O(n) - Linear Time
function summation2 (n) {
  let result = 0
  for (let i = 0; i <= n; i++) {
    result += i
  }
  return result
}

console.log("Example 2: When n=1 the result is ", summation2(1))
console.log("Example 2: When n=2 the result is ", summation2(2))
console.log("Example 2: When n=3 the result is ", summation2(3))


/*

Example 3 
Addition of n natural numbers

if n = 1, sum of n = 1
if n = 2, sum of n = 1 + 2 = 3
if n = 3, sum of n = 1 + 2 + 3 = 6

*/

// time complecity = O(1) - Constant Time
function summation3(n){
  return (n*(n+1))/2
}

console.log("Example 3: When n=1 the result is ", summation3(1))
console.log("Example 3: When n=2 the result is ", summation3(2))
console.log("Example 3: When n=3 the result is ", summation3(3))

   