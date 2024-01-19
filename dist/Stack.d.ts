export declare class Stack<T> {
    private array;
    constructor(Array?: T[]);
    get Count(): number;
    Peek(): T | undefined;
    Pop(): T | undefined;
    Push(val: T): void;
    Clear(): void;
    get Array(): T[];
    toString(): string;
}
