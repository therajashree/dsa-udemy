class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node  = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let tempFirst = this.first;
            this.first = node;
            this.first.next = tempFirst.next;
        }
        this.size++;
        return this;
    }

    pop() {
        if(!this.first) return null;

        let temp = this.first;
        
        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;

        return temp.val;
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());

console.log(stack);

// node stack.js