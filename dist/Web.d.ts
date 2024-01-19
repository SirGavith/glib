/// <reference types="node" />
interface HTTPError {
    code: string;
    errno: number;
    hostname: string;
    syscall: string;
    message: string;
    stack: string;
}
export declare function httpsGet(url: string, callback: (data: Buffer) => void, errorCallback?: (e: HTTPError) => void): void;
export declare function httpsGetJSON(url: string, callback: (data: Object) => void, errorCallback?: (e: HTTPError) => void): void;
export {};
