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
