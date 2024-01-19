"use strict";
Object.prototype.Keys = function () {
    return Object.keys(this);
};
Object.prototype.Values = function () {
    return Object.values(this);
};
Object.prototype.Entries = function () {
    return Object.entries(this);
};
Object.prototype.Copy = function () {
    return Object.fromEntries(Object.entries(this));
};
Object.prototype.RemoveUndefinedVals = function () {
    const out = {};
    for (const [key, val] of this.Entries()) {
        if (val != undefined)
            out[key] = val;
    }
    return out;
};
Object.prototype.IncrementOrCreate = function (key, value = 1) {
    const t = typeof value === 'number' ? this : this;
    if (t[key])
        t[key] += value; //these assertions are lies
    else
        t[key] = value;
};
Object.prototype.PushOrCreate2D = function (key, value) {
    const t = this;
    if (t[key] !== undefined)
        t[key].push(value);
    else
        t[key] = [value];
};
Object.prototype.Filter = function (filter) {
    const out = {};
    for (const [key, val] of this.Entries()) {
        if (filter(key, val))
            out[key] = val;
    }
    return out;
};
Object.prototype.forEach = function (lambda) {
    for (const [key, val] of this.Entries()) {
        lambda(key, val);
    }
};
Object.prototype.Log = function () {
    console.log(this);
    return this.valueOf();
};
