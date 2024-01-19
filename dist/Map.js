"use strict";
Map.prototype.toArray = function toArray() {
    const arr = [];
    this.forEach((v, k) => arr.push([k, v]));
    return arr;
};
Map.prototype.Copy = function () {
    const map = new Map;
    this.forEach((v, k) => map.set(k, v));
    return map;
};
Map.prototype.Log = function () {
    console.log(this);
    return this;
};
Map.prototype.Keys = function () {
    const keys = [];
    this.forEach((_, k) => keys.push(k));
    return keys;
};
Map.prototype.Values = function () {
    const values = [];
    this.forEach((v, _) => values.push(v));
    return values;
};
