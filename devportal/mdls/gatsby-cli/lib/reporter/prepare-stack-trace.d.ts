export declare class ErrorWithCodeFrame extends Error {
    codeFrame?: string;
    constructor(error: Error);
}
export declare function prepareStackTrace(error: Error, source: string): Promise<ErrorWithCodeFrame>;
