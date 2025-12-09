// DLL pop - Exercise
// Implement the following on the DoublyLinkedList class:

// pop

// This function should remove a node at the end of the DoublyLinkedList.
//  It should return the node removed.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }

        this.length--;
        return oldTail;
    }
}

var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.push(5)); // doublyLinkedList
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.prev) // null
console.log(doublyLinkedList.push(10)); // doublyLinkedList 
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.tail.val); // 10
console.log(doublyLinkedList.head.next.prev.val) // 5
console.log(doublyLinkedList.push(15)); // doublyLinkedList
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 15
console.log(doublyLinkedList.tail.prev.val); // 10
console.log(doublyLinkedList.head.next.next.val); // 15
 
console.log(doublyLinkedList.pop().val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.pop().val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.pop().val); // 5
console.log(doublyLinkedList.length); // 0
console.log(doublyLinkedList.pop()); // undefined
console.log(doublyLinkedList.length); // 0

// node 2.pop_exercise.js