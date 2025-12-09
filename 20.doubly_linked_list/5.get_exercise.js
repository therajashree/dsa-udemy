// DLL get - Exercise
// Implement the following on the DoublyLinkedList class:

// get

// This internal/helper function should find a node at a specified index in a DoublyLinkedList.
// It should return the found node.

// (Note: you don't need to re-implement push, the tests will be provided with it.)

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

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter; let current;
        if(index < this.length/2) {
            counter = 0;
            current = this.head;

            while(index !== counter) {
                counter++;
                current = current.next;
            }
            return current;
        } else {
            counter = this.length - 1;
            current = this.tail;

            while(index !== counter) {
                counter--;
                current = current.prev;
            }
            return current;
        }
    }
}

var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.get(0).val) // 5
console.log(doublyLinkedList.get(1).val) // 10
console.log(doublyLinkedList.get(2).val) // 15
console.log(doublyLinkedList.get(3).val) // 20

console.log(doublyLinkedList.get(4)) // null

// node 5.get_exercise.js