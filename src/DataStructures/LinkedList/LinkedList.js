import LinkedListNode from "./LinkedListNode";
import Comparator from "./../../utils/comparators";

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
   *
   * @param {*} value
   * @return {LinkedList}
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
   *
   * @param {*} value
   * @return {LinkedList}
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
    if (!this.head) return null;

    let deleteNode = null;

    // If head value is the value we looking for then we
    // return it and update the head
    if (this.compare.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
      return deleteNode;
    }

    // Loop over and delete the one
    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode;
        if (!currentNode.next) {
          this.tail = previousNode;
          this.tail.next = null;
          return deleteNode;
        }
        previousNode.next = currentNode.next;
        return deleteNode;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    return null;
  }

  /**
   * Find the first occurence of the value and
   * return the LinkedListNode
   * @param {*} value
   * @return {LinkedList}
   */
  find(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
}

export default LinkedList;
