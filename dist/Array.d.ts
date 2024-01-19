import { Cx } from "./Complex";
declare global {
    interface Array<T> {
        /** returns a shallow copy of an array */
        Copy(): T[];
        CopyFast(): T[];
        Push(val: T): T[];
        set(index: number, value: T): void;
        ForEach(action: (value: T, index: number, array: T[]) => boolean | void): void;
        forEachReversed(action: (value: T, index?: number, array?: T[]) => boolean | void): void;
        forEachPair(action: (value: [T, T], index: [number, number]) => void, allowDuplicates?: boolean, allowDoubles?: boolean, allowCrosspairs?: boolean): void;
        forEachGroup(groupSize: number, action: (value: T[], index: number[]) => void, allowDuplicates?: boolean, allowDoubles?: boolean): void;
        Reduce(action: (prev: T, val: T, index: number, arr: T[]) => T | [T, boolean]): T;
        Reduce(action: (prev: T, val: T, index: number, arr: T[]) => T | [T, boolean], start: T): T;
        Reduce<TT>(action: (prev: TT, val: T, index: number, arr: T[]) => TT | [TT, boolean], start: TT): TT;
        Intersect(arr: T[]): T[];
        Uniques(): T[];
        Duplicates(): T[];
        IsUnique(): boolean;
        MostCommon(): T;
        LeastCommon(): T;
        /** loops until the list has one element, which it returns.
         in each iteration, it filters the list by the filter */
        ReduceFilter(filter: (value: T, index: number, array: T[]) => boolean): T;
        ReduceAccumulate(lambda: (prev: T, val: T, index: number, a: T[]) => number): number;
        Run(...lambdas: ((value: T) => void)[]): T[];
        FillEmpty(value: T, pad?: number): Array<T>;
        Count(predicate?: (value: T, index: number, array: T[]) => boolean): number;
        IncrementOrCreate(index: number, value?: number): Array<T>;
        PushOrCreate2D(index: number, value: T): void;
        Permutations(): T[][];
        Frequency(val: T): number;
        Frequencies(sort?: boolean): [T, number][];
        MaxFrequency(): number;
        Random(): T;
        Reverse(): T[];
        Sort(compareFn?: ((a: T, b: T) => number) | undefined): T[];
        UndefinedIfEmpty(): T[] | undefined;
        RemoveUndefined(): NonNullable<T>[];
        WithIndices(): [T, number][];
        Indices(): number[];
        Median(): T;
        Max(): T;
        Min(): T;
        Log(): Array<T>;
        With(i: number, val: T): Array<T>;
        IncrementOrCreate2D(val1: number, val2: number): void;
        Transpose2D(): Array<T>;
        toObject(): {};
        toCx(): Cx[];
        toIntArray(radix?: number): number[];
    }
}
declare global {
    interface Array<T> {
        Sum(): T;
        Product(): T;
        toInt(radix?: number): number;
    }
}
export declare function Range(start: number, stop: number): number[];
export declare function Convolute(l1: number[], l2: number[], truncate?: boolean): number[];
export type RecursiveArray<T> = (T | RecursiveArray<T>)[];
export type n1 = [number];
export type n2 = [number, number];
export type n3 = [number, number, number];
export type n4 = [number, number, number, number];
export type n5 = [number, number, number, number, number];
export type n6 = [number, number, number, number, number, number];
export type n7 = [number, number, number, number, number, number, number];
export type n8 = [number, number, number, number, number, number, number, number];
export type n9 = [number, number, number, number, number, number, number, number, number];
