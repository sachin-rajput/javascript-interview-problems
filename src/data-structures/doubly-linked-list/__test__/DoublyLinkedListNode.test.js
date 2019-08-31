import DoublyLinkedListNode from "../DoublyLinkedListNode";

describe("DoublyLinkedListNode", () => {
  it("should create a doubly linked list.", () => {
    const list = new DoublyLinkedListNode(3);

    expect(list).toBeDefined();
    expect(list.value).toBe(3);
  });

  it("should create doubly linked list node with object as a value", () => {
    const nodeValue = { value: 1, key: "test" };
    const node = new DoublyLinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe("test");
    expect(node.next).toBeNull();
  });

  it("should doubly linked nodes together", () => {
    const node1 = new DoublyLinkedListNode(3);
    const node2 = new DoublyLinkedListNode(2, node1);
    const node3 = new DoublyLinkedListNode(1, node1, node2);

    expect(node2.next.value).toBe(3);
    expect(node2.next.next).toBeNull();
    expect(node2.value).toBe(2);
    expect(node3.prev).toBeDefined();
  });

  it("should convert node to string", () => {
    const node = new DoublyLinkedListNode(3);
    expect(node.toString()).toBe("3");

    node.value = "string value";
    expect(node.toString()).toBe("string value");
  });

  it("should convert node to string with custom stringifier", () => {
    const nodeValue = { key: "text", value: 2 };
    const newNode = new DoublyLinkedListNode(nodeValue);
    const toStringCallback = value => `key: ${value.key} | value: ${value.value}`;

    expect(newNode.toString(toStringCallback)).toBe("key: text | value: 2");
  });
});
