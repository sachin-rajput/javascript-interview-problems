import MinHeap from "../heap/MinHeap";
import Comparator from "../../utils/comparators";

// This is same as MinHeap, except we use a Map for tracking
// our priorities for the elements
export default class PriorityQueue extends MinHeap {
  constructor() {
    super();

    // Our Priority data strcuture
    this.priorities = new Map();

    // Using our implementation for comparing priorities
    this.compare = new Comparator(this.comparePriorities.bind(this));
  }

  /**
   * Add the item with priority
   *
   * @param {*} item
   * @param {*} priority
   */
  add(item, priority = 0) {
    this.priorities.set(item, priority);
    super.add(item);
    return this;
  }

  /**
   * Remove the item by value
   *
   * @param {*} item
   * @param {*} customComparatorFunction
   */
  remove(item, customComparatorFunction) {
    super.remove(item, customComparatorFunction);
    this.priorities.delete(item);
    return this;
  }

  /**
   * Change the priority based on the input
   *
   * @param {*} item
   * @param {*} priority
   */
  changePriority(item, priority) {
    this.remove(item, new Comparator(this.compareValues));
    this.add(item, priority);
    return this;
  }

  /**
   * Get Index of the item
   *
   * @param {*} item
   * @param {*} customComparatorFunction
   * @return {Number[]}
   */
  findByValue(item) {
    return super.find(item, new Comparator(this.compareValues));
  }

  /**
   * Check if item exists in the queue
   *
   * @param {*} item
   */
  hasValue(item) {
    return this.findByValue(item) > 0;
  }

  /**
   * Compare based on priorities
   *
   * @param {*} a
   * @param {*} b
   */
  comparePriorities(a, b) {
    if (this.priorities.get(a) === this.priorities.get(b)) {
      return 0;
    }

    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
  }

  /**
   * Compare based on values
   *
   * @param {*} a
   * @param {*} b
   */
  compareValues(a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }
}
