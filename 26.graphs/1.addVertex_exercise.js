// Graphs Exercise - addVertex
// Implement the following methods on the Graph class

// addVertex- this function should add a node to the graph and place a new key in the adjacency 
// list with the value of an empty array.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(k) {
        if(!this.adjacencyList[k]) this.adjacencyList[k] = [];
    }
}

var graph = new Graph;
 
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
console.log(graph.adjacencyList['A']); // []
console.log(graph.adjacencyList['B']); // []
console.log(graph.adjacencyList['C']); // []

// node 1.addVertex_exercise.js