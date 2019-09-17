import Comparator from "../../utils/comparators";
import HashTable from "../hash-table/HashTable";

export default class BinaryTreeNode {
  /**
   *
   * @param {*} [value] - node value
   */
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    // To save meta information
    this.meta = new HashTable();

    this.nodeComparator = new Comparator();
  }

  /**
   * Set left node for current node
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setLeft(node) {
    // Detach left node if it exists
    if (this.left) {
      this.left.parent = null;
    }

    // attach node to the left of current node
    this.left = node;

    // re-attach current node as parent to node
    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  /**
   * Set right node for current node
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight(node) {
    // detach the right node if it exists
    if (this.right) {
      this.right.parent = null;
    }

    // attach node to the right of current node
    this.right = node;

    // re-attach current node as parent to node
    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }

  /**
   * Traverses the tree in order
   */
  traverseInOrder() {
    let traverse = [];

    // Add left node
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    // Add root node
    traverse.push(this.value);

    // Add right node
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  /**
   *
   * @param {BinaryTreeNode} node
   * @return {boolean}
   */
  removeChild(node) {
    if (this.left && this.nodeComparator.equal(this.left, node)) {
      this.left = null;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, node)) {
      this.right = null;
      return true;
    }

    return false;
  }

  /**
   *
   * @param {BinaryTreeNode} node
   * @param {BinaryTreeNode} newNode
   * @return {BinaryTreeNode}
   */
  replaceChild(node, newNode) {
    if (this.left && this.nodeComparator.equal(this.left, node)) {
      this.left = newNode;
    }

    if (this.right && this.nodeComparator.equal(this.right, node)) {
      this.right = newNode;
    }

    return this;
  }

  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  /**
   * Get the height of the tree
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  /**
   * Get the balance between left and right subtree
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  /**
   * Gets the parent's sibling position in terms of left or right
   * @return {BinaryTreeNode}
   */
  get uncle() {
    if (!this.parent) {
      return undefined;
    }

    if (!this.parent.parent) {
      return undefined;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    // So we are sure we have grand parent and it has two childs
    if (this.nodeComparator.equal(this.parent.parent.left, this.parent)) {
      return this.parent.parent.right;
    }

    return this.parent.parent.left;
  }

  /**
   *
   * @param {*} value - value of the node
   * @return {BinaryTreeNode}
   */
  setValue(value) {
    this.value = value;

    return this;
  }

  /**
   *
   * @param {BinaryTreeNode} source
   * @param {BinaryTreeNode} destination
   */
  static copyNode(source, destination) {
    destination.setLeft(source.left);
    destination.setRight(source.right);
    destination.setValue(source.value);
  }

  /**
   * Print BinaryTreeNode as String
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
