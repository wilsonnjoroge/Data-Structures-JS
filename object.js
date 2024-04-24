
// Create an object, use curly braces {}
const obj = {name : "Wilson",age : 25, "hobbies-name" : "Karate"}

console.log(obj.name)
console.log(obj.age)

// To access keys with quotes/hyphens
console.log(obj["hobbies-name"])

// To add in the object
obj.career = "Software Developer";
obj.sex = "Male"
console.log(obj)

// To delete, use the delete operator
delete obj.sex
console.log(obj)

// To add a function
obj.sayHi = function () {
  console.log("Greetings " + this.name )
}

obj.sayHi();

// To obtain the keys in an object
const objKeys = Object.keys( obj );
console.log( objKeys )

// To obtain values in an object
const objvalues = Object.values( obj );
console.log( objvalues )

// The Entries() method is used to retrieve an array containing the key-value pairs of the object as arrays
const objEntries = Object.entries( obj );
console.log( objEntries )


/* TIME COMPLEXITY

1. O(1) -> Constant
-> Access
-> Insert
-> Remove

2. O(n) -> Linear Time
-> Search
-> Object.keys()
-> Object.values()
-> Object.entries()

*/
