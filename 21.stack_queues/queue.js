class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last  = null;
        this.size = 0;
    }

    enqueue(val) {

        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this.size;
    }

    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }

        this.first = temp.next;
        this.size--;
        return temp.val;
    }
}

let q = new Queue();

console.log(q.enqueue(10));
console.log(q.enqueue(20));
console.log(q.enqueue(30));

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());


// node queue.js