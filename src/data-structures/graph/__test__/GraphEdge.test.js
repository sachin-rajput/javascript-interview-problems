import GraphVertex from "../GraphVertex";
import GraphEdge from "../GraphEdge";

describe("GraphEdge", () => {
  it("should create an edge.", () => {
    const startVertex = new GraphVertex("A");
    const endVertex = new GraphVertex("B");

    const edge = new GraphEdge(startVertex, endVertex);

    expect(edge.getKey()).toBe("A_B");
    expect(edge.toString()).toBe("A_B");
    expect(edge.startVertex).toBe(startVertex);
    expect(edge.endVertex).toBe(endVertex);
    expect(edge.weight).toBe(0);
  });

  it("should set a weight on an edge.", () => {
    const startVertex = new GraphVertex("A");
    const endVertex = new GraphVertex("B");

    const edge = new GraphEdge(startVertex, endVertex, 10);

    expect(edge.getKey()).toBe("A_B");
    expect(edge.toString()).toBe("A_B");
    expect(edge.startVertex).toBe(startVertex);
    expect(edge.endVertex).toBe(endVertex);
    expect(edge.weight).toBe(10);
  });

  it("should reverse the order of the edge.", () => {
    const startVertex = new GraphVertex("A");
    const endVertex = new GraphVertex("B");

    const edge = new GraphEdge(startVertex, endVertex, 10);

    edge.reverse();

    expect(edge.getKey()).toBe("B_A");
    expect(edge.toString()).toBe("B_A");
    expect(edge.startVertex).toBe(endVertex);
    expect(edge.endVertex).toBe(startVertex);
    expect(edge.weight).toBe(10);
  });
});
