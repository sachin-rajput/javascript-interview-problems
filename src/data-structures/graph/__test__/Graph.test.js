import Graph from "../Graph";

describe("Graph", () => {
  it("should add vertices to graph", () => {
    const graph = new Graph();

    expect(graph).toBeDefined();
  });
});
