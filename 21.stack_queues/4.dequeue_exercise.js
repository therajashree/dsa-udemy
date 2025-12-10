// Queues - dequeue Exercise
// Implement the following method on the Queue class.

// dequeue

// This function removes and returns the value at the beginning (front) of the queue. It should be an O(1) operation that updates the queue by:

// Removing the front node.

// Updating the first pointer to the next node.

// Decrementing the size of the queue.

// If the queue becomes empty, ensure that both first and last are set to null.

// If the queue is empty, return null.

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
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.size === 1) {
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.val;
    }
}

var queue = new Queue();
console.log(queue.enqueue(10));    // returns 1, size becomes 1
console.log(queue.enqueue(100));   // returns 2, size becomes 2
console.log(queue.enqueue(1000));  // returns 3, size becomes 3
console.log(queue.dequeue());      // returns 10, size becomes 2

// node 4.dequeue_exercise.js
