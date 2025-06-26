// LRUCache implements an LRU cache using a doubly-linked list to track LRU
export class LRUCache<K, V> {
    private cache = new Map<K, LRUNode<K, V>>();
    private head: LRUNode<K, V> | null = null;
    private tail: LRUNode<K, V> | null = null;

    constructor(private capacity: number) {}

    get(key: K): V | undefined {
        const node = this.cache.get(key);
        if (!node) return undefined;

        this.moveToFront(node);
        return node.value;
    }

    set(key: K, value: V): void {
        let node = this.cache.get(key);

        if (node) {
            node.value = value;
            this.moveToFront(node);
        } else {
            node = new LRUNode(key, value);
            this.cache.set(key, node);
            this.addToFront(node);

            if (this.cache.size > this.capacity) {
                this.evictLRU();
            }
        }

    }

    // ----------- HELPER FUNCTIONS -----------
    private moveToFront(node: LRUNode<K, V>): void {
        if (node === this.head) return;
        this.removeNode(node);
        this.addToFront(node);
    }
    
    private addToFront(node: LRUNode<K, V>): void {
        node.next = this.head;
        node.prev = null;
        
        // update the head
        if (this.head) this.head.prev = node;
        this.head = node;

        // make sure we set the tail in the case this is the ONLY node in the LRU
        if (!this.tail) this.tail = node;
    }

    private removeNode(node: LRUNode<K, V>): void {
        if (node.prev) node.prev.next = node.next;
        else this.head = node.next; // if node has no previous, then it was at the head

        if (node.next) node.next.prev = node.prev;
        else this.tail = node.prev; // if node has no next, then it was at the tail
    }

    // evictLRU removes the least recently used key/value pair 
    private evictLRU(): void {
        if (!this.tail) return;

        const lrukey = this.tail.key;
        this.removeNode(this.tail);
        this.cache.delete(lrukey);
    }

    // Optional helpers
    size(): number {
        return this.cache.size;
    }

    keys(): K[] {
        const result: K[] = [];
        let current = this.head;
        while (current) {
            result.push(current.key);
            current = current.next;
        }
        return result;
    }
}

// LRUNode is a node in the linked list
export class LRUNode<K, V> {
    constructor(
        public key: K,
        public value: V,
        public prev: LRUNode<K, V> | null = null,
        public next: LRUNode<K, V> | null = null
    ) {}
}