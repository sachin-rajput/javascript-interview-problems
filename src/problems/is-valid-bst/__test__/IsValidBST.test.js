import { TreeNode, isValidBST } from "../IsValidBST";

describe("IsValidBST", () => {
  it("should return true as the tree is a valid BST.", () => {
    const root = new TreeNode(15);
    root.left = new TreeNode(10);
    root.right = new TreeNode(24);
    root.right.left = new TreeNode(23);
    root.right.right = new TreeNode(26);

    expect(isValidBST(root)).toBeTruthy();
  });
  it("should return false as the tree is not a valid BST.", () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4);
    root.right.left = new TreeNode(3);
    root.right.right = new TreeNode(6);

    expect(isValidBST(root)).toBeFalsy();
  });
});
