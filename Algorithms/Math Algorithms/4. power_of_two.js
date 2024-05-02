/*
Problem.
Given a positive interger n, determine if its a power of 2 or not

Solution:
eg n = 8
8/2 => 4 (remainder 0)
4/2 => 2 (remainder 0)
2/2 => 1 (remainder 0)

*/

// Approach 1 (Recursive) ==> O(log(n))
function isPowerOf2(n) {
  // if n is less than 1, it is not a power of 2
  if (n < 1) return false

  // if n is 1, it is a power of 2
  if (n === 1) return true

  // if n is not 1, it is not a power of 2
  if (n % 2!== 0) return false

  return isPowerOf2(n / 2)
}

console.log(isPowerOf2(1))
console.log(isPowerOf2(2))
console.log(isPowerOf2(5))

//Approach 2 ==> O(log(n))
function isPowerOfTwo(n) {

  if(n < 1) return false

  while (n > 1){

    if(n % 2!== 0) return false
    n = n / 2
  }
  return true
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))

// Bitwise Solution

function isPowerOfTwoBitwise(n) {

  if(n < 1) return false

  while (n > 1){

    if((n & 1)!== 0) return false
    n = n >> 1
  }
  return true 
}

console.log(isPowerOfTwoBitwise(1))
console.log(isPowerOfTwoBitwise(2))
console.log(isPowerOfTwoBitwise(5))

