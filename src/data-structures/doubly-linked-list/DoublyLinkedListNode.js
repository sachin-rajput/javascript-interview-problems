/**
 * Base Node Object for Doubly Linked List
 * @param {Any} value
 * @param {DoublyLinkedListNode} next
 * @param {DoublyLinkedListNode} prev
 */
export default class DoublyLinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  /**
   * Prints the Doubly Linked List as a String
   * @param {Function} callback
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
