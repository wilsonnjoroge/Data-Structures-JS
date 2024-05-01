// STACKS

/* Characteristics
1. LIFO
2. Abstract 

Pop() -> removes the most rescent item added in the collection
push() -> adds to the end of the stack
*/

// Creating a Stack from an array
const stacks = [];

// Add items to the 
stacks.push(1);
stacks.push(2);
console.log(stacks);

// Remove items from the stack
stacks.pop();
console.log(stacks);

// Create other custom functions
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {

    this.items.push(item);

    return this.items

  }

  pop(){
    return this.items.splice(-1,1);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size(){
    return this.items.length
  }

  isEmpty(){
    const item = this.items.length;
    if(item == 0) {
      return true
    }

    return false
  }

  clear() {

    const newStack = this.items.splice();

    return newStack
  }

  toArray() {
    return this.items.slice();
  }


}

// Create a stack 
const myStack = new Stack()

// Add items into the stack
myStack.push(11)
myStack.push(22)
myStack.push(33)
myStack.push(44)
myStack.push(55)
myStack.push(55)

// Check if the stack is empty
console.log(myStack.isEmpty())

// To check the size of the stack
console.log(myStack.size())

// To select the last item without deleting it
console.log(myStack.peek())

// To check the values in the stack before pop
console.log(myStack)

// To select the last item and deleting it
console.log(myStack.pop())

// To check the values in the stack after pop
console.log(myStack)

// To clear the stack
console.log(myStack.clear())

// to convert to an array
console.log(myStack.toArray())



