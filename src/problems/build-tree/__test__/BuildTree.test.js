import { buildTree } from "../BuildTree";

describe("BuildTree", () => {
  it("should build a tree using inorder and preorder.", () => {
    const preorder = [3, 9, 20, 15, 7];
    const inorder = [9, 3, 15, 20, 7];

    const tree = buildTree(preorder, inorder);

    expect(tree.val).toBe(3);
    expect(tree.left.val).toBe(9);
    expect(tree.right.left.val).toBe(15);
  });
});
