// DLL insert - Exercise
// Implement the following on the DoublyLinkedList class:

// insert

// This internal/helper function should insert a node at a specified index in a DoublyLinkedList. 
// It should return true if the index is valid, and false 
// if the index is invalid (less than 0 or greater than the length of the list).

// (Note: you don't need to re-implement push, the tests will be provided with it)

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

        if (!this.head) {
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

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter; let current;

        if (index <= this.length/2) {
            counter = 0;
            current = this.head;
            while(index !== counter) {
                counter++;
                current = current.next;
            }
            return current;
        } else {
            counter = this.length-1;
            current = this.tail;
            while(index !== counter) {
                counter--;
                current = current.prev;
            }
            return current;
        }
    }

    unshift(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let oldHead = this.head;
            oldHead.prev = node;
            node.next = oldHead;
            this.head = node;
        }
        this.length++;
        return this;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length - 1) return !!this.push(val);

        let node = new Node(val);
        let previousNode = this.get(index - 1);
        let afterNode = previousNode.next;

        previousNode.next = node; node.prev = previousNode;
        node.next = afterNode; afterNode.prev = node;

        this.length++;
        return true;
    }
}

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.length) // 4
console.log(doublyLinkedList.insert(2,12)); // true
console.log(doublyLinkedList.insert(100,12)); // false
console.log(doublyLinkedList.length) // 5
console.log(doublyLinkedList.head.val) // 5
console.log(doublyLinkedList.head.next.val) // 10
console.log(doublyLinkedList.head.next.next.val) // 12
console.log(doublyLinkedList.head.next.next.next.val) // 15
console.log(doublyLinkedList.head.next.next.next.next.val) // 20

// node 7.insert_exercise.js