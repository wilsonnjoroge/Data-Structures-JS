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
    return this.currentLength === capacity
  }

  isEmpty() {
    return this.currentLength === 0
  }

  enqueue(element) {
    //check if the array is full. if its not start adding
    if(!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity; // make the rear to point at index 0 ((-1 + 1) % 0 = 0)
      this.queue[this.rear] = element; // add element to the new position of rear
      this.currentLength += 1; // increase the current size to by 1
      // check if the front is still pointing to -1 even after adding an item
      if(this.front === -1) {
        this.front = this.rear
      }
    }
  }

  dequeue() {
    // check if the queue is empty
    if(this.isEmpty()){
      return "The queue is empty"
    }
    const item = this.queue[this.front]; // store the item at the front in a variable
    this.queue[this.front] === null; // set the index of the item to be removed to be null
    this.front = (this.front + 1) % this.capacity; // increment the front pointer with 1 so as to delete the next item
    this.currentLength -= 1 // decrement the length by 1

    // Once the items have been deleted, reset the front and rear to -1
    if(this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }

    return item;
  }

  peek() {
    if(!this.isEmpty()) {
      return this.queue[this.front]
    }

    return "There are no items in the queue"
  }

  print() {
    if(this.isEmpty()) {
      return "The queue is empty"
    } else {
      let i;
      let string = '';
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        string += this.queue[i] + ''
      }
      string += this.queue[i]
      console.log(string)
    }

  }
}