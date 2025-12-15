class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(key) {
        if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
    }
}

let graph = new Graph();
graph.addVertex("Tokayo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
console.log(graph.adjacencyList);

// node addvertex.js