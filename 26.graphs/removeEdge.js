class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(key) {
        if(!this.adjacencyList[key]) this.adjacencyList[key] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
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

graph.removeEdge("Tokayo", "Dallas");
console.log(graph.adjacencyList);

// node removeEdge.js
