import Heap from "./Heap";

export default class MinHeap extends Heap {
  /**
   * Compares the first and second item.
   * returns true if the first item is less than second item,
   * which helps us satisfy the parent less than child condition for it to be MinHeap
   *
   * @param {*} firstItem
   * @param {*} secondItem
   */
  pairIsInCorrectOrder(firstItem, secondItem) {
    return this.compare.lessThan(firstItem, secondItem);
  }
}
