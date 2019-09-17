/* eslint-disable quotes */
import { Node, copyRandomList } from "../CopyListRandomPointer";

describe("CopyListRandomPointer", () => {
  it("should perform a deep copy.", () => {
    const node1 = new Node(1, null, null);
    const node2 = new Node(2, null, null);

    node1.next = node2;
    node1.random = node2;

    node2.random = node2;

    expect(node1.random.val).toBe(2);
    expect(node1.next.val).toBe(2);
    expect(node1.toString()).toBe(
      `{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}`
    );

    const copyNode1 = copyRandomList(node1);
    expect(copyNode1.random.val).toBe(2);
    expect(copyNode1.next.val).toBe(2);
    expect(copyNode1.toString()).toBe(
      `{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}`
    );
  });
});
