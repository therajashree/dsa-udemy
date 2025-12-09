// Extra Challenge: DLL reverse - Exercise
// Implement the following on the DoublyLinkedList class:

// reverse

// This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

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
            node.prev  = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    reverse() {
        if (!this.head) return this;

        let current = this.head;
        let temp = null;

        // Swap head and tail
        this.head = this.tail;
        this.tail = current;

        // Traverse list and swap next/prev on each node
        while (current) {
            // Temporarily store next pointer
            temp = current.next;

            // Swap next and prev
            current.next = current.prev;
            current.prev = temp;

            // Move forward (using temp because next was swapped)
            current = temp;
        }

        return this;
    }
}

let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.reverse()); // singlyLinkedList;
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 20
console.log(doublyLinkedList.head.next.val); // 15
console.log(doublyLinkedList.head.next.next.val); // 10
console.log(doublyLinkedList.head.next.next.next.val); // 5

// node 9.reverse_exercise.js