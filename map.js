/* Charactaristics
1. Unordered collections
2. to retrieve a value, use corresponding keys
3. Are itteratable

*/

// Create a new map
const map = new Map([["a",1],["b",2]])

// To add items to the map use set() method
map.set("c", 3)

// To check if the map has a key, use has() method
console.log(map.has("a"))

// To check if the map has a value, use has() method
function hasValue(map, value) {
  for(const [key,val] of map) {
    if(val === value) {
      return true;
    }
    
  }

  return false;
}

console.log(hasValue([["a",1],["b",2]], 2))

// To get the value associated with a key use get()
 const valueOfA = map.get("a")
 console.log(valueOfA)

// To log the items in the map use for of
for(const [key,value] of map) {
  console.log(`${key}: ${value}`)
}