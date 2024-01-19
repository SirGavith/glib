interface Object {
    RemoveUndefinedVals(): {};
    Values(): any[];
    Keys(): string[];
    Entries(): [string, any][];
    Filter(filter: (key: string, val: any) => boolean): {};
    forEach(lambda: (key: string, val: any) => void): void;
    Copy(): {};
    IncrementOrCreate(key: string, value?: number | bigint): void;
    PushOrCreate2D(key: string, value: any): void;
    Log(): {};
}
type FreqDict = {
    [key: string]: number;
};
type BigFreqDict = {
    [key: string]: bigint;
};
