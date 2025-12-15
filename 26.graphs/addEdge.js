class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(key) {
        if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}

let graph = new Graph();
graph.addVertex("Tokayo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
console.log(graph.adjacencyList);

graph.addEdge("Tokayo", "Dallas");
graph.addEdge("Dallas", "Aspen");

console.log(graph.adjacencyList);
// node addEdge.js