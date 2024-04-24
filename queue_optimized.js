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

}