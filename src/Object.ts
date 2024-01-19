
type FreqDict = {[key:string]: number}
type BigFreqDict = {[key:string]: bigint}

Object.prototype.Keys = function() {
    return Object.keys(this)
}
Object.prototype.Values = function() {
    return Object.values(this)
}
Object.prototype.Entries = function() {
    return Object.entries(this)
}
Object.prototype.Copy = function() {
    return Object.fromEntries(Object.entries(this))
}
Object.prototype.RemoveUndefinedVals = function() {
    const out: { [key: string]: any } = {}
    for (const [key, val] of this.Entries()) {
        if (val != undefined) out[key] = val
    }
    return out
}
Object.prototype.IncrementOrCreate = function(key: string, value: number | bigint = 1) {
    const t = typeof value === 'number' ? (this as FreqDict) : this as BigFreqDict

    if (t[key]) (t[key] as number) += value as number //these assertions are lies
    else t[key] = value
}
Object.prototype.PushOrCreate2D = function (key: string, value: any) {
    const t = this as {[key: string]: any[]}

    if (t[key] !== undefined) t[key].push(value)
    else t[key] = [value]
}
Object.prototype.Filter = function(filter: (key: string, val: any) => boolean) {
    const out: {[key: string]: any} = {}
    for (const [key, val] of this.Entries()) {
        if (filter(key, val)) out[key] = val
    }
    return out
}
Object.prototype.forEach = function(lambda: (key: string, val: any) => void) {
    for (const [key, val] of this.Entries()) {
        lambda(key, val)
    }
}

Object.prototype.Log = function() {
    console.log(this)
    return this.valueOf()
}