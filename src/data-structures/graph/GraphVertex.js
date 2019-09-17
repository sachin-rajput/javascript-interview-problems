import LinkedList from "../linked-list/LinkedList";

export default class GraphVertex {
  constructor(value) {
    if (value === undefined) {
      throw new Error("Cannot create vertex without a value");
    }

    /**
     *
     * @param {GraphEdge} edgeA
     * @param {GraphEdge} edgeB
     */
    const edgeComparator = (edgeA, edgeB) => {
      if (edgeA.getKey() === edgeB.getKey()) {
        return 0;
      }

      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    };

    // the value can be a string or any object for the vertex
    this.value = value;
    this.edges = new LinkedList(edgeComparator);
  }

  /**
   * Add an edge to the vertex
   *
   * @param {GraphEdge} edge
   * @return {GraphVertex}
   */
  addEdge(edge) {
    this.edges.append(edge);

    return this;
  }

  /**
   * Deletes an edge from the edges list
   *
   * @param {*} toBeDeletedEdge
   */
  deleteEdge(toBeDeletedEdge) {
    this.edges.delete(toBeDeletedEdge);
  }

  /**
   * Delete all the edges for this vertex
   *
   * @return {GraphVertex}
   */
  deleteAllEdges() {
    this.getEdges().forEach((edge) => {
      this.deleteEdge(edge);
    });

    return this;
  }

  hasNeighbor(vertex) {
    const checkNeighbor = (edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    };

    const edgeNeighbor = this.edges.find({
      callback: checkNeighbor
    });

    return !!edgeNeighbor;
  }

  /**
   * Check if required edge exist in current vertex's neighbors
   *
   * @param {*} requiredEdge
   * @return {boolean}
   */
  hasEdge(requiredEdge) {
    const edgeNode = this.edges.find({
      callback: (edge) => {
        return edge === requiredEdge;
      }
    });

    return !!edgeNode;
  }

  /**
   * get all the neighbors for the current vertex
   */
  getNeighbors() {
    const edges = this.edges.toArray();

    /** @param {linkedListNode} node */
    // eslint-disable-next-line arrow-parens
    const convertNeighbors = (node) => {
      return node.value.startVertex === this ? node.value.endVertex : node.value.startVertex;
    };

    return edges.map(convertNeighbors);
  }

  /**
   * Get all edges of the vertex
   *
   * @return {GraphEdge[]}
   */
  getEdges() {
    return this.edges.toArray().map((linkedListNode) => {
      return linkedListNode.value;
    });
  }

  /**
   * Find edge by vertex
   *
   * @param {GraphVertex} vertex
   * @return {GraphEdge}
   */
  findEdge(vertex) {
    const checkEdge = (edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    };

    const edge = this.edges.find({ callback: checkEdge });

    return edge ? edge.value : null;
  }

  /**
   * Get number of edges for this vertex
   *
   * @return {number}
   */
  getDegree() {
    return this.edges.toArray().length;
  }

  /**
   * @return {*} - string or object
   */
  getKey() {
    return this.value;
  }

  /**
   *
   * @param {*} callback
   * @return {string}
   */
  toString(callback) {
    return callback ? callback(this.getKey()) : `${this.getKey()}`;
  }
}
