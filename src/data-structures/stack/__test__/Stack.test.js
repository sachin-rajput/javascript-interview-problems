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
});
