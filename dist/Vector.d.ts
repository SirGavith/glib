export declare class Vector {
    Dims: number;
    Values: number[];
    constructor(...values: number[]);
    mag(): number;
    unit(): Vector;
    times(n: number): Vector;
    div(n: number): Vector;
    scaleTo(mag: number): Vector;
    plus(vec: Vector): Vector;
    minus(vec: Vector): Vector;
    dot(vec: Vector): number;
    cross(vec: Vector): Vector;
    angle(that: Vector): number;
    IsParallel(that: Vector): boolean;
    comp(onto: Vector): number;
    proj(onto: Vector): Vector;
    static i: Vector;
    static j: Vector;
    static k: Vector;
    static Parse(v: string): Vector;
    LogIJK(): Vector;
    Log(): Vector;
}
