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





