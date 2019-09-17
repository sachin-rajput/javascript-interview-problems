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
   * @return {BinarySearchTreeNode} BinarySearchTreeNode
   */
  insert(value) {
    // If no value exists for current node
    if (this.nodeValueComparator.equal(this.value, null)) {
      this.value = value;
      return this;
    }

    // If less than or equal to go left
    if (this.nodeValueComparator.lessThan(value, this.value)) {
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

  /**
   *
   * @param {*} value - value of the node
   * @return {BinarySearchTreeNode} BinarySearchTreeNode
   */
  find(value) {
    if (this.nodeValueComparator.equal(value, this.value)) {
      return this;
    }

    if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
      return this.left.find(value);
    }

    if (this.nodeValueComparator.greaterThan(value, this.value) && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  /**
   * Check if a value is present or not
   *
   * @param {*} value - value of the node
   * @return {boolean} True or False
   */
  contains(value) {
    return !!this.find(value);
  }

  /**
   * Find the minimum node value by going to left until null
   * @return {BinarySearchTreeNode} BinarySearchTreeNode
   */
  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }

  /**
   *
   * @param {*} value - value of the node
   * @return {boolean} - True or False
   */
  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error("Item not found in the tree");
    }

    const { parent } = nodeToRemove;

    // no child exist for the nodeToRemove
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.setValue(undefined);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // two children exist for the nodeToRemove
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (!this.nodeValueComparator.equal(nextBiggerNode, nodeToRemove.right)) {
        this.remove(nextBiggerNode.value);
        nodeToRemove.setValue(nextBiggerNode.value);

        return true;
      }
      nodeToRemove.setValue(nodeToRemove.right.value);
      nodeToRemove.setRight(nodeToRemove.right.right);
    } else {
      // only one child exist for the nodeToRemove
      const childNode = nodeToRemove.left || nodeToRemove.right;

      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        BinaryTreeNode.copyNode(childNode, nodeToRemove);
      }
    }

    nodeToRemove.parent = null;

    return true;
  }
}
