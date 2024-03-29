"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    array;
    constructor(Array = []) { this.array = Array; }
    get Count() {
        return this.array.length;
    }
    Peek() {
        return this.array.at(-1);
    }
    Pop() {
        return this.array.pop();
    }
    Push(val) {
        this.array.push(val);
    }
    Clear() {
        this.array = [];
    }
    get Array() {
        const arr = [];
        for (let i = 0; i < this.array.length; i++)
            arr[i] = this.array[i];
        return arr;
    }
    toString() {
        return this.array.toString();
    }
}
exports.Stack = Stack;
