export declare class BigSet<T> {
    private sets;
    private readonly kMaxSize;
    constructor(iterable?: Iterable<T> | null | undefined);
    add(key: T): void;
    has(key: T): boolean;
    delete(key: T): boolean;
    clear(): void;
    get size(): number;
    forEach(callbackFn: (value: T | [T, T]) => void): void;
    entries(): {
        next: () => IteratorReturnResult<any> | IteratorYieldResult<T> | IteratorYieldResult<[T, T]>;
        [Symbol.iterator]: () => any;
    };
    keys(): {
        next: () => IteratorReturnResult<any> | IteratorYieldResult<T> | IteratorYieldResult<[T, T]>;
        [Symbol.iterator]: () => any;
    };
    values(): {
        next: () => IteratorReturnResult<any> | IteratorYieldResult<T> | IteratorYieldResult<[T, T]>;
        [Symbol.iterator]: () => any;
    };
    [Symbol.iterator](): {
        next: () => IteratorReturnResult<any> | IteratorYieldResult<T> | IteratorYieldResult<[T, T]>;
        [Symbol.iterator]: () => any;
    };
    private setForKey;
    private iterator;
}
