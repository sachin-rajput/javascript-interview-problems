import LinkedList from "./../LinkedList";

describe("LinkedList", () => {
  it("should create a list with default comparator function", () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  it("should create a list and prepend a node with a value", () => {
    const list = new LinkedList();
    list.prepend(2);

    expect(list.head.value).toBe(2);
  });

  it("should create a list and append a node with a value", () => {
    const list = new LinkedList();
    list.prepend(1);
    list.append(4);

    expect(list.tail.value).toBe(4);
  });

  it("should create a list and delete first occurence", () => {
    const list = new LinkedList();
    list
      .append(2)
      .append(3)
      .append(4)
      .append(6)
      .append(4);
    const deletedNode = list.delete(4);

    expect(deletedNode.value).toBe(4);
    expect(list.tail.value).toBe(4);
    expect(list.head.next.next.value).toBe(6);
  });

  it("should create a list with custom comparator function", () => {
    function customComparator(a, b) {
      if (a.key === b) return 0;

      return a.key < b ? -1 : 1;
    }

    const list = new LinkedList(customComparator);

    list
      .append({ key: 2, value: "obj 2.1" })
      .append({ key: 3, value: "obj 3" })
      .append({ key: 2, value: "obj 2.2" })
      .append({ key: 2, value: "obj 2" });

    const deletedNode = list.delete(2);

    expect(list.head.value.value).toBe("obj 3");
    expect(deletedNode.value.value).toBe("obj 2.1");
  });

  it("should create a list and find the first match with the value", () => {
    const list = new LinkedList();
    list
      .append(1)
      .append(3)
      .append(45);

    const findItem1 = list.find(54);
    const findItem2 = list.find(45);

    expect(findItem1).toBeNull();
    expect(findItem2.value).toBe(45);
  });
});
