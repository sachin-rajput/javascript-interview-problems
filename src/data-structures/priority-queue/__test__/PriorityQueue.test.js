import PriorityQueue from "../PriorityQueue";

describe("PriorityQueue", () => {
  it("should create an instance of the priority queue.", () => {
    const pQueue = new PriorityQueue();

    expect(pQueue).toBeDefined();
  });

  it("should be able to add items to the queue with priority.", () => {
    const pQueue = new PriorityQueue();

    pQueue.add(12, 2);
    expect(pQueue.peek()).toBe(12);

    pQueue.add(56, 1);
    expect(pQueue.peek()).toBe(56);

    pQueue.add(34, 0);
    expect(pQueue.peek()).toBe(34);
  });

  it("should be able to poll the priorirty queue.", () => {
    const pQueue = new PriorityQueue();

    pQueue.add(12, 2);
    expect(pQueue.peek()).toBe(12);

    pQueue.add(56, 1);
    expect(pQueue.peek()).toBe(56);

    pQueue.add(34, 0);
    expect(pQueue.peek()).toBe(34);

    pQueue.add(55, 0);

    expect(pQueue.poll()).toBe(55);
    expect(pQueue.poll()).toBe(34);
    expect(pQueue.poll()).toBe(56);
    expect(pQueue.poll()).toBe(12);
  });

  it("should be possible to change priority of head node", () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    expect(priorityQueue.peek()).toBe(200);

    priorityQueue.changePriority(100, 10);
    priorityQueue.changePriority(10, 20);

    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(10);
  });

  it("should be possible to change priority of internal nodes", () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    expect(priorityQueue.peek()).toBe(200);

    priorityQueue.changePriority(200, 10);
    priorityQueue.changePriority(10, 20);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
  });

  it("should be possible to change priority along with node addition", () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    priorityQueue.changePriority(200, 10);
    priorityQueue.changePriority(10, 20);

    priorityQueue.add(15, 15);

    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(15);
    expect(priorityQueue.poll()).toBe(10);
  });

  it("should be possible to search in priority queue by value", () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    priorityQueue.add(15, 15);

    expect(priorityQueue.hasValue(70)).toBe(false);
    expect(priorityQueue.hasValue(15)).toBe(true);
  });
});
