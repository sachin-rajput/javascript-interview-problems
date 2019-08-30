import LinkedListNode from "./LinkedListNode";
import Comparator from "../../../utils/comparators";

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
}

export default LinkedList;
