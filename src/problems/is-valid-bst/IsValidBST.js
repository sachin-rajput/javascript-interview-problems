/**
 * Definition for a binary tree node.
 * */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  if (!root) return true;

  const dfs = (node, min, max) => {
    if (!node) return true;

    if (node.val <= min || node.val >= max) {
      return false;
    }

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  };

  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

export { isValidBST, TreeNode };
