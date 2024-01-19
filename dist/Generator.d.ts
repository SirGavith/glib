interface Generator<T, TReturn, TNext> {
    Map<U>(mapper: (value: T) => U): Generator<U>;
    Reduce(callbackfn: (prevValue: T, value: T, index: number) => T): T;
    Reduce(callbackfn: (prevValue: T, value: T, index: number) => T, initialValue: T): T;
    Reduce<U>(callbackfn: (prevValue: U, value: T, index: number) => U, initialValue: U): U;
}
declare const GeneratorPrototype: any;
