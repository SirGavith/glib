import { XY } from "./XY";
export declare class Cx {
    Re: number;
    Im: number;
    constructor();
    constructor(Real: number);
    constructor(Real: number, Imaginary: number);
    get Norm(): number;
    get TaxicabNorm(): number;
    plus(b: Cx): Cx;
    minus(b: Cx): Cx;
    times(b: Cx): Cx;
    RoundFloating(): Cx;
    toXY(): XY;
    toString(): string;
    Log(): Cx;
    static fromAngle(phi: number): Cx;
    static fromTuple(t: [number, number]): Cx;
    static get One(): Cx;
    static get NOne(): Cx;
    static get i(): Cx;
    static get Ni(): Cx;
}
