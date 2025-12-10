// Stacks - pop Exercise
// Implement the following methods on the Stack class:

// pop - removes the node at the top of the stack and returns the value of that node.

// Note: The tests for pop rely on push working (it has been implemented for you).

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
        let node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = temp.next;
        this.size--;

        return temp.value;
    }
}

var stack = new Stack();
 
console.log(stack.push(10));
console.log(stack.push(100));
console.log(stack.push(1000));
var removed = stack.pop();
console.log(removed) // 1000
console.log(stack.size) // 2
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size )// 0

// node 2.pop_exercise.js