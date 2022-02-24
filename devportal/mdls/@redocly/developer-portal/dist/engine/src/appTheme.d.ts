import { defaultTheme } from './defaultTheme';
export declare const appTheme: any;
export declare const gradient: ({ theme }: {
    theme: any;
}) => string;
export declare function replaceHashInColor(color: string): string;
export declare function svgToDataUri(svg: any, color: any): string;
export declare function genTokens(tokens?: Tokens | null): string | import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("@redocly/reference-docs/lib/services/extendTheme").ProTheme>>;
declare type InferDeep<T extends object> = {
    [k in keyof T]: T[k] extends (...args: any) => any ? ReturnType<T[k]> : T[k] extends object ? InferDeep<T[k]> : T[k];
};
export declare type AppTheme = InferDeep<typeof defaultTheme>;
interface Typography {
    fontSize?: string;
    fontWeight?: string | number;
    fontFamily?: string;
    lineHeight?: string;
    color?: string;
    transform?: string;
}
declare type Token = 'comment' | 'prolog' | 'doctype' | 'cdata' | 'punctuation' | 'property' | 'tag' | 'number' | 'constant' | 'symbol' | 'boolean' | 'selector' | 'string' | 'char' | 'builtin' | 'inserted' | 'operator' | 'entity' | 'url' | 'variable' | 'atrule' | 'keyword' | 'regex' | 'important' | 'important' | 'bold' | 'italic' | 'entity' | 'deleted';
declare type Tokens = {
    [P in Token]?: {
        color: string;
    };
} & {
    default?: Typography;
};
export {};
