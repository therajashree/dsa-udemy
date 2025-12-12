// BinaryHeap - extractMax Exercise
// Implement the following functions on the maxBinaryHeap class

// extractMax

// Implement the `extractMax` function on the `MaxBinaryHeap.prototype`: 
// This function should remove the root node in a binary heap. 
// Make sure to re-order the heap after removal if necessary.

class BinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element <= parent) break;

            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    sinkDown() {
        let index = 0;
        let element = this.values[0];
        let length = this.values.length;

        while(true) {
            let leftChild, rightChild;
            let swap = null;

            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            
            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild) 
                ) {
                    swap = rightChildIndex;
                }
            }


            if(swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }
}

let binaryHeap = new BinaryHeap();
binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)

console.log(binaryHeap.values) // [ 6, 4, 5, 1, 3, 2 ]

binaryHeap.extractMax();
console.log(binaryHeap.values[0]) // 5
 
console.log(binaryHeap.values) // [5,4,2,1,3])
 
binaryHeap.extractMax()
console.log(binaryHeap.values) // [4,3,2,1])
 
binaryHeap.extractMax()
console.log(binaryHeap.values) // [3,1,2])

// node 2.extract_max_exercise.js