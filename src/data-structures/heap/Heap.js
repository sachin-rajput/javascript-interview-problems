import Comparator from "../../utils/comparators";

export default class Heap {
  constructor(comparatorFunction) {
    if (new.target === Heap) {
      throw new Error("Cannot instantiate Heap directly!");
    }

    // to store all data in an array container
    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * Return the left child index for the given parent index
   *
   * @param {*} parentIndex
   * @returns {number} index of the left child
   */
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  /**
   * Return the right child index for the given parent index
   *
   * @param {*} parentIndex
   * @returns {number} index of the right child
   */
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  /**
   * Return the parent index for the given child index
   *
   * @param {*} childIndex
   * @returns {number} index of the parent
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * Check if the parent has a left child
   *
   * @param {*} parentIndex
   * @returns {Boolean} True or False
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * Check if the parent has a right child
   *
   * @param {*} parentIndex
   * @returns {Boolean} True or False
   */
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * Check if the child has a parent
   *
   * @param {*} childIndex
   * @returns {Boolean} True or False
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  /**
   * Get the value of the parent
   *
   * @param {*} childIndex
   * @returns {*} - value of the parent
   */
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  /**
   * Get the value of the left child
   *
   * @param {*} parentIndex
   * @returns {*} - value of the left child
   */
  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  /**
   * Get the value of the right child
   *
   * @param {*} parentIndex
   * @returns {*} - value of the right child
   */
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  /**
   * Swap the values at the given two indexes
   *
   * @param {*} item1Index
   * @param {*} item2Index
   */
  swap(item1Index, item2Index) {
    const tmp = this.heapContainer[item2Index];
    this.heapContainer[item2Index] = this.heapContainer[item1Index];
    this.heapContainer[item1Index] = tmp;
  }

  /**
   * Get the first value from the heap
   *
   * @returns {*} first item
   */
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  /**
   * Get the first item and remove from the heap
   *
   * @returns {*} - item from heap
   */
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    // replace the last item from the heap to first
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }

  /**
   * Check if the heap is empty
   *
   * @returns {Boolean} - True or False
   */
  isEmpty() {
    return !this.heapContainer.length;
  }

  /**
   * ToString() function for the Heap
   */
  toString() {
    return this.heapContainer.toString();
  }

  /**
   * Add an item to the heap
   *
   * @param {*} item
   */
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  /**
   * Remove items by value
   *
   * @param {*} item
   * @param {*} compare
   * @returns {Heap} - instance of Min or Max Heap
   */
  remove(item, comparator = this.compare) {
    // Get Indexes to be removed
    const itemsToBeRemoved = this.find(item, comparator).length;

    for (let i = 0; i < itemsToBeRemoved; i += 1) {
      // We need to find item index to remove each time after removal since
      // indices are being changed after each heapify process.
      const indexToRemove = this.find(item, comparator).pop();

      // If this is the last item in the heap then no need
      // to do heapifyUp or heapifyDown
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        // Let's move last item from heap to current vacant position
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        // Get Parent
        const parentItem = this.parent(indexToRemove);

        // eslint-disable-next-line max-len
        if (
          // eslint-disable-next-line operator-linebreak
          this.hasLeftChild(indexToRemove) &&
          (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

    return this;
  }

  /**
   * Get the indexes for the items found
   *
   * @param {*} item
   * @param {*} compare
   * @returns {[number]} - array of indexes for items found
   */
  find(item, compare = this.compare) {
    const itemsFoundIndex = [];

    this.heapContainer.forEach((value, index) => {
      if (compare.equal(item, value)) {
        itemsFoundIndex.push(index);
      }
    });

    return itemsFoundIndex;
  }

  /**
   *
   * @param {*} customStartIndex
   */
  heapifyUp(customStartIndex) {
    // capture the currentIndex as customStartIndex or the last index of the
    // heap container
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    // if parent exist and the parent and child are not in correct order
    // then we swap and repeat by updating the index to parent index else do nothing
    while (
      // eslint-disable-next-line operator-linebreak
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  /**
   *
   * @param {*} customStartIndex
   */
  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    // if left child does not exist then just do heapifyUp
    // else if no parent exist or parent exist in correct order then do heapifyDown
    while (this.hasLeftChild(currentIndex)) {
      if (
        // eslint-disable-next-line operator-linebreak
        this.hasRightChild(currentIndex) &&
        this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      // eslint-disable-next-line max-len
      if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  /**
   * Checks if pair of heap elements is in correct order.
   * For MinHeap the first element must be always smaller or equal.
   * For MaxHeap the first element must be always bigger or equal.
   *
   * @param {*} firstItem
   * @param {*} secondItem
   * @return {boolean}
   */
  /* istanbul ignore next */
  pairIsInCorrectOrder(firstItem, secondItem) {
    throw new Error(`This cannot be invoked by Heap Instance, 
      please implement pair comparision
      for ${firstItem} and ${secondItem} values.
    `);
  }
}
