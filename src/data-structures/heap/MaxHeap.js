import Heap from "./Heap";

export default class MaxHeap extends Heap {
  /**
   * Compares the first and second item.
   * returns true if the first item is greater than second item,
   * which helps us satisfy the parent greater than child condition for it to be MaxHeap
   *
   * @param {*} firstItem
   * @param {*} secondItem
   */
  pairIsInCorrectOrder(firstItem, secondItem) {
    return this.compare.greaterThan(firstItem, secondItem);
  }
}
