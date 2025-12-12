class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;

            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
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
                if(leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
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

    deQueue() {
        // swap first and last element
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gun shot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in a foot", 3);

console.log(ER.values);
console.log(ER.deQueue());
console.log(ER.deQueue());
console.log(ER.deQueue());
console.log(ER.deQueue());
console.log(ER.deQueue());

// node priority_queue.js