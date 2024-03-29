import { Cx } from "./Complex";
type nXY = number | XY;
export declare class XY {
    X: number;
    Y: number;
    constructor();
    constructor(size: number);
    constructor(X: number, Y: number);
    private static parseInput;
    private set;
    plus(n: nXY, n2?: number): XY;
    plusEQ(n: nXY, n2?: number): void;
    minus(n: nXY, n2?: number): XY;
    minusEQ(n: nXY, n2?: number): void;
    times(n: nXY, n2?: number): XY;
    timesEQ(n: nXY, n2?: number): void;
    div(n: nXY, n2?: number): XY;
    divEQ(n: nXY, n2?: number): void;
    mod(n: nXY, n2?: number): XY;
    modEQ(n: nXY, n2?: number): void;
    EQ(xy: XY): boolean;
    IsLessEQEither(xy: XY): boolean;
    IsLessEQBoth(xy: XY): boolean;
    IsLessEither(xy: XY): boolean;
    IsLessBoth(xy: XY): boolean;
    IsGreaterEQEither(xy: XY): boolean;
    IsGreaterEQBoth(xy: XY): boolean;
    IsGreaterEither(xy: XY): boolean;
    IsGreaterBoth(xy: XY): boolean;
    WithinBounds(xy: XY, xy2: XY): boolean;
    WithinArea(xy: XY, size: XY): boolean;
    Round(): XY;
    Floor(): XY;
    Ceil(): XY;
    Trunc(): XY;
    Abs(): XY;
    Reverse(): XY;
    Negate(): XY;
    DeZero(): XY;
    RotateCW(): XY;
    RotateCCW(): XY;
    get Least(): number;
    get Greatest(): number;
    get LeastAbs(): number;
    get GreatestAbs(): number;
    get Norm(): number;
    get TaxicabNorm(): number;
    get Area(): number;
    toArray(): number[];
    toString(): string;
    toCx(): Cx;
    Copy(): XY;
    foreachCombination(lambda: (xy: XY) => void, startXY?: XY): void;
    CountCombinations(lambda: (xy: XY) => boolean, startXY?: XY): number;
    Combinations(startXY?: XY): XY[];
    static Combinations(a: XY, b: XY): XY[];
    Neighbours(includeDiags?: boolean): XY[];
    Neighbourhood(includeDiags?: boolean): XY[];
    static toString(a: XY[]): string;
    static fromString(s: string): XY;
    static fromTuple(t: [number, number]): XY;
    static Zero: XY;
    static One: XY;
    static Up: XY;
    static Down: XY;
    static Right: XY;
    static Left: XY;
    static South: XY;
    static North: XY;
    static East: XY;
    static West: XY;
    static UpLeft: XY;
    static UpRight: XY;
    static DownLeft: XY;
    static DownRight: XY;
    Log(): this;
    toCardinalString(): "N" | "S" | "E" | "W" | undefined;
    static ArrayMinMax(arr: XY[]): [XY, XY];
    static ArraySizeOffset(arr: XY[]): [XY, XY];
}
export declare class Array2D<T> {
    Size: XY;
    Checked: boolean;
    Array: (T | undefined)[][];
    constructor(Size: XY, fillValue?: T | undefined, Checked?: boolean);
    get(xy: XY): T | undefined;
    getRow(y: number): (T | undefined)[];
    private cols;
    getCol(x: number): (T | undefined)[];
    setCol(x: number, col: (T | undefined)[]): void;
    set(xy: XY, value: T | undefined): void;
    Copy(): Array2D<T>;
    Neighbours(xy: XY, includeDiags?: boolean): [XY, T][];
    forEach(lambda: (value: T | undefined, index: XY, array: this) => void): void;
    reduce<U>(lambda: (reducer: U, value: T | undefined, index: XY, array: this) => U, reducer: U): U;
    every(lambda: (value: T | undefined, index: XY, array: this) => boolean): boolean;
    some(lambda: (value: T | undefined, index: XY, array: this) => boolean): boolean;
    map<TT>(lambda: (value: T | undefined, index: XY, array: this) => TT | undefined): Array2D<TT>;
    Find(element: T): XY | undefined;
    Flatten(): T[];
    Log(): this;
    Entries(): [XY, T][];
    Superimpose(arr: Array2D<T>, offset?: XY): Array2D<T>;
    SuperimposeSet(arr: Array2D<T>, offset?: XY): void;
    SuperimposeEQ(arr: Array2D<T>, offset?: XY): Array2D<boolean>;
    SuperimposeOverlap(arr: Array2D<T>, offset: XY): boolean;
    Transpose(): Array2D<T>;
    static fromArray<T>(arr: T[][], size?: XY): Array2D<T>;
    static fromString(a: string, size?: XY): Array2D<string>;
}
export {};
