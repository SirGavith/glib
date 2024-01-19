type nXYZ = number | XYZ;
export declare class XYZ {
    X: number;
    Y: number;
    Z: number;
    constructor();
    constructor(size: number);
    constructor(X: number, Y: number, Z: number);
    private static parseInput;
    private set;
    plus(n: nXYZ, n2?: number, n3?: number): XYZ;
    plusEQ(n: nXYZ, n2?: number, n3?: number): void;
    minus(n: nXYZ, n2?: number, n3?: number): XYZ;
    minusEQ(n: nXYZ, n2?: number, n3?: number): void;
    compTimes(n: nXYZ, n2?: number, n3?: number): XYZ;
    compTimesEQ(n: nXYZ, n2?: number, n3?: number): void;
    compDiv(n: nXYZ, n2?: number, n3?: number): XYZ;
    compDivEQ(n: nXYZ, n2?: number, n3?: number): void;
    EQ(xyz: XYZ): boolean;
    IsLessEQAll(xy: XYZ): boolean;
    IsLessAll(xy: XYZ): boolean;
    IsGreaterEQAll(xy: XYZ): boolean;
    IsGreaterAll(xy: XYZ): boolean;
    WithinArea(xyz: XYZ, size: XYZ): boolean;
    ManhattanDist(xyz: XYZ): number;
    Abs(): XYZ;
    toArray(): number[];
    toString(): string;
    Copy(): XYZ;
    foreachCombination(lambda: (xy: XYZ) => void, startXYZ?: XYZ): void;
    Combinations(startXYZ?: XYZ): XYZ[];
    Neighbours(includeDiags?: boolean): XYZ[];
    Neighbourhood(includeDiags?: boolean): XYZ[];
    Orientations(): XYZ[];
    static toString(a: XYZ[]): string;
    static fromString(s: string): XYZ;
    static fromTuple(t: [number, number, number]): XYZ;
    static Zero: XYZ;
    static One: XYZ;
    static ArrayMinMax(arr: XYZ[]): [XYZ, XYZ];
    static ArraySizeOffset(arr: XYZ[]): [XYZ, XYZ];
}
export declare class Array3D<T> {
    Size: XYZ;
    Checked: boolean;
    Array: (T | undefined)[][][];
    constructor(Size: XYZ, fillValue?: T | undefined, Checked?: boolean);
    get(xy: XYZ): T | undefined;
    set(xy: XYZ, value: T | undefined): void;
    Copy(): Array3D<T>;
    forEach(lambda: (value: T | undefined, index: XYZ) => void | boolean): void;
    map<TT>(lambda: (value: T | undefined, index: XYZ) => TT | undefined): Array3D<TT>;
    Flatten(): (T | undefined)[];
    Log(): this;
    Entries(): [XYZ, T][];
}
export {};