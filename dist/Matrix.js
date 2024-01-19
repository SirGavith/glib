"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
const XY_1 = require("./XY");
class Matrix {
    Matrix;
    Size;
    constructor(matrix) {
        if (matrix.Size.X !== matrix.Size.Y)
            throw new Error('Matrix must be square');
        this.Matrix = matrix;
        this.Size = matrix.Size.X;
    }
    Determinant() {
        if (this.Size === 2) {
            return (this.Matrix.get(XY_1.XY.Zero) * this.Matrix.get(XY_1.XY.One) -
                this.Matrix.get(XY_1.XY.Right) * this.Matrix.get(XY_1.XY.Up));
        }
        else {
            //split up matrix
            //alternating sum
            return this.Matrix.getRow(0).reduce((sum, n, i) => {
                if (n === undefined)
                    throw new Error('undef in matrix');
                let sub = new Matrix(new XY_1.Array2D(new XY_1.XY(this.Size - 1)));
                sub.Matrix.Array = this.Matrix.Array.slice(1).map(a => {
                    //copy arr
                    const arr = [];
                    for (let i = 0; i < a.length; i++)
                        arr[i] = a[i];
                    arr.splice(i, 1);
                    return arr;
                });
                const det = sub.Determinant();
                // casts are a lie to appease ts
                return (i % 2 === 0 ? (sum + n * det) : (sum - n * det));
            }, ((typeof this.Matrix.Array[0][0] === 'number') ? 0 : 0n));
        }
    }
    Copy() {
        return new Matrix(this.Matrix.Copy());
    }
    Log() {
        console.log(`Matrix${this.Size}x${this.Size}`);
        this.Matrix.Array.forEach((row, i) => {
            console.log('| ' +
                row.map(v => (v === undefined ? 'NaN' :
                    (v === Infinity || (typeof v === 'number' && v >= Number.MAX_SAFE_INTEGER)) ? '∞' :
                        v.toString()).padStart(18)).join('') + ' |');
        });
    }
}
exports.Matrix = Matrix;
