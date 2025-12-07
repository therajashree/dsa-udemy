class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next
        this.length--;
        if (this.length === 0) this.tail = null;
        return currentHead;
    }
}

let list = new SinglyLinkedList();

list.push("Hi");
list.push("Saanvi");
list.push("Rachann");

console.log(list);

console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);


// node shift.js