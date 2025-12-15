class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    addVertex(key) {
        if(!this.adjacencyList[key]) this.adjacencyList[key] = [];
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(v) {
        while(this.adjacencyList[v].length) {
            let removedVertex = this.adjacencyList[v].pop();
            this.removeEdge(v, removedVertex);
        }
        delete this.adjacencyList[v];
    }
}

let graph = new Graph();

graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angels");
graph.addVertex("Hong Kong");

console.log(graph.adjacencyList);

graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angels", "Hong Kong");
graph.addEdge("Los Angels", "Aspen");

console.log(graph.adjacencyList);

// graph.removeEdge("Tokayo", "Dallas");
// console.log(graph.adjacencyList);

graph.removeVertex("Hong Kong");
console.log(graph.adjacencyList);

// node removeVertex.js