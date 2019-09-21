/**
 * Definition for a binary tree node.
 * */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  const helper = (p1, p2, i1, i2) => {
    if (p1 > p2 || i1 > i2) return null;

    const value = preorder[p1];
    const index = inorder.indexOf(value);
    const nLeft = index - i1;
    const root = new TreeNode(value);

    root.left = helper(p1 + 1, p1 + nLeft, i1, index - 1);
    root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

    return root;
  };

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

export { buildTree, TreeNode };
