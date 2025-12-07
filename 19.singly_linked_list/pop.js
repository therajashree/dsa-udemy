class Node {
    constructor(val) {
        this.val = val;
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

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.length--;
        this.tail = newTail;
        this.tail.next = null;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

let list = new SinglyLinkedList();

list.push("Hi")
list.push("Saanvi")
list.push("Rachan");

console.log(list);

console.log('pop', list.pop());
console.log('pop', list.pop());
console.log('pop', list.pop());

console.log(list);


// node pop.js