declare global {
    interface String {
        toIntList(delim?: string, radix?: number): number[];
        toFloatList(delim?: string): number[];
        toInt(radix?: number): number;
        toFloat(radix?: number): number;
        toArray(includeNewlines?: boolean): string[];
        in(str: string): boolean;
        SplitLines(): string[];
        Split2Lines(): string[];
        RegexTest(regex: RegExp): boolean;
        ReplaceMap(map: {
            [key: string]: string;
        }): string;
        RemoveChars(chars: string[]): string;
        IsAllCapital(): boolean;
        forEach(lambda: (val: string, index: number) => void): void;
        AsColor(color: string): string;
        Log(color?: string): string;
    }
}
export {};
