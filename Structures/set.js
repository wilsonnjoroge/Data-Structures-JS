/* Characteristics 
1. entries are unique
2. can have mix of data types
3. Size is dynamicaly sized
4. Does not mentain insertion order (LIFO)
5. Are itterable n can be used in for of loop
*/

// Create a set of array
const set = new Set([23,65,88,56,89,22]);

// To add item in set
set.add(34)
console.log(set)

// To add a number at the begining of the set
const set2 = new Set([23,65,88,56,89,22]);

const array = Array.from(set2)
array.unshift(34)
const shiftedSet = new Set(array)

console.log(shiftedSet)

// To check if a set has an item
const set3 = new Set([23,65,88,56,89,22]);

console.log(set3.has(23)) // will return true if the set has the item

// To remove an item from the set use delete ()
const set4 = new Set([23,65,88,56,89,22]);

set4.delete(23)
console.log(set4)

// To check the size of the set use size without the ()
const set5 = new Set([23,65,88,56,89,22]);
console.log(set5.size)

// To delete the items in the set, use clear()
const set6 = new Set([23,65,88,56,89,22]);
set6.clear()
console.log(set6)

//Get the items in the set use for of loop
for(const item of set) {
  console.log(item);
}
