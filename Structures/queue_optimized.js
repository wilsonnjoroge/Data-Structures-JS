// QUEUES using objects

/* Characteristics
1. FIFO
2. Abstract
3. Linear D.S
*/

class Queue {
  constructor() {
    this.queue = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
   this.queue[this.rear] = element;
   this.rear++
  }

  dequeue() {
    const item = this.queue[this.front]
    delete this.queue[this.front]
    this.front++

    return item
  }

  isEmpty() {
    return this.front - this.rear == 0
  }

  peek() {
    return this.queue[this.front]
  }

  size() {
    return this.rear - this.front
  }

  print() {
    console.log(this.queue)
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