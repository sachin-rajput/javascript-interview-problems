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
    this.value = value;

    // To save meta information
    this.meta = new HashTable();

    this.nodeComparator = new Comparator();
  }

  /**
   * Set left node for current node
   * @param {BinaryTreeNode} node
   * @returns {BinaryTreeNode}
   */
  setLeft(node) {
    // Detach left node if it exists
    if (this.left) {
      this.left = null;
    }

    // attach node to the left of current node
    this.left = node;

    return this;
  }

  /**
   * Set right node for current node
   * @param {BinaryTreeNode} node
   * @returns {BinaryTreeNode}
   */
  setRight(node) {
    // detach the right node if it exists
    if (this.right) {
      this.right = null;
    }

    // attach node to the right of current node
    this.right = node;

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
   * @returns {Boolean}
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
}
