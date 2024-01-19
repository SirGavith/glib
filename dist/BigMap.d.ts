export declare class BigMap<K, V> {
    private maps;
    private readonly kMaxSize;
    constructor(entries?: readonly (readonly [K, V])[] | null);
    set(key: K, value: V): void;
    has(key: K): boolean;
    get(key: K): (V & ({} | null)) | undefined;
    delete(key: K): boolean;
    clear(): void;
    get size(): number;
    forEach(callbackFn: (value: K | V | [K, V]) => void): void;
    entries(): {
        next: () => IteratorReturnResult<any> | IteratorYieldResult<V> | IteratorYieldResult<K> | IteratorYieldResult<[K, V]>;
        [Symbol.iterator]: () => any;
    };
    keys(): {
        next: () => IteratorReturnResult<any> | IteratorYieldResult<V> | IteratorYieldResult<K> | IteratorYieldResult<[K, V]>;
        [Symbol.iterator]: () => any;
    };
    values(): {
        next: () => IteratorReturnResult<any> | IteratorYieldResult<V> | IteratorYieldResult<K> | IteratorYieldResult<[K, V]>;
        [Symbol.iterator]: () => any;
    };
    [Symbol.iterator](): {
        next: () => IteratorReturnResult<any> | IteratorYieldResult<V> | IteratorYieldResult<K> | IteratorYieldResult<[K, V]>;
        [Symbol.iterator]: () => any;
    };
    private mapForKey;
    private valueForKey;
    private iterator;
}
