interface BigInt {
    /** @returns The number of digits of a bigint */
    DigitCount(): number;
    /** @returns An array of the digits of the bigint */
    IntDigits(): number[];
    SumDigits(): number;
    /** Takes the square root of a bigint to a certain presicion
     * @param precision The number of digits of precision
     * @returns The square root digits as a bigint -- no decimal
     */
    SqrtDigits(precision: number): bigint;
    Sq(): bigint;
    Exp(pow: bigint): bigint;
    Factorial(): bigint;
    RotateDigits(): bigint;
    IsPrime(): boolean;
}
