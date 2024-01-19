Set.prototype.toArray = function toArray<T>(): T[] {
    const arr: T[] = []
    this.forEach(v => arr.push(v))
    return arr
}

Set.prototype.Copy = function<T>(): Set<T> {
    const set: Set<T> = new Set
    this.forEach(v => set.add(v))
    return set
}