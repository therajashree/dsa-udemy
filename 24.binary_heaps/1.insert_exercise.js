// BinaryHeap - insert Exercise
// Implement the following functions on the maxBinaryHeap class

// insert

// Implement the `insert` function on the `MaxBinaryHeap.prototype`: 
// This function should insert a node in a binary heap. Make sure to re-order the heap after insertion if necessary.

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if(element <= parent) break;

            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
}

binaryHeap = new MaxBinaryHeap()
binaryHeap.insert(1)
console.log(binaryHeap.values[0]) // 1
 
binaryHeap.insert(2)
console.log(binaryHeap.values[0]) // 2
 
console.log(binaryHeap.values) // [2, 1]
 
binaryHeap.insert(3)
console.log(binaryHeap.values[0]) // 3
 
console.log(binaryHeap.values); // [3, 1, 2]
 
binaryHeap.insert(4)
console.log(binaryHeap.values[0]) // 4
 
console.log(binaryHeap.values) // [4, 3, 2, 1]
 
binaryHeap.insert(5)
console.log(binaryHeap.values[0]) // 5
 
console.log(binaryHeap.values) // [5, 4, 2, 1, 3]
 
binaryHeap.insert(6)
console.log(binaryHeap.values[0]) // 6
 
console.log(binaryHeap.values) // [6, 4, 5, 1, 3, 2]

// node 1.insert_exercise.js
