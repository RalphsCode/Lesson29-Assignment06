/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {  // FIFO
  /* Creates a queue of values, using a Linked List */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    /* Method to add a val to the queue */
    // Create a val node
    const newNode = new Node(val);

    // if the queue is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // add the new node to the existing queue
      this.tail.next = newNode;
      this.tail = newNode; 
    }
    this.size++;
  }  // END enqueue()


  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    /* remove the first node in the queue */
    if (this.head === null) {
      throw new Error("Error: The Queue is empty.");
    }

    // create a variable to return
    const dequeuedVal = this.head;

    // change the head to the next node
    this.head = dequeuedVal.next;

    // if the queue is now empty
    if (this.head === null) {
      this.tail = null;
    }

    this.size--;
    console.log(dequeuedVal.val)
    return dequeuedVal.val;
  }  // END dequeue()


  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.head === null) {
      throw new Error("Error: The Queue is empty.");
    }
    return this.head.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.head) {
      return false;
    }
    return true;
  }
}

module.exports = Queue;
