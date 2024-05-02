
/* 
Problem
Given a number n, find the first n elements of the febonacci sequence.

Solution:
Febonacci sequence is one that each number is the sum of two preceeding numbers. 
ie: 
-> febonacci(2) = 0, 1
-> febonacci(3) = 0, 1, 1

if F reps the function and n the number,

Fn = Fn-1 + Fn-2 

so if n = 2, F2 = F2-1 + F2-2 => F2 = 1

Base case = F0 = 0, F1 = 1
*/

// Big-O = O(n)
function recursiveFebonacci(n) {
  // base case
  if (n < 2) return n

  // recursive case
  return recursiveFebonacci(n - 1) + recursiveFebonacci(n - 2)
}

console.log(recursiveFebonacci(0))
console.log(recursiveFebonacci(1))
console.log(recursiveFebonacci(2))
console.log(recursiveFebonacci(6))
console.log(recursiveFebonacci(7))