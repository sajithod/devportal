import { RedocProRawOptions } from './ProStore';
import { ResolvedThemeInterface, MediaValue } from '../redoc-lib';
export declare function extendTheme(options: RedocProRawOptions): RedocProRawOptions;
interface Typography {
    fontSize?: MediaValue;
    fontWeight?: string | number;
    fontFamily?: MediaValue | ((theme: ProTheme) => string);
    lineHeight?: MediaValue;
    color?: string;
    transform?: string;
}
declare type Token = 'comment' | 'prolog' | 'doctype' | 'cdata' | 'punctuation' | 'property' | 'tag' | 'number' | 'constant' | 'symbol' | 'boolean' | 'selector' | 'string' | 'char' | 'builtin' | 'inserted' | 'operator' | 'entity' | 'url' | 'variable' | 'atrule' | 'keyword' | 'regex' | 'important' | 'bold' | 'italic' | 'deleted';
declare type Tokens = {
    [P in Token]?: {
        color: string;
    };
} & {
    default?: Typography;
};
export interface ThemeExtension {
    scrollYOffset?: () => number;
    sidebar?: {
        breakPath?: boolean;
    };
    overrides?: {
        DownloadButton?: {
            custom: string;
        };
        NextSectionButton?: {
            custom: string;
        };
    };
    codeBlock?: {
        borderRadius?: string | ((theme: GenericObject) => string);
        tokens?: Tokens;
    };
    typography?: {
        heading1?: Typography;
        heading2?: Typography;
        heading3?: Typography;
        rightPanelHeading?: Typography;
        fieldName?: Typography;
        code?: {
            wordBreak?: 'break-all' | 'break-word' | 'keep-all' | 'normal' | 'revert' | 'unset' | 'inherit' | 'initial';
        };
    };
    schema?: {
        breakFieldNames?: boolean;
        constraints?: Typography & {
            backgroundColor?: string;
            border?: string;
        };
        examples?: Typography & {
            backgroundColor?: string;
            border?: string;
        };
    };
    tryItOutButton?: {
        backgroundColor?: string | ((theme: ProTheme) => string);
        textColor?: string | ((theme: ProTheme) => string);
        borderRadius?: string | ((theme: ProTheme) => string);
    };
}
export declare type ProTheme = ResolvedThemeInterface & ThemeExtension;
export {};
