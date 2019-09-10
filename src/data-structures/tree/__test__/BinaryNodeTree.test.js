import BinaryTreeNode from "../BinaryTreeNode";

describe("BinaryTreeNode", () => {
  it("should create a node.", () => {
    const root = new BinaryTreeNode();

    expect(root.left).toBeNull();
    expect(root.right).toBeNull();
    expect(root.value).toBeNull();
  });

  it("should set left and right node.", () => {
    const root = new BinaryTreeNode(1);
    const left = new BinaryTreeNode(3);
    const right = new BinaryTreeNode(5);

    expect(root.left).toBeNull();
    expect(root.right).toBeNull();

    root.setLeft(left).setRight(right);

    expect(root.left).toBeDefined();
    expect(root.right).toBeDefined();
    expect(root.left.value).toBe(3);
    expect(root.right.value).toBe(5);
  });

  it("should traverse the tree.", () => {
    const root = new BinaryTreeNode(1);
    const left = new BinaryTreeNode(3);
    const right = new BinaryTreeNode(5);

    root.setLeft(left).setRight(right);

    expect(root.traverseInOrder().toString()).toBe("3,1,5");
  });

  it("should remove child node.", () => {
    const root = new BinaryTreeNode(1);
    const left = new BinaryTreeNode(3);
    const right = new BinaryTreeNode(4);

    root.setLeft(left).setRight(right);

    expect(root.left).toBeDefined();

    root.removeChild(left);

    expect(root.left).toBeNull();
    expect(root.right).toBeDefined();
  });
});
