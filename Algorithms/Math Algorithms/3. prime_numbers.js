
/*
Problem
Given a natural number n, determine if its prime or not

Solution:
A prime number is a natural number greater than 1 and that is not
a product of two smaller natural numbers.

eg:
--> isPrime(5) -> 1*5 or 5*1....true
--> isPrime(4) -> 1*4 or 2*2 or 4*1...false

*/

function isPrime(n) {
  // Prime should be greater than 1
  if(n < 2){
    return false;
  }

  for( let i = 2; i < n; i++ ) {
    // as long as i < n check if at any instance of i, the remainder is 0
    if(n % i === 0) {
      return false;
    }
  }
  // if loop exists with no instance of i having a 0 remainder, then n is prime
  return true;
}

console.log(`-2 is a prime number: `,isPrime(-2))
console.log(`0 is a prime number: `, isPrime(0))
console.log(`4 is a prime number: `, isPrime(4))
console.log(`5 is a prime number: `, isPrime(5))
console.log(`7 is a prime number: `, isPrime(7))
console.log(`9 is a prime number: `, isPrime(9))
