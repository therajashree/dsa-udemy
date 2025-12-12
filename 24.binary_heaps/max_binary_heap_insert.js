class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;

            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    insert(ele) {
        this.values.push(ele);
        this.bubbleUp();
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap.values);

// node max_binary_heap_insert