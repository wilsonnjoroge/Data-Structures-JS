
/* 
Problem
Given an interger n, find the factorial of the interger

Solution:
factorial if n = 1 is (1)
factorial if n = 2 is (2 * 1)
factorial if n = 3 is (3 * 2 * 1)
factorial if n = 4 is (4 * 3 * 2 * 1)

So the trend ==> n! = n * (n - 1)!
1! = 1 * 0!
2! = 2 * 1!
3! = 3 * 2!
4! = 4 * 3! 

*/

function recursiveFactorial(n) {
  if(n === 0) return 1
  return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(1))
console.log(recursiveFactorial(2))
console.log(recursiveFactorial(5))

