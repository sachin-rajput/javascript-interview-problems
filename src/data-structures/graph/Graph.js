// import GraphVertex from "./GraphVertex";

export default class Graph {
  /**
   * @param {boolean} isDirected
   */
  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  /**
   * Add a vertex to this graph
   *
   * @param {GraphVertex} vertex
   * @retrun {Graph}
   */
  addVertex(vertex) {
    this.vertices[vertex.getKey()] = vertex;

    return this;
  }

  /**
   * Get Vertex by key
   *
   * @param {string} vertexKey
   * @return {GraphVertex}
   */
  getVertexByKey(vertexKey) {
    return this.vertices[vertexKey];
  }

  /**
   * Return all vertices of the graph
   *
   * @return {GraphVertex[]}
   */
  getAllVertices() {
    return Object.values(this.vertices);
  }

  /**
   * Return all edges of the graph
   *
   * @return {GraphEdge[]}
   */
  getAllEdges() {
    return Object.values(this.edges);
  }

  /**
   * Return all the neighbors of a vertex
   *
   * @param {GraphVertex} vertex
   * @return {GraphVertex[]}
   */
  getNeighbors(vertex) {
    return vertex.getNeighbors();
  }

  /**
   * Add an edge to the Graph
   *
   * @param {*} edge
   * @return {Graph}
   */
  addEdge(edge) {
    // Try to find and end start vertices.
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    // Insert start vertex if it wasn't inserted.
    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }

    // Insert end vertex if it wasn't inserted.
    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }

    // Check if edge has been already added.
    if (this.hasEdge(edge)) {
      throw new Error("Edge has already been added before");
    } else {
      this.edges[edge.getKey()] = edge;
    }

    // Add edge to the vertices.
    if (this.isDirected) {
      // If graph IS directed then add the edge only to start vertex.
      startVertex.addEdge(edge);
    } else {
      // If graph ISN'T directed then add the edge to both vertices.
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  /**
   * Check if an edge exist in the Graph
   *
   * @param {GraphEdge} edge
   * @return {boolean}
   */
  hasEdge(edge) {
    const edgeToFind = this.edges[edge.getKey()];

    return !!edgeToFind;
  }

  /**
   * Delete the edge from the Graph and the vertices
   *
   * @param {*} edge
   */
  deleteEdge(edge) {
    if (this.hasEdge(edge)) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error("Edge does not exist in the Graph");
    }

    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
  }

  /**
   * GetEdge by start and end vertex
   *
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @return {(GraphEdge|null)}
   */
  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (!vertex) {
      return null;
    }

    return vertex.findEdge(endVertex);
  }

  /**
   * Convert the vertices list to Array and return the toString
   */
  toString() {
    return Object.keys(this.vertices).toString();
  }
}
