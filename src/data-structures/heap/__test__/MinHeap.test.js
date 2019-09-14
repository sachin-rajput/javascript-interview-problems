import MinHeap from "../MinHeap";
import Comparator from "../../../utils/comparators";

describe("MinHeap", () => {
  it("should create an instance of MinHeap.", () => {
    const heap = new MinHeap();

    expect(heap).toBeDefined();
    expect(heap.isEmpty()).toBeTruthy();
  });

  it("should be able to add items to MinHeap.", () => {
    const heap = new MinHeap();

    heap
      .add(10)
      .add(5)
      .add(4);

    expect(heap.toString()).toBe("4,10,5");
  });

  it("should be able peek the min value from the MinHeap.", () => {
    const heap = new MinHeap();

    expect(heap.peek()).toBeNull();

    heap.add(10);

    expect(heap.peek()).toBe(10);

    heap
      .add(5)
      .add(41)
      .add(2)
      .add(56)
      .add(90);

    expect(heap.peek()).toBe(2);
  });

  it("should be able to poll the MinHeap.", () => {
    const heap = new MinHeap();

    const poll0 = heap.poll();
    expect(poll0).toBeNull();

    heap.add(10);
    const poll1 = heap.poll();
    expect(poll1).toBe(10);

    heap
      .add(5)
      .add(41)
      .add(2)
      .add(56)
      .add(90);

    expect(heap.heapContainer.length).toBe(5);

    const poll2 = heap.poll();

    expect(heap.heapContainer.length).toBe(4);
    expect(poll2).toBe(2);

    const poll3 = heap.poll();

    expect(heap.heapContainer.length).toBe(3);
    expect(poll3).toBe(5);
  });

  it("should be able to find by value.", () => {
    const heap = new MinHeap();

    heap
      .add(5)
      .add(41)
      .add(2)
      .add(56)
      .add(90)
      .add(56);

    const find1 = heap.find(56);

    expect(heap.toString()).toBe("2,41,5,56,90,56");
    expect(find1.toString()).toBe("3,5");
  });

  it("should be able to remove items by value.", () => {
    const heap = new MinHeap();

    heap
      .add(5)
      .add(41)
      .add(2)
      .add(56)
      .add(90)
      .add(56);

    const find1 = heap.find(56);

    expect(heap.toString()).toBe("2,41,5,56,90,56");
    expect(find1.toString()).toBe("3,5");

    heap.remove(56);
    expect(heap.toString()).toBe("2,41,5,90");
    heap.remove(2);
    expect(heap.toString()).toBe("5,41,90");
    heap.remove(41);
    expect(heap.toString()).toBe("5,90");
    heap.remove(90);
    expect(heap.toString()).toBe("5");
    heap.remove(5);
    expect(heap.toString()).toBe("");
  });

  it("should be possible to remove items from heap with custom finding comparator", () => {
    const minHeap = new MinHeap();
    minHeap.add("dddd");
    minHeap.add("ccc");
    minHeap.add("bb");
    minHeap.add("a");

    expect(minHeap.toString()).toBe("a,bb,ccc,dddd");

    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    minHeap.remove("hey", comparator);
    expect(minHeap.toString()).toBe("a,bb,dddd");
  });
});
