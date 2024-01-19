export declare class LinkedList<T> {
    Head: LinkedNode<T> | undefined;
    Final: LinkedNode<T> | undefined;
    constructor();
    Push(node: LinkedNode<T>): void;
    toArray(maxCount?: number): T[];
    ForEach(lambda: (val: LinkedNode<T>) => boolean | void, maxCount?: number): void;
    Count(): number;
    BigCount(): bigint;
    toString(maxCount?: number): string;
    Log(maxCount?: number): void;
}
export declare class BiLinkedList<T> extends LinkedList<T> {
    Head: BiLinkedNode<T> | undefined;
    Final: BiLinkedNode<T> | undefined;
    Push(node: BiLinkedNode<T>): void;
    ForEach(lambda: (val: BiLinkedNode<T>) => boolean | void, maxCount?: number): void;
    Count(): number;
    RemoveNode(node: BiLinkedNode<T>): void;
}
export declare class LinkedNode<T> {
    Value: T;
    Next: LinkedNode<T> | undefined;
    constructor(Value: T);
    InsertAfter(node: LinkedNode<T>): void;
    Copy(): LinkedNode<T>;
}
export declare class BiLinkedNode<T> extends LinkedNode<T> {
    Next: BiLinkedNode<T> | undefined;
    Prev: BiLinkedNode<T> | undefined;
    InsertAfter(node: BiLinkedNode<T>): void;
    Copy(): BiLinkedNode<T>;
}
