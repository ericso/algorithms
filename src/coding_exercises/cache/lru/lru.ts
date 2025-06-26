// LRUCache implements an LRU cache using TypeScript's built in Map key ordering.
export class LRUCache {
    private cache: Map<string, string>;

    // capacity is the number of entires this cache can hold
    capacity: number;

    constructor(cap: number = 10) {
        this.cache = new Map();
        this.capacity = cap;
    }

    get(key: string): string | undefined {
        if (!this.cache.has(key)) return undefined;

        const value = this.cache.get(key)!;

        // deleting and resetting the key moves it to the end (most recently used)
        this.cache.delete(key);
        this.cache.set(key, value); 
        
        return value;
    }

    set(key: string, value: string): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // remove the least recently used item (first key in the Map)
            const lruKey = this.cache.keys().next().value!;
            this.cache.delete(lruKey);
        }

        this.cache.set(key, value);
    }

}
