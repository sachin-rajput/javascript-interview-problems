import { Node, flatten } from "../FlattenDLL";

describe("Reverse DLL II", () => {
  it("should reverse a doubly linked list.", () => {
    const dll = new Node(1);
    dll.next = new Node(2);
    dll.next.next = new Node(3);
    dll.next.next.child = new Node(7);
    dll.next.next.child.next = new Node(8);
    dll.next.next.child.next.child = new Node(11);
    dll.next.next.child.next.child.next = new Node(12);
    dll.next.next.child.next.next = new Node(9);
    dll.next.next.child.next.next.next = new Node(10);
    dll.next.next.next = new Node(4);
    dll.next.next.next.next = new Node(5);
    dll.next.next.next.next.next = new Node(6);

    expect(dll).toBeDefined();
    expect(flatten(dll).val).toBe(1);
    expect(flatten(dll).next.val).toBe(2);
    expect(flatten(dll).next.next.val).toBe(3);
    // expect(flatten(dll).next.next.next.val).toBe(7);
    // expect(flatten(dll).next.next.next.next.val).toBe(8);
    // expect(flatten(dll).next.next.next.next.next.val).toBe(11);
    // expect(flatten(dll).next.next.next.next.next.next.val).toBe(12);
    // expect(flatten(dll).next.next.next.next.next.next.next.val).toBe(9);
    // expect(flatten(dll).next.next.next.next.next.next.next.next.val).toBe(10);
    // expect(flatten(dll).next.next.next.next.next.next.next.next.next.val).toBe(4);
    // expect(flatten(dll).next.next.next.next.next.next.next.next.next.next.val).toBe(5);
    // expect(flatten(dll).next.next.next.next.next.next.next.next.next.next.next.val).toBe(6);
  });
});
