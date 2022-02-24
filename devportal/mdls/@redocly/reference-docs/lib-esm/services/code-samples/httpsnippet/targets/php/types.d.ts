export declare type Input = GenericObject | string;
export declare type ObjectToPhpArrayOptions = {
    newLine?: string;
    newLineOrSpace?: string;
    pad?: string;
    indent?: string;
    inlineCharacterLimit?: number;
    transform?: (input: Input, i: number | string, result: string) => string;
    singleQuotes?: boolean;
    filter?: (obj: Input | string, el: string) => boolean;
};
