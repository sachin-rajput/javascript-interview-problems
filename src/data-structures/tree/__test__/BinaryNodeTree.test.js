import BinaryTreeNode from "../BinaryTreeNode";

describe("BinaryTreeNode", () => {
  it("should create a node.", () => {
    const root = new BinaryTreeNode();

    expect(root.left).toBeNull();
    expect(root.right).toBeNull();
    expect(root.parent).toBeNull();
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

    const newright = new BinaryTreeNode(17);

    root.replaceChild(right, newright);

    expect(root.right.value).toBe(17);
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

  it("should get the balance factor for the tree on left", () => {
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

    expect(root.balanceFactor).toBe(1);
    expect(left.balanceFactor).toBe(0);
    expect(grandLeft.balanceFactor).toBe(0);
  });

  it("should get the balance factor for the tree on right", () => {
    const root = new BinaryTreeNode(2);

    expect(root.height).toBe(0);

    const left = new BinaryTreeNode(4);
    const right = new BinaryTreeNode(6);

    root.setLeft(left).setRight(right);

    expect(root.height).toBe(1);

    const grandLeft = new BinaryTreeNode(5);
    const grandRight = new BinaryTreeNode(7);

    right.setLeft(grandLeft).setRight(grandRight);

    expect(root.balanceFactor).toBe(-1);
    expect(left.balanceFactor).toBe(0);
  });

  it("should get the uncle", () => {
    const grandParent = new BinaryTreeNode(2);

    expect(grandParent.uncle).not.toBeDefined();

    const left = new BinaryTreeNode(4);
    const right = new BinaryTreeNode(6);

    expect(left.uncle).not.toBeDefined();
    expect(right.uncle).not.toBeDefined();

    grandParent.setLeft(left).setRight(right);

    const childLeft = new BinaryTreeNode(5);

    const childRight = new BinaryTreeNode(7);

    left.setLeft(childLeft);
    right.setRight(childRight);

    expect(childLeft.uncle).toBeDefined();
    expect(childLeft.uncle.value).toBe(6);
    expect(childRight.uncle).toBeDefined();
    expect(childRight.uncle.value).toBe(4);
  });

  it("should set a value.", () => {
    const root = new BinaryTreeNode();

    expect(root.value).toBeNull();

    root.setValue(5);

    expect(root.value).toBe(5);
  });

  it("should be able to set object as value.", () => {
    const obj1 = { key: "object_1", toString: () => "object_1" };
    const obj2 = { key: "object_2" };

    const node1 = new BinaryTreeNode(obj1);
    const node2 = new BinaryTreeNode(obj2);

    node1.setLeft(node2);

    expect(node1.value).toBe(obj1);
    expect(node2.value).toBe(obj2);
    expect(node1.left.value).toBe(obj2);

    node1.removeChild(node2);

    expect(node1.left).toBeNull();
    expect(node1.value).toBe(obj1);
    expect(node2.value).toBe(obj2);

    expect(node1.toString()).toBe("object_1");
    expect(node2.toString()).toBe("[object Object]");
  });

  it("should copy node to new node.", () => {
    const node = new BinaryTreeNode(5);
    const left = new BinaryTreeNode(6);
    const right = new BinaryTreeNode(8);
    node.setLeft(left).setRight(right);

    const newNode = new BinaryTreeNode();
    expect(newNode.right).toBeNull();
    BinaryTreeNode.copyNode(node, newNode);

    expect(node.left).toBeDefined();
    expect(node.right).toBeDefined();

    expect(newNode.left.value).toBe(6);
    expect(newNode.right.value).toBeDefined(8);
  });
});
