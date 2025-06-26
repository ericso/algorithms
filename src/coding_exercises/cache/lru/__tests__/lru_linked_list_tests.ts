import { LRUCache } from '../lru_linked_list';

describe('LRUCache', () => {
  let lruCache: LRUCache<string, string>;

  beforeEach(() => {
    lruCache = new LRUCache(3); // Create a fresh instance before each test
  });

  it('should properly store and retrieve a value', () => {
    lruCache.set('key1', 'value1');
    expect(lruCache.get('key1')).toBe('value1');
  });

  it('should return undefined for non-existent keys', () => {
    expect(lruCache.get('nonexistent')).toBeUndefined();
  });

  it('should evict least recently used item when capacity is exceeded', () => {
    lruCache.set('key1', 'value1');
    lruCache.set('key2', 'value2');
    lruCache.set('key3', 'value3');
    lruCache.set('key4', 'value4'); // This should evict key1

    expect(lruCache.get('key1')).toBeUndefined();
    expect(lruCache.get('key2')).toBe('value2');
    expect(lruCache.get('key3')).toBe('value3');
    expect(lruCache.get('key4')).toBe('value4');
  });

  it('should update existing keys and move them to most recently used', () => {
    lruCache.set('key1', 'value1');
    lruCache.set('key2', 'value2');
    lruCache.set('key3', 'value3');
    
    // Access key1 to make it most recently used
    lruCache.get('key1');
    
    // Add new key, should evict key2 (least recently used)
    lruCache.set('key4', 'value4');
    
    expect(lruCache.get('key1')).toBe('value1'); // Should still exist
    expect(lruCache.get('key2')).toBeUndefined(); // Should be evicted
    expect(lruCache.get('key3')).toBe('value3');
    expect(lruCache.get('key4')).toBe('value4');
  });
}); 