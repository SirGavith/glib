"use strict";
Set.prototype.toArray = function toArray() {
    const arr = [];
    this.forEach(v => arr.push(v));
    return arr;
};
Set.prototype.Copy = function () {
    const set = new Set;
    this.forEach(v => set.add(v));
    return set;
};
