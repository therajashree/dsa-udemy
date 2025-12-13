class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size); 
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;

            return (total * prime + value) % this.keyMap.length;
        }
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
}


let hasTable = new HashTable();

hasTable.set("hello world", "goodbye!");
hasTable.set("dogs", " are cool");
hasTable.set("cats", "are fine");
hasTable.set("i love", "pizza");
hasTable.set("hi", "bye");
hasTable.set("french", "fries");
console.log(hasTable.keyMap);

// node set.js