import Queue from "../Queue";

describe("Queue", () => {
  it("should create a Queue.", () => {
    const newQueue = new Queue();

    expect(newQueue).toBeDefined();
    expect(newQueue.isEmpty()).toBeTruthy();
  });

  it("should create a Queue and enqueue items.", () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);

    expect(newQueue.isEmpty()).toBeFalsy();
    expect(newQueue.linkedlist.head.value).toBe(1);
    expect(newQueue.linkedlist.tail.value).toBe(3);
  });

  it("should create a Queue and be able to peek.", () => {
    const newQueue = new Queue();
    expect(newQueue.peek()).toBeNull();

    newQueue
      .enqueue(1)
      .enqueue(34)
      .enqueue(6);

    expect(newQueue.peek()).toBe(1);
  });

  it("should create a Queue and be able to dequeue items.", () => {
    const newQueue = new Queue();
    let getNode = newQueue.dequeue();
    expect(getNode).toBeNull();

    newQueue
      .enqueue(4)
      .enqueue(7)
      .enqueue(5);

    getNode = newQueue.dequeue();

    expect(getNode.value).toBe(4);
    expect(newQueue.peek()).toBe(7);
  });

  it("should create a Queue and convert to array ", () => {
    const newQueue = new Queue();
    newQueue
      .enqueue(56)
      .enqueue(6)
      .enqueue(5);

    expect(newQueue.toArray()[0]).toBe(56);
  });

  it("should create a Queue and print as string ", () => {
    const newQueue = new Queue();
    newQueue
      .enqueue(56)
      .enqueue(6)
      .enqueue(5);

    expect(newQueue.toString()).toBe("56 6 5");
  });
});
