import findCheapestPrice from "../CheapestFlight";

describe("CheapestFlight", () => {
  it("should return the cheapest flight from src to dest with K stops,", () => {
    const edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];

    expect(findCheapestPrice(3, edges, 0, 2, 0)).toBe(500);
    expect(findCheapestPrice(3, edges, 0, 2, 1)).toBe(200);
  });
});
