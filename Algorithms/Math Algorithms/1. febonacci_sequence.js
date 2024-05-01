
/* 
Problem
Given a number n, find the first n elements of the febonacci sequence.

Solution:
Febonacci sequence is one that each number is the sum of two preceeding numbers. 
ie: 
-> febonacci(2) = 0, 1
-> febonacci(3) = 0, 1, 1
*/

// The Big O = O(n)
function febonacci(n) {
// initialize an array with the fib of 2
  const fib = [0,1]

  // itterate from fib of 2 as long as i < n
  for(let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }

  // return the fib array with the values
  return fib
}

console.log(febonacci(2))
console.log(febonacci(3))
console.log(febonacci(5))