import GraphVertex from "../GraphVertex";
import GraphEdge from "../GraphEdge";

describe("GraphVertex", () => {
  it("should throw an error, if no value is passed.", () => {
    let vertex = null;

    function createEmptyVertex() {
      vertex = new GraphVertex();
    }

    expect(vertex).toBeNull();
    expect(createEmptyVertex).toThrow();
  });

  it("should create a graph vertex.", () => {
    const vertex = new GraphVertex("A");

    expect(vertex).toBeDefined();
    expect(vertex.value).toBe("A");
    expect(vertex.toString()).toBe("A");
    expect(vertex.getKey()).toBe("A");
    expect(vertex.edges.toString()).toBe("");
    expect(vertex.getEdges()).toEqual([]);
  });

  it("should add edges to vertex and check if it exists.", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.hasEdge(edgeAB)).toBe(true);
    expect(vertexB.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.getEdges().length).toBe(1);
    expect(vertexA.getEdges()[0].toString()).toBe("A_B");
  });

  it("should delete edges from vertex.", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    vertexA.addEdge(edgeAB);
    vertexA.addEdge(edgeAC);

    expect(vertexA.hasEdge(edgeAB)).toBe(true);
    expect(vertexB.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.getEdges().length).toBe(2);
    expect(vertexA.getEdges()[0].toString()).toBe("A_B");
    expect(vertexA.getEdges()[1].toString()).toBe("A_C");

    vertexA.deleteEdge(edgeAB);
    expect(vertexA.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.getEdges().length).toBe(1);
    expect(vertexA.getEdges()[0].toString()).toBe("A_C");
  });

  it("should delete all edges from vertex.", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    vertexA.addEdge(edgeAB);
    vertexA.addEdge(edgeAC);

    expect(vertexA.hasEdge(edgeAB)).toBe(true);
    expect(vertexB.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.getEdges().length).toBe(2);
    expect(vertexA.getEdges()[0].toString()).toBe("A_B");
    expect(vertexA.getEdges()[1].toString()).toBe("A_C");

    vertexA.deleteAllEdges();
    expect(vertexA.getEdges().length).toBe(0);
  });

  it("should return vertex neighbors in case if current node is start one.", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    vertexA.addEdge(edgeAB);
    vertexA.addEdge(edgeAC);

    expect(vertexB.getNeighbors()).toEqual([]);
    const neighbors = vertexA.getNeighbors();

    expect(neighbors[0].toString()).toBe("B");
    expect(neighbors[1].toString()).toBe("C");
  });

  it("should return vertex neighbors in case if current node is end one.", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeBA = new GraphEdge(vertexB, vertexA);
    const edgeCA = new GraphEdge(vertexC, vertexA);
    vertexA.addEdge(edgeBA);
    vertexA.addEdge(edgeCA);

    expect(vertexB.getNeighbors()).toEqual([]);
    const neighbors = vertexA.getNeighbors();

    expect(neighbors[0].toString()).toBe("B");
    expect(neighbors[1].toString()).toBe("C");
  });

  it("should check if vertex has specific neighbor.", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeBA = new GraphEdge(vertexB, vertexA);
    const edgeCA = new GraphEdge(vertexC, vertexA);
    vertexA.addEdge(edgeBA);
    vertexA.addEdge(edgeCA);

    expect(vertexA.hasNeighbor(vertexB)).toBeTruthy();
  });

  it("should be able to find edge by vertex.", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.findEdge(vertexB)).toBe(edgeAB);
    expect(vertexA.findEdge(vertexC)).toBeNull();
  });

  it("should calculate vertex degree.", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");

    expect(vertexA.getDegree()).toBe(0);

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.getDegree()).toBe(1);

    const edgeBA = new GraphEdge(vertexB, vertexA);
    vertexA.addEdge(edgeBA);

    expect(vertexA.getDegree()).toBe(2);

    vertexA.addEdge(edgeAB);
    expect(vertexA.getDegree()).toBe(3);

    expect(vertexA.getEdges().length).toEqual(3);
  });
});
