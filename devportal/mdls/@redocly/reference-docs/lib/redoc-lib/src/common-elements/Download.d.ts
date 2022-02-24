/// <reference types="react" />
export declare type FileInfo = {
    fileInfo?: {
        rawData: any;
        fileName: string;
    };
};
export declare function Download({ fileInfo }: FileInfo): JSX.Element | null;
