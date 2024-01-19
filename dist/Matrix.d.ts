import { Array2D } from "./XY";
export declare class Matrix<U extends number | bigint> {
    Matrix: Array2D<U>;
    Size: number;
    constructor(matrix: Array2D<U>);
    Determinant(): U;
    Copy(): Matrix<U>;
    Log(): void;
}
