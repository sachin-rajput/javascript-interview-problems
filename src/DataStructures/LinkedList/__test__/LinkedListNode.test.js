import LinkedListNode from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("should create list node with value", () => {
    const node = new LinkedListNode(2);

    expect(node.value).toBe(2);
    expect(node.next).toBeNull();
  });

  it("should create list node with object as a value", () => {
    const nodeValue = { value: 1, key: "test" };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe("test");
    expect(node.next).toBeNull();
  });

  it("should link node together", () => {
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2, node1);

    expect(node2.next.value).toBe(1);
    expect(node2.next.next).toBeNull();
    expect(node2.value).toBe(2);
  });

  it("should convert node to string", () => {
    const node = new LinkedListNode(3);
    expect(node.toString()).toBe("3");

    node.value = "string value";
    expect(node.toString()).toBe("string value");
  });

  it("should convert node to string with custom stringifier", () => {
    const nodeValue = { key: "text", value: 2 };
    const newNode = new LinkedListNode(nodeValue);
    const toStringCallback = value => `key: ${value.key} | value: ${value.value}`;

    expect(newNode.toString(toStringCallback)).toBe("key: text | value: 2");
  });
});
