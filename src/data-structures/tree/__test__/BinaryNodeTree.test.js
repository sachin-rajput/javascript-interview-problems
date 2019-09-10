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

    const newLeft = new BinaryTreeNode(13);
    const newRight = new BinaryTreeNode(15);

    expect(root.left).toBeNull();
    expect(root.right).toBeNull();

    root.setLeft(left).setRight(right);

    expect(root.left).toBeDefined();
    expect(root.right).toBeDefined();
    expect(root.left.value).toBe(3);
    expect(root.right.value).toBe(5);

    root.setLeft(newLeft);
    expect(root.left).toBeDefined();
    expect(root.left.value).toBe(13);

    root.setRight(newRight);
    expect(root.right).toBeDefined();
    expect(root.right.value).toBe(15);
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
    expect(root.right).toBeDefined();

    root.removeChild(left);

    expect(root.left).toBeNull();
    expect(root.right).toBeDefined();

    root.removeChild(right);

    expect(root.right).toBeNull();

    const falsy = root.removeChild(right);

    expect(falsy).toBeFalsy();
  });

  it("should replace the child nodes.", () => {
    const root = new BinaryTreeNode(1);
    const left = new BinaryTreeNode(2);
    const right = new BinaryTreeNode(5);

    root.setLeft(left).setRight(right);

    expect(root.left).toBeDefined();

    const newleft = new BinaryTreeNode(7);

    root.replaceChild(left, newleft);

    expect(root.left.value).toBe(7);
  });

  it("should get the height of the tree.", () => {
    const root = new BinaryTreeNode(2);

    expect(root.height).toBe(0);

    const left = new BinaryTreeNode(4);
    const right = new BinaryTreeNode(6);

    root.setLeft(left).setRight(right);

    expect(root.height).toBe(1);

    const grandLeft = new BinaryTreeNode(5);
    const grandRight = new BinaryTreeNode(7);

    left.setLeft(grandLeft).setRight(grandRight);

    expect(root.height).toBe(2);
    expect(left.height).toBe(1);
    expect(grandLeft.height).toBe(0);
  });
});
