import LinkedList from "../linked-list/LinkedList";

export default class Stack {
  constructor() {
    // We're going to implement Stack based on LinkedList since these
    // structures are quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList();
  }

  // pop, toString, toArray

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
}
