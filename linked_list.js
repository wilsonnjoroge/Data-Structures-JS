// LINKED LIST

/* Characteristics
1. Linear
2. Has nodes pointing to the next and values to store the values
3. Access of item is not feaseble since its linear
4. Does not store item in order

*/

// Define the node class
class Nodes {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the linked list class
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  //Adding item at the begining of the linked list
  prepend(value) {
    const node = new Nodes(value);
    if(this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head;
      this.head = node
    }

    this.length++;
  }

  //Adding item at the end of the linked list
  append(value) {
    const node = new Nodes(value); // Create a new node with the provided value
    if (this.isEmpty()) {
      // If the linked list is empty, set the new node as the head
      this.head = node;
    } else {
      // If the linked list is not empty, traverse to find the last node
      let previous = this.head;
      while (previous.next) {
        // Traverse until you reach the last node (where next is null)
        previous = previous.next;
      }
      // Set the next pointer of the last node to the new node
      previous.next = node;
    }
    this.length++; // Increment the length of the linked list
  }


  insert(value, index) {
    // Inserting at an invalid index 
    if(index < 0 || index > this.size()) {
      console.log("Invalid index");
      return
    }
    // Inserting at index 0, the first index
    if(index === 0) {
      this.prepend(value)
    }
    // Inserting at a valid index and the list is not empty index > 0
    else {
      const node = new Nodes(value)
      let previous = this.head;
      for(let i = 0; i < index-1; i++) {
        previous = previous.next;
      }
      node.next = previous.next
      previous.next = node
      this.length++; // Increment the length by 1
    }
  }

  // Remove items from the list
  remove(index) {
    // Deleting at an invalid index
    if(index < 0 || index >= this.size()) {
      console.log("Invalid index")
      return
    }
    // Deleting at the first index (head 0)
    let removedNode;
    if(index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    }
    // Deleting at an index when the list is not empty index > 0
    else{
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next
      }
      removedNode = previous.next;
      previous.next = removedNode.next
    }
    this.length--
    return removedNode.value
  }


  removeNode(value) {
    if(this.isEmpty()) {
      console.log("The list is empty")
      return
    }
    // Removing first value from the list (value = index 0)
    if(this.head.value === value) {
      this.head.next = this.head;
      this.length--
      console.log("The value has been deleted")
      return "[" +value+"]"
    }
    // Removing value from the list (value > index 0)
    else {
      let previous = this.head
      while(previous.next && previous.next.value !== value) {
        previous = previous.next
      }
      if(previous.next) {
        let removedNode = previous.next
        previous.next = removedNode.next
        this.length--
        console.log("The value has been deleted")
        return "[" +value+"]"
      }
      console.log("The value to be deleted not found")
      
    }
  }


  // Return the first index of a value occurence
  searchNode(value) {
    if(this.isEmpty()) {
      console.log("The list is empty")
      return -1
    }
    let index = 0
    let current = this.head
    while(current) {
      if(current.value === value) {
        return index
      }
        current = current.next
        index++; 
    }
    return -1
  }
  

  print() {
    // Check if the linked list is empty
    if (this.isEmpty()) {
      console.log('The linked list is empty');
    } else {
      // Initialize a variable to keep track of the current node
      let current = this.head;
      // Initialize an empty string to store the values of the linked list
      let listValues = '[ ';
      // Traverse the linked list starting from the head
      while (current) {
        // Append the value of the current node to the listValues string
        listValues += current.value;
        // Append the value of the current node with a comma if its not the last item
        if(current.next){
          listValues += ', ';
        }
        // Move to the next node in the linked list
        current = current.next;
      }
      // If its the last item, omit the comma and append a closing square bracket
      listValues += ' ]'
      // Print the values of the linked list
      console.log(listValues);
    }
  }
  
  
}

// create a new linked list
const linkedList = new LinkedList();

//check if the linked list is empty
console.log('Is the linkedList empty? ', linkedList.isEmpty());

// Check the size of the linked list
console.log('The size of the linkedList is: ', linkedList.size());

// Add items to the begening of the linked list
linkedList.prepend(10)
linkedList.print();
linkedList.prepend(20)
linkedList.prepend(30)
linkedList.prepend(50)
linkedList.print();

// Add items to the end of the linked list
linkedList.append(98)
linkedList.append(99)
linkedList.print();

// Insert item at a certain position
linkedList.print();
linkedList.insert(7, 5)
linkedList.print();

// Remove item at a certain position
linkedList.remove(98);

const newList = new LinkedList()
newList.append(19)
newList.append(19)
newList.append(29)
newList.append(39)
newList.append(49)
newList.append(59)
newList.append(69)
newList.print();

console.log(newList.searchNode(19))
console.log(newList.searchNode(1))

newList.remove(0)
newList.remove(1)
newList.remove(2)
newList.print();
console.log(newList.isEmpty())
console.log(newList.removeNode(69))
console.log(newList.removeNode(29))
console.log(newList.removeNode(49))
console.log(newList.removeNode(69))
newList.print();





// Remove node from list = linear
// Remove head from list = constant

