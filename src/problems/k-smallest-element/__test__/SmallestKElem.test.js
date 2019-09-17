import BinarySearchTree from "../../../data-structures/tree/binary-search-tree/BinarySearchTree";
import kthSmallest from "../SmallestKElem";

describe("SmallestKElem", () => {
  it("should return smallest element from BST", () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(25);
    bst.insert(6);

    expect(bst.toString()).toBe("-20,-10,6,10,20,25");
    expect(bst.root.height).toBe(2);

    expect(kthSmallest(bst.root, 3)).toBe(6);
    expect(kthSmallest(bst.root, 1)).toBe(-20);
  });
});
