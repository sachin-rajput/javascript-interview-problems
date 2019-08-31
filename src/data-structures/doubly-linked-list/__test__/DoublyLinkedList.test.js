import DoublyLinkedList from "../DoublyLinkedList";

describe("DoublyLinkedList", () => {
  it("should create a doubly linked list.", () => {
    const list = new DoublyLinkedList();

    expect(list).toBeDefined();
    expect(list.head).toBeNull();
  });

  it("should create a doubly linked list and prepend items.", () => {
    const list = new DoublyLinkedList();
    list.prepend(2);
    expect(list.head.toString()).toBe("2");

    list.prepend(5);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.prev.value).toBe(5);

    list.prepend(6);
    expect(list.head.value).toBe(6);
    expect(list.head.next.prev).toBe(list.head);
  });

  it("should create a doubly linked list and append items.", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    expect(list.head.toString()).toBe("1");

    list.append(4);
    expect(list.toString()).toBe("1 4");

    list.append(5);
    expect(list.toString()).toBe("1 4 5");
    expect(list.tail.value).toBe(5);
    expect(list.tail.prev.next).toBe(list.tail);
  });

  it("should create a doubly linked list and delete items", () => {
    const list = new DoublyLinkedList();
    list
      .append(5)
      .append(7)
      .append(6);

    let deletedNode = list.delete(7);
    expect(deletedNode.value).toBe(7);
    expect(list.toString()).toBe("5 6");

    deletedNode = list.delete(6);
    expect(deletedNode.value).toBe(6);
    expect(list.toString()).toBe("5");

    deletedNode = list.delete(5);
    expect(deletedNode.value).toBe(5);
    expect(list.toString()).toBe("");
  });

  it("should create a doubly linked list and convert to array.", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    expect(list.head.toString()).toBe("1");

    list.append(4);
    expect(list.toString()).toBe("1 4");

    list.append(5);
    expect(list.toString()).toBe("1 4 5");
    expect(list.tail.value).toBe(5);
    expect(list.tail.prev.next).toBe(list.tail);

    const arr = list.toArray();
    expect(arr[0].value).toBe(1);
  });

  it("should create a doubly linked list using array.", () => {
    const list = new DoublyLinkedList();
    list.fromArray([1, 4, 5]);
    expect(list.toString()).toBe("1 4 5");
    expect(list.tail.value).toBe(5);
    expect(list.tail.prev.next).toBe(list.tail);

    list.fromArray([1, 4, 5], "prepend");
    expect(list.toString()).toBe("5 4 1 1 4 5");
  });
});
