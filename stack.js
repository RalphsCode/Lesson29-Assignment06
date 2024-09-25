/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {  // LIFO
  constructor() {
    this.first = null;
    this.last = null;
    this.prev = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    
    if (this.first == null){
      // Prior to the push the Stack is empty
      this.first = newNode;
      this.last = newNode; 
    } else {
      // Stack has existing nodes
      newNode.prev = this.last;
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return;
  }  // END push()

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
      // Create variable of Node being popped
      const popped = this.last;

      if (popped == null) {
        throw new Error ("The stack is empty, nothing popped.")

      } else if (popped.prev == null) {
        // final remaining Node being popped
          this.first = null;
          this.last = null;
          this.prev = null;

      } else {
        // There are remaining nodes after popping
        this.last = popped.prev;
        this.last.next = null;
      }

      this.size--;

      return popped.val;
    }  // END pop()

  /** peek(): return the value of the first node in the stack. */

  peek() {
    const firstNode = this.first;
    return firstNode;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.first){
      return false;
    }
    return true;
  }
}  // END Stack Class

module.exports = Stack;

