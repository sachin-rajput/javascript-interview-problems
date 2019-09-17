/* eslint-disable no-plusplus */
/**
 * Definition for a BinarySearchTree
 * import BinarySearchTree from "../../../data-structures/tree/binary-search-tree/BinarySearchTree";
 */

/**
 * @param {BinarySearchTreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  let smallestElement;

  function traverseInOrder(node) {
    if (!node || smallestElement !== undefined) return;

    traverseInOrder(node.left);

    // eslint-disable-next-line no-param-reassign
    if (--k === 0) {
      smallestElement = node.value;
    }

    traverseInOrder(node.right);
  }

  traverseInOrder(root);

  return smallestElement;
};

export default kthSmallest;
