// DLL unshift - Exercise
// Implement the following on the DoublyLinkedList class:

// unshift

// This function should accept a value and add a node to the beginning of the DoublyLinkedList with the given value. 
// It should return the DoublyLinkedList.

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(val) {
        let node = new Node(val);
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.oldHead = this.head;
            this.head = node;
            this.head.next = this.oldHead;
            this.oldHead.prev = node;
        }

        this.length++;
        return this;
    }
}

var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.unshift(5)); // doublyLinkedList
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(10)); // doublyLinkedList 
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 10
console.log(doublyLinkedList.head.next.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(15)); doublyLinkedList
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 15
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.next.next.val); // 5

// node 4.unshift_exercise.js