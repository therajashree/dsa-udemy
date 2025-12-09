// DLL remove - Exercise
// Implement the following on the DoublyLinkedList class:

// remove

// This function should remove a node at a specified index in a DoublyLinkedList. It should return the removed node. 
// If the index is valid, or undefined if the index is invalid.

// (Note: you don't need to re-implement push, the tests will be provided with it)

class Node {
    constructor(val) {
        this.val = val;
        this.next =null;
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
            node.prev  = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index <0 || index >= this.length) return null;

        let counter; let current;
        if (index <= this.length/2) {
            counter = 0;
            current = this.head;
            while(index !== counter) {
                current = current.next;
                counter++;
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

    pop() {
        if(!this.head) return undefined;

        let oldTail = this.tail;
        if(this.length === 1) {
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

    shift() {
        if(!this.head) return undefined;

        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let node = this.get(index);
        let beforeNode = node.prev;
        let afterNode = node.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        this.length--;
        return node;
    }
}

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.remove(2).val); // 15
console.log(doublyLinkedList.remove(100)); // undefined
console.log(doublyLinkedList.length) // 3
console.log(doublyLinkedList.head.val) // 5
console.log(doublyLinkedList.head.next.val) // 10
console.log(doublyLinkedList.head.next.next.val) // 20

// node 8.remove_exercise.js