// Graphs Exercise - addEdge
// Implement the following methods on the Graph class - addVertex has been implemented for you

// addEdge - this function should add an edge between two nodes in the graph and place each 
// value of the nodes in each array for the value of the node in the adjacency list.


class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}

var graph = new Graph();
 
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
 
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
 
console.log(graph.adjacencyList['A']);
console.log(graph.adjacencyList);

// node 2.addEdge_exercise.js