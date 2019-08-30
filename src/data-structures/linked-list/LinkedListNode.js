/**
 * Base Node Object for Linked List
 * @param {Any} value
 * @param {LinkedListNode} next
 */
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default LinkedListNode;
