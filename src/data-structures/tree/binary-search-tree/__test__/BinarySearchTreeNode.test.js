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

  it("should find a node by value.", () => {
    const bstRoot = new BinarySearchTreeNode(10);
    bstRoot.insert(5);
    bstRoot.insert(20);
    bstRoot.insert(30);

    const findNode1 = bstRoot.find(5);
    const findNode2 = bstRoot.find(30);
    const findNode3 = bstRoot.find(35);

    expect(findNode1.value).toBe(5);
    expect(findNode2.value).toBe(30);
    expect(findNode3).toBeNull();
  });

  it("should test if a node exists by value.", () => {
    const bstRoot = new BinarySearchTreeNode(10);
    bstRoot.insert(5);
    bstRoot.insert(20);
    bstRoot.insert(30);

    const findNode1 = bstRoot.contains(5);
    const findNode2 = bstRoot.contains(30);
    const findNode3 = bstRoot.contains(35);

    expect(findNode1).toBeTruthy();
    expect(findNode2).toBeTruthy();
    expect(findNode3).toBeFalsy();
  });

  it("should remove node by value.", () => {
    const bstRoot = new BinarySearchTreeNode(10);
    bstRoot.insert(5);
    bstRoot.insert(20);
    bstRoot.insert(30);
    bstRoot.insert(15);
    bstRoot.insert(13);

    expect(bstRoot.toString()).toBe("5,10,13,15,20,30");

    const findNode1 = bstRoot.contains(5);
    const findNode2 = bstRoot.contains(30);
    const findNode3 = bstRoot.contains(35);

    expect(findNode1).toBeTruthy();
    expect(findNode2).toBeTruthy();
    expect(findNode3).toBeFalsy();

    const removeNode1 = bstRoot.remove(10);
    const removeNode2 = bstRoot.remove(12);

    expect(bstRoot.toString()).toBe("5,13,15,20,30");

    expect(removeNode1).toBeTruthy();
    expect(removeNode2).toBeFalsy();
    expect(bstRoot.value).toBe(13);

    const removeNode3 = bstRoot.remove(15);
    expect(removeNode3).toBeTruthy();
    expect(bstRoot.value).toBe(13);

    const removeNode4 = bstRoot.remove(20);
    expect(removeNode4).toBeTruthy();

    const removeNode5 = bstRoot.remove(30);
    expect(removeNode5).toBeTruthy();
  });
});
