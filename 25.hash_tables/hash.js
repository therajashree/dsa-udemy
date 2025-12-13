class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        
        for(let i = 0; i< Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }
}


let hasTable = new HashTable();
console.log(hasTable._hash("cyan"));
console.log(hasTable._hash("pink"));



// node hash.js