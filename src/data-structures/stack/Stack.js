import LinkedList from "../linked-list/LinkedList";

export default class Stack {
  constructor() {
    // We're going to implement Stack based on LinkedList since these
    // structures are quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList();
  }

  /**
   * Check if the stack is empty
   */
  isEmpty() {
    return this.linkedList.head === null;
  }

  /**
   * Call LinkedList prepend method, to insert from head
   * @param {*} value
   * @returns {Stack}
   */
  push(value) {
    this.linkedList.prepend(value);
    return this;
  }

  /**
   * Returns the top of the stack item / node
   * @returns {*} any
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.linkedList.head;
  }

  /**
   * Pop the item from the top from the Stack
   */
  pop() {
    if (this.isEmpty()) return null;
    return this.linkedList.deleteHead();
  }

  /**
   * Print the Stack as String
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }

  /**
   * Convert the stack as an array
   */
  toArray() {
    return this.linkedList.toArray();
  }
}
