
/* 
Problem
Given an interger n, find the factorial of the interger

Solution:
factorial if n = 1 is (1)
factorial if n = 2 is (2 * 1)
factorial if n = 3 is (3 * 2 * 1)
factorial if n = 4 is (4 * 3 * 2 * 1)

*/


// The Big-O = O(n)
function factorial(n) {
  // initialize result at 1 since 0! and 1! are 1
  let result = 1

  // itterate from when i = 2 and as long as i <= n
  for (let i = 2; i <= n; i++) {
    result = result * i
  }

  return result
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));