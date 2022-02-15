class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
} 
class HashTable {
    constructor(props = {}) {
        const { size } = props;
        this.size = size;
        this.array = new Array(size).fill(null);
    }

    hash(string) {
        let sum = 0;

        for (let i = 0; i < string.length; i++) {
            sum += string.charCodeAt(i);
        }

        return sum % this.size;
    }

    set(key, value) {
        let node = new Node(key, value);
        let bucket = this.hash(key);

        if (this.array[bucket] === null) {
            this.array[bucket] = node;

            return;
        }

        let current = this.array[bucket];

        while(current.next) {
            if (current.key === node.key) {
                current = node;
                return
            }

            if (current.next.key === node.key) {
                current.next = node;
                return
            }

            current = current.next;
        }

        current.next = node;

        return;
    }

    get(key) {
        if (!this.find(key)) return false;
        let bucket = this.hash(key);
        let current = this.array[bucket]; 

        while (current !== null) {
            if (current.key === key) {
                return current.value;
            }

            current = current.next;
        }

        return; 
    }

    find(key) {
        let bucket = this.hash(key);
        let current = this.array[bucket]; 

        while (current !== null) {
            if (current.key === key) {
                return true;
            }

            current = current.next;
        }

        return false;
    }
}

const user = new HashTable({size: 20});
 
user.set('email', 'viktor@webbylab.com');
user.set('firstName', 'John');
user.set('lastName', 'Doe');
user.set('company', 'WebbyLab');
 
console.log(user.get('email'),
user.get('firstName'),
user.get('lastName'),
user.get('company'))