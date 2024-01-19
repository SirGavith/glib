interface Number {
    plus(n: number): number;
    minus(n: number): number;
    IsInteger(): boolean;
    /** @returns An array of the digits of the number */
    IntDigits(): number[];
    InRangeEq(v1: number, v2: number): boolean;
    IsEven(): boolean;
    IsOdd(): boolean;
    SumOfLess(): number;
    Floor(): number;
    Ceil(): number;
    RoundFloating(epsilon?: number): number;
    Log(): number;
}
type numericals = number | bigint;
