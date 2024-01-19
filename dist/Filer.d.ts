export declare class Filer {
    static ReadFile(localpath: string): string;
    static ReadAllLines(localpath: string): string[];
    static WriteFile(localpath: string, data: string | Uint8Array): void;
    static WriteJSON(localpath: string, data: any): void;
    static ReadJson<T>(localpath: string): any;
}
