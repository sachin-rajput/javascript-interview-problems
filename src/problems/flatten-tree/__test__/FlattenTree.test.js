import { TreeNode, flatten } from "../FlattenTree";

describe("FlattenTree", () => {
  it("should flatten a tree like a linked list.", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(6);

    flatten(root);

    expect(root.right.val).toBe(2);
    expect(root.right.right.val).toBe(3);
    expect(root.right.right.right.val).toBe(4);
    expect(root.right.right.right.right.val).toBe(5);
    expect(root.right.right.right.right.right.val).toBe(6);
  });
});
