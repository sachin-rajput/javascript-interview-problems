import BinarySearchTreeNode from "../BinarySearchTreeNode";

describe("BinarySearchTreeNode", () => {
  it("should create a bst node.", () => {
    const bst = new BinarySearchTreeNode(3);

    expect(bst).toBeDefined();
    expect(bst.value).toBe(3);
  });

  it("should insert nodes in the bst.", () => {
    const bstRoot = new BinarySearchTreeNode();
    bstRoot.insert(10);
    bstRoot.insert(5);
    bstRoot.insert(20);
    bstRoot.insert(30);

    expect(bstRoot).toBeDefined();
    expect(bstRoot.value).toBe(10);
    expect(bstRoot.right.value).toBe(20);
    expect(bstRoot.right.right.value).toBe(30);
    expect(bstRoot.left.value).toBe(5);
  });
});
