// QUEUES using arrays

/* Characteristics
1. FIFO
2. Abstract
3. Linear D.S
*/

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if(this.isEmpty()) {

      return "Queue is empty"
    }

    return this.queue.shift()
  }

  peek() {
    const firstItem = this.queue[0];
    if(!firstItem) {
      return "No items in the queue";
    }

    return firstItem;
  }

isEmpty() {
  const size = this.queue.length;
  if( size === 0) {
    return true
  }

  return false;
}

size() {
  return this.queue.length;
}

}

// Create a queue
const queue = new Queue()

// To add a new queue
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);

console.log(queue)

// To get the size of the queue
console.log(queue.size())

// To remove item from queue (The one entered first)
queue.dequeue();
console.log(queue)

// To get the first item in the queue
console.log(queue.peek())

// To check if the queue is empty
console.log(queue.isEmpty())

