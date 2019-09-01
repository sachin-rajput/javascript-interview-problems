import Comparator from "../../utils/comparators";
import DoublyLinkedListNode from "./DoublyLinkedListNode";

export default class DoublyLinkedList {
  /**
   * Initialize DoublyLinkedList with optional compare function.
   * @param {Function} compareFunction
   */
  constructor(compareFunction) {
    /** @var DoublyLinkedListNode */
    this.head = null;

    /** @var DoublyLinkedListNode */
    this.tail = null;

    this.compare = new Comparator(compareFunction);
  }

  /**
   * Check if the list is empty
   */
  isEmpty() {
    return this.head === null && this.tail === null;
  }

  /**
   * Adds a node from the head position
   * @param {*} value
   * @returns {DoublyLinkedList} DoublyLinkedList Object
   */
  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (!this.isEmpty()) this.head.prev = newNode;
    this.head = newNode;
    if (this.isEmpty()) this.tail = newNode;

    return this;
  }

  /**
   * Adds a node from the tail position
   * @param {*} value
   * @returns {DoublyLinkedList} DoublyLinkedList Object
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value, null, this.tail);
    if (!this.isEmpty()) this.tail.next = newNode;
    if (this.isEmpty()) this.head = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * Delete the first occurence of node by value from the list.
   * @param {*} value
   * @returns {DoublyLinkedListNode} DoublyLinkedListNode Object
   */
  delete(value) {
    if (this.isEmpty()) return null;

    let currentNode = this.head;
    let deletedNode = null;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        if (this.head === currentNode) deletedNode = this.deleteHead();
        if (this.tail === currentNode && !deletedNode) deletedNode = this.deleteTail();
        if (!deletedNode) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          deletedNode = currentNode;
        }
        return deletedNode;
      }
      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  /**
   * Delete a node from the head position from the list.
   * @returns {DoublyLinkedListNode} DoublyLinkedListNode Object
   */
  deleteHead() {
    if (this.isEmpty()) return null;

    const deletedNode = this.head;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;

    return deletedNode;
  }

  /**
   * Delete a node from the tail position from the list.
   * @returns {DoublyLinkedListNode} DoublyLinkedListNode Object
   */
  deleteTail() {
    if (this.isEmpty()) return null;

    const deletedNode = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;

    return deletedNode;
  }

  /**
   * Find the first occurence of the value and
   * return the DoublyLinkedList
   * @param {*} value
   * @return {DoublyLinkedList} DoublyLinkedList Object
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Convert the doubly linked list to array
   * @returns {[DoublyLinkedListNode]} Array of DoublyLinkedListNode
   */
  toArray() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }

    return arr;
  }

  /**
   * Creates a doubly linked list from an array,
   * defaults to append.
   * @param {DoublyLinkedList} DoublyLinkedList
   */
  fromArray(arr, mode = "append") {
    if (!arr) return null;

    arr.forEach(item => this[mode](item));

    return this;
  }

  /**
   * Convert the list as String
   * @param {{separator: string, callback: function}} object Options to parse the list
   */
  toString({ separator = " ", callback = undefined } = {}) {
    if (this.isEmpty()) return "";

    let currentNode = this.head;
    let strBuffer = "";

    while (currentNode) {
      if (callback) strBuffer += callback(currentNode.value);
      else strBuffer += `${currentNode.value}`;

      if (currentNode.next) strBuffer += separator;

      currentNode = currentNode.next;
    }

    return strBuffer;
  }

  /**
   * Reverses a given DoublyLinkedList
   * @returns {DoublyLinkedList} DoublyLinkedList Object
   */
  reverse() {
    if (this.isEmpty()) return this;

    let currentNode = this.head;
    let nextNode = null;
    let prevNode = null;

    while (currentNode) {
      // store my next node and prev node of current node
      nextNode = currentNode.next;
      prevNode = currentNode.prev;

      // update next and prev of current node
      currentNode.next = prevNode;
      currentNode.prev = nextNode;

      // move prev node to current node and current node to next node
      prevNode = currentNode;
      currentNode = nextNode;
    }

    // reset head and tail
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
