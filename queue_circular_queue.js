// CIRCULR QUEUE

/*Characteristics
1. Has fixed size and a single block of memory
2. Follows the FIFO pattern
3. Will reuse the empty block created after dequeueing
4. Suppors the two built in operations ie enqueue & dequeue
 -> Enqueue adds items to the rear of the queue
 -> Dequeue removes items from the front of the queue

*/

class CircularQueue {
  constructor(capacity) {
    this.queue = new Array(capacity);
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity
  }

  isEmpty() {
    return this.currentLength === 0
  }

  enqueue(element) {
    // Check if the array is full. If it's not, start adding.
    if (!this.isFull()) {
      // make the rear to point at index since if a > b, a % b = a  but if a <b, a % b = remainder
      this.rear = (this.rear + 1) % this.capacity;
      // Add the element to the position pointed by the rear
      this.queue[this.rear] = element;
      // Increase the current size of the queue by 1
      this.currentLength += 1;
      // If the front is still pointing to -1 even after adding an item, update it to the rear
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  

  dequeue() {
    // Check if the queue is empty
    if (this.isEmpty()) {
      return "The queue is empty";
    } 
    // Store the item at the front in a variable
    const item = this.queue[this.front];
  
    // Set the index of the item to be removed to null
    this.queue[this.front] = null;
  
    // Increment the front pointer by 1 to delete the next item
    this.front = (this.front + 1) % this.capacity;
  
    // Decrement the length by 1
    this.currentLength -= 1;
  
    // Once the items have been deleted, reset the front and rear to -1
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
  
    // Return the removed item
    return item;
  }
  

  peek() {
    if(!this.isEmpty()) {
      return this.queue[this.front]
    }

    return "There are no items in the queue"
  }

  print() {
    // Check if the queue is empty
    if (this.isEmpty()) {
      return "The queue is empty";
    } else {
      let i;
      let string = '[ ';
      // Iterate over the queue from front to rear
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        string += this.queue[i] + ', '; // Append each element to the string
      }
      string += this.queue[i] + ' ]'; // Append the last element to the string
      console.log(string); // Print the string containing the queue elements
    }
  }
  
}

// Create a circular queue
const queue = new CircularQueue(6);

// Add items to the queue
queue.enqueue(10);
queue.print();
queue.enqueue(20);
queue.print();
queue.enqueue(30);
queue.print();
queue.enqueue(40);
queue.print();
queue.enqueue(50);
queue.print();
queue.enqueue(10);
queue.print();
queue.enqueue(70);
queue.print();

// To remove an item from the queue
queue.dequeue();
queue.print();

// to check if the queue is empty
console.log("Is the queue empty? " + queue.isEmpty());

// To check if the queue is full
console.log("Is the queue full? " + queue.isFull());