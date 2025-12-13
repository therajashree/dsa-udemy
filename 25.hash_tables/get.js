class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;

        for(let i =0; i < Math.min(key.length, 100); i++) {
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

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            let values = this.keyMap[index];
            for(let i = 0; i < values.length; i++) {
                if(values[i][0] === key) {
                    return values[i][1];
                }
            }
        }
        return undefined;
    }
}
let hasTable = new HashTable();
hasTable.set("hello world", "goodbye!");
hasTable.set("dogs", " are cool");
hasTable.set("cats", "are fine");
hasTable.set("i love", "my family");
hasTable.set("hi", "bye");
hasTable.set("french", "fries");

console.log(hasTable.get("french"));
console.log(hasTable.get("hi"));
console.log(hasTable.get("i love"));
