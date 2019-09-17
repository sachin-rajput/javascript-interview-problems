import LinkedListNode from "./LinkedListNode";
import Comparator from "../../utils/comparators";

class LinkedList {
  /**
   *
   * @param {Function} [compareFunction]
   */
  constructor(compareFunction) {
    /** @var LinkedListNode */
    this.head = null;
    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(compareFunction);
  }

  /**
   * Check if list is empty
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Insert node from the head position
   * @param {*} value
   * @return {LinkedList} LinkedList Object
   */
  prepend(value) {
    // Make a new node and point next to current this.head
    const newNode = new LinkedListNode(value, this.head);

    // update the head pointer
    this.head = newNode;

    // if tail does not exist, then update this.tail
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * Insert node from the tail position
   * @param {*} value
   * @return {LinkedList} LinkedList Object
   */
  append(value) {
    // Make a new node and point next to null
    const newNode = new LinkedListNode(value);

    // If tail is present, then point it to newNode and update newNode as tail
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    return this;
  }

  /**
   * Delete the first occurence of the value and
   * return the LinkedListNode
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (this.isEmpty()) return null;

    let deleteNode = null;

    // If head value is the value we looking for then we
    // return it and update the head
    if (this.compare.equal(this.head.value, value)) return this.deleteHead();

    // Loop over and delete the one
    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode;
        if (!currentNode.next) return this.deleteTail(previousNode);
        previousNode.next = currentNode.next;
        return deleteNode;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Delete all occurences of the value and
   * return the LinkedListNode
   * @param {*} value
   * @return {LinkedListNode}
   */
  deleteAll(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make next node that is differ
    // from the head to be a new head.
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * Deletes the head of the LinkedList
   * @return {LinkedList} LinkedList Object
   */
  deleteHead() {
    if (this.isEmpty()) return null;

    const deletedNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedNode;
  }

  /**
   * Delete node from the tail position
   * @return {LinkedListNode} LinkedListNode object
   */
  deleteTail(currNode = null, prevNode = null) {
    if (this.isEmpty()) return null;

    if (prevNode) {
      this.tail = prevNode;
      this.tail.next = null;
      return currNode;
    }

    let deletedNode = null;

    const arr = this.toArray();
    if (arr.length > 1) {
      deletedNode = arr[arr.length - 1];
      this.tail = arr[arr.length - 2];
      this.tail.next = null;
      return deletedNode;
    }

    this.head = null;
    this.tail = null;
    return arr[0];
  }

  /**
   * Find the first occurence of the value and
   * return the LinkedListNode
   * @param {*} value
   * @return {LinkedList} LinkedList Object
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Convert the LinkedList to String format,
   * also takes in a custom print function - callback
   */
  toString({ separator = " ", callback = undefined } = {}) {
    if (!this.head) return "";

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
   * Creates a LinkedList from an Array
   * @param {Array} arr
   * @return {LinkedList} LinkedList Object
   */
  fromArray(arr) {
    if (arr.length === 0) return null;

    arr.forEach(item => this.append(item));

    return this;
  }

  /**
   * Returns an array of LinkedListNode from LinkedList
   *
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  /**
   * Reverses a given LinkedList
   * @return {LinkedList} LinkedList Object
   */
  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    while (currentNode) {
      // store next node
      nextNode = currentNode.next;

      // change the next node of current node to previous node
      currentNode.next = previousNode;

      // Move previous node and current node
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // reset tail
    this.tail = this.head;
    this.head = previousNode;

    return this;
  }
}

export default LinkedList;
