import BinaryTreeNode from "../BinaryTreeNode";
import Comparator from "../../../utils/comparators";

export default class BinarySearchTreeNode extends BinaryTreeNode {
  /**
   *
   * @param {*} [value] - value of the node
   * @param {*} compareFn - compare function
   */
  constructor(value = null, compareFn = undefined) {
    super(value);

    this.compareFunction = compareFn;
    this.nodeValueComparator = new Comparator(compareFn);
  }

  /**
   * Insert into BST
   *
   * @param {*} [value] - value of the node
   * @returns {BinarySearchTreeNode} BinarySearchTreeNode
   */
  insert(value) {
    // If no value exists for current node
    if (this.nodeValueComparator.equal(this.value, null)) {
      this.value = value;
      return this;
    }

    // If less than or equal to go left
    if (this.nodeValueComparator.lessThanOrEqual(value, this.value)) {
      if (this.left) {
        return this.left.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value, this.compareFunction);
      this.setLeft(newNode);
      return newNode;
    }

    // If greater than to go right
    if (this.nodeValueComparator.greaterThan(value, this.value)) {
      if (this.right) {
        return this.right.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value);
      this.setRight(newNode);
      return newNode;
    }

    return this;
  }
}
