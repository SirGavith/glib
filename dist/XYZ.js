"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array3D = exports.XYZ = void 0;
class XYZ {
    X;
    Y;
    Z;
    constructor(X, Y, Z) {
        this.X = X ?? 0;
        this.Y = Y ?? this.X;
        this.Z = Z ?? this.X;
    }
    static parseInput(n, n2, n3) {
        return typeof n === "number" ? new XYZ(n, n2 ?? n, n3 ?? n2 ?? n) : n;
    }
    set(xyz) {
        ({ X: this.X, Y: this.Y, Z: this.Z } = xyz);
    }
    plus(n, n2, n3) {
        const xyz = XYZ.parseInput(n, n2, n3);
        return new XYZ(this.X + xyz.X, this.Y + xyz.Y, this.Z + xyz.Z);
    }
    plusEQ(n, n2, n3) { return this.set(this.plus(n, n2, n3)); }
    minus(n, n2, n3) {
        const xy = XYZ.parseInput(n, n2, n3);
        return new XYZ(this.X - xy.X, this.Y - xy.Y, this.Z - xy.Z);
    }
    minusEQ(n, n2, n3) { return this.set(this.minus(n, n2, n3)); }
    compTimes(n, n2, n3) {
        const xy = XYZ.parseInput(n, n2, n3);
        return new XYZ(this.X * xy.X, this.Y * xy.Y, this.Z * xy.Z);
    }
    compTimesEQ(n, n2, n3) { return this.set(this.compTimes(n, n2, n3)); }
    compDiv(n, n2, n3) {
        const xy = XYZ.parseInput(n, n2, n3);
        return new XYZ(this.X / xy.X, this.Y / xy.Y, this.Z / xy.Z);
    }
    compDivEQ(n, n2, n3) { return this.set(this.compDiv(n, n2, n3)); }
    EQ(xyz) { return xyz.X === this.X && xyz.Y === this.Y && this.Z === xyz.Z; }
    IsLessEQAll(xy) { return this.X <= xy.X && this.Y <= xy.Y && this.Z <= xy.Z; }
    IsLessAll(xy) { return this.X < xy.X && this.Y < xy.Y && this.Z < xy.Z; }
    IsGreaterEQAll(xy) { return this.X >= xy.X && this.Y >= xy.Y && this.Z >= xy.Z; }
    IsGreaterAll(xy) { return this.X > xy.X && this.Y > xy.Y && this.Z > xy.Z; }
    WithinArea(xyz, size) { return this.IsGreaterEQAll(xyz) && this.minus(xyz).IsLessEQAll(size); }
    ManhattanDist(xyz) {
        const m = this.minus(xyz).Abs();
        return m.X + m.Y + m.Z;
    }
    Abs() { return new XYZ(Math.abs(this.X), Math.abs(this.Y), Math.abs(this.Z)); }
    toArray() { return [this.X, this.Y, this.Z]; }
    toString() { return `(${this.X}, ${this.Y}, ${this.Z})`; }
    Copy() { return new XYZ(this.X, this.Y, this.Z); }
    foreachCombination(lambda, startXYZ = new XYZ) {
        for (let z = startXYZ.Z; z <= this.Z; z++)
            for (let y = startXYZ.Y; y <= this.Y; y++)
                for (let x = startXYZ.X; x <= this.X; x++)
                    lambda(new XYZ(x, y, z));
    }
    Combinations(startXYZ = new XYZ) {
        const combos = [];
        this.foreachCombination(xyz => combos.push(xyz), startXYZ);
        return combos;
    }
    // Does not include this
    Neighbours(includeDiags = false) {
        if (includeDiags)
            throw new Error('Not implemented');
        return includeDiags ? [] : [
            this.plus(-1, 0, 0),
            this.plus(1, 0, 0),
            this.plus(0, 1, 0),
            this.plus(0, -1, 0),
            this.plus(0, 0, 1),
            this.plus(0, 0, -1),
        ];
    }
    // Includes this
    Neighbourhood(includeDiags = false) {
        if (includeDiags)
            throw new Error('Not implemented');
        return includeDiags ? [] : [
            this.plus(-1, 0, 0),
            this.plus(1, 0, 0),
            this.plus(0, 1, 0),
            this.Copy(),
            this.plus(0, -1, 0),
            this.plus(0, 0, 1),
            this.plus(0, 0, -1),
        ];
    }
    Orientations() {
        let [x, y, z] = this.toArray();
        return [
            new XYZ(x, y, z),
            new XYZ(x, z, -y),
            new XYZ(x, -y, -z),
            new XYZ(x, -z, y),
            new XYZ(-x, -y, z),
            new XYZ(-x, z, y),
            new XYZ(-x, y, -z),
            new XYZ(-x, -z, -y),
            new XYZ(y, -x, z),
            new XYZ(y, -z, -x),
            new XYZ(y, x, -z),
            new XYZ(y, z, x),
            new XYZ(-y, z, -x),
            new XYZ(-y, x, z),
            new XYZ(-y, -z, x),
            new XYZ(-y, -x, -z),
            new XYZ(z, -y, x),
            new XYZ(z, -x, -y),
            new XYZ(z, y, -x),
            new XYZ(z, x, y),
            new XYZ(-z, y, x),
            new XYZ(-z, -x, y),
            new XYZ(-z, -y, -x),
            new XYZ(-z, x, -y),
        ];
    }
    static toString(a) {
        return a.map(xy => `(${xy.toString()})`).join(', ');
    }
    static fromString(s) {
        s = s.RemoveChars('()[]{} '.toArray());
        return new XYZ(...s.RemoveChars([' ']).split(',').map(n => parseInt(n)));
    }
    static fromTuple(t) {
        return new XYZ(t[0], t[1], t[2]);
    }
    static Zero = new XYZ;
    static One = new XYZ(1);
    static ArrayMinMax(arr) {
        let min = new XYZ(Number.MAX_VALUE);
        let max = new XYZ(Number.MIN_VALUE);
        arr.forEach(xyz => {
            if (xyz.X < min.X)
                min.X = xyz.X;
            if (xyz.Y < min.Y)
                min.Y = xyz.Y;
            if (xyz.Z < min.Z)
                min.Z = xyz.Z;
            if (xyz.X > max.X)
                max.X = xyz.X;
            if (xyz.Y > max.Y)
                max.Y = xyz.Y;
            if (xyz.Z > max.Z)
                max.Z = xyz.Z;
        });
        return [min, max];
    }
    static ArraySizeOffset(arr) {
        const [min, max] = this.ArrayMinMax(arr);
        return [max.minus(min).plus(1), XYZ.Zero.minus(min)];
    }
}
exports.XYZ = XYZ;
class Array3D {
    Size;
    Checked;
    Array = [];
    constructor(Size, fillValue = undefined, Checked = false) {
        this.Size = Size;
        this.Checked = Checked;
        for (let i = 0; i < Size.Z; i++) {
            this.Array[i] = [];
            for (let ii = 0; ii < Size.Y; ii++) {
                this.Array[i][ii] = Array(Size.X).fill(fillValue);
            }
        }
    }
    get(xy) {
        return this.Array.at(xy.Z)?.at(xy.Y)?.at(xy.X);
    }
    set(xy, value) {
        if (this.Checked && !xy.WithinArea(XYZ.Zero, this.Size.minus(1)))
            throw new Error('Array set out of bounds');
        if (this.Array.at(xy.Z)?.at(xy.Y) !== undefined)
            this.Array[xy.Z][xy.Y][xy.X] = value;
    }
    Copy() {
        const arr = new Array3D(this.Size);
        arr.Checked = this.Checked;
        for (let z = 0; z < this.Array.length; z++) {
            for (let y = 0; y < this.Array[z].length; y++) {
                for (let x = 0; x < this.Array[z][y].length; x++) {
                    arr.Array[z][y][z] = this.Array[z][y][x];
                }
            }
        }
        return arr;
    }
    forEach(lambda) {
        for (let z = 0; z < this.Array.length; z++) {
            for (let y = 0; y < this.Array[z].length; y++) {
                for (let x = 0; x < this.Array[z][y].length; x++) {
                    let xyz = new XYZ(x, y, z);
                    if (lambda(this.get(xyz), xyz) === true)
                        return;
                }
            }
        }
    }
    map(lambda) {
        const arr = new Array3D(this.Size);
        this.forEach((val, xyz) => arr.set(xyz, lambda(val, xyz)));
        return arr;
    }
    Flatten() {
        return this.Array.flat(2).filter(t => t);
    }
    Log() {
        console.log('[');
        this.Array.forEach(a => {
            //log subarray
            console.log(' [');
            a.forEach(b => {
                console.log(' |', b);
            });
            console.log(' ]');
        });
        console.log(']');
        return this;
    }
    Entries() {
        const arr = [];
        this.forEach((val, xyz) => {
            if (val)
                arr.push([xyz, val]);
        });
        return arr;
    }
}
exports.Array3D = Array3D;
