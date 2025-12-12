class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;

            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    insert(ele) {
        this.values.push(ele);
        this.bubbleUp();
    }

    sinkDown() {
        let index = 0
        let length = this.values.length;
        let element = this.values[0];

        while(true) {
            let leftChild, rightChild;
            let swap = null;
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            
            index = swap; 
        }
    }

    extractMax() {
        // swap first and last element
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.extractMax()) // 55
console.log(heap.values); // [ 41, 39, 33, 18, 27, 12 ]
console.log(heap.extractMax()) // 41
console.log(heap.values); // [ 39, 27, 33, 18, 12 ]
console.log(heap.extractMax()) // 39
console.log(heap.values); // [ 33, 27, 12, 18 ]
console.log(heap.extractMax()) // 33
console.log(heap.values); // [ 27, 18, 12 ]
// node extract_max.js