/* eslint-disable no-param-reassign */
/**
 * TreeNode structure
 *
 * @param {*} val
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
  if (!root) return;
  let tempNode = root.left;
  root.left = root.right;
  root.right = tempNode;
  tempNode = root;
  while (tempNode.right !== null) {
    tempNode = tempNode.right;
  }
  tempNode.right = root.left;
  root.left = null;
  flatten(root.right);
};

export { flatten, TreeNode };
