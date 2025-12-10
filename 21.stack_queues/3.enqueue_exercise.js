// Queues - enqueue Exercise
// Implement the following method on the Queue class.

// enqueue

// This function adds a given value to the end (back) of the queue. 
// It should be an O(1) operation that updates the queue by:

// creating a new node with the given value,

// adding the new node to the end of the queue,

// updating the first and last pointers accordingly,

// incrementing the size of the queue, and

// returning the new size.

// If the queue is empty, both first and last should point to the new node.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this.size;
    }
}
var queue = new Queue();
console.log(queue.enqueue(10));    // returns 1, size becomes 1
console.log(queue.enqueue(100));   // returns 2, size becomes 2
console.log(queue.enqueue(1000));  // returns 3, size becomes 3


// node 3.enqueue_exercise.js