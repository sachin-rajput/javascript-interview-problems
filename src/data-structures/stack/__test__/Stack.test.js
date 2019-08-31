import Stack from "../Stack";

describe("Stack", () => {
  it("should create a stack.", () => {
    const newStack = new Stack();

    expect(newStack.linkedList).toBeDefined();
  });

  it("should create a stack and return true for empty check.", () => {
    const newStack = new Stack();

    const isStackEmpty = newStack.isEmpty();

    expect(isStackEmpty).toBeTruthy();
  });

  it("should create a stack and push items.", () => {
    const newStack = new Stack();
    newStack.push(45);
    newStack.push(66);
    newStack.push(344);

    expect(newStack.isEmpty()).toBeFalsy();
  });

  it("should create a stack, add items and peeking should return top item.", () => {
    const newStack = new Stack();

    let peekNode = newStack.peek();

    expect(peekNode).toBeNull();

    newStack.push(45);
    newStack.push(66);
    newStack.push(344);

    peekNode = newStack.peek();

    expect(peekNode.value).toBe(344);
  });

  it("should create a stack and pop an item from top.", () => {
    const newStack = new Stack();
    newStack.push(45);
    newStack.push(415);
    newStack.push(465);

    const popNode = newStack.pop();
    const peekNode = newStack.peek();

    expect(popNode.value).toBe(465);
    expect(peekNode.value).toBe(415);

    newStack.pop();
    newStack.pop();
    const noItems = newStack.pop();
    expect(newStack.isEmpty()).toBeTruthy();
    expect(noItems).toBeNull();
  });

  it("should create a stack and print it.", () => {
    const newStack = new Stack();

    newStack
      .push(4)
      .push(67)
      .push(78);

    const strStack = newStack.toString();

    expect(strStack).toBe("78 67 4");
  });

  it("should create a stack and convert to array.", () => {
    const newStack = new Stack();

    newStack
      .push(4)
      .push(67)
      .push(78);

    const arrStack = newStack.toArray();

    expect(arrStack[0]).toBe(78);
  });
});
