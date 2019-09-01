import LinkedList from "../linked-list/LinkedList";

export default class Queue {
  constructor() {
    this.linkedlist = new LinkedList();
  }

  /**
   * Check if the queue is empty
   */
  isEmpty() {
    return this.linkedlist.head === null;
  }

  /**
   * Enqueue an item in the queue, from tail
   * @return {Queue} Queue Object
   */
  enqueue(value) {
    this.linkedlist.append(value);
    return this;
  }

  /**
   * Peek into the queue and get the item at head position
   * @return {*} any
   */
  peek() {
    return this.isEmpty() ? null : this.linkedlist.head.value;
  }

  /**
   * Removes a node from the head position
   * @return {LinkedListNode} LinkedListNode Object
   */
  dequeue() {
    if (this.isEmpty()) return null;
    return this.linkedlist.deleteHead();
  }

  /**
   * Returns queue in Array Format
   * @return {[*]} Array
   */
  toArray() {
    return this.linkedlist.toArray();
  }

  /**
   * Prints the Queue in string format
   * @param {Function} callback
   */
  toString(callback) {
    return this.linkedlist.toString(callback);
  }
}
