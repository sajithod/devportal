export declare type Languages = 'JavaScript' | 'Node.js' | 'curl' | 'Java8+Apache' | 'Java' | 'Python' | 'Go' | 'PHP' | 'C#' | 'Ruby';
export interface BasicLanguageOptions {
    indent?: string;
    withImports?: boolean;
    withComments?: boolean;
}
interface CodeSampleBasicConfig {
    lang: Languages;
    label?: string;
    options?: BasicLanguageOptions;
}
export interface cURULCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'curl';
    options?: BasicLanguageOptions & {
        binary?: boolean;
    };
}
export interface JavaScriptCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'JavaScript';
    options?: BasicLanguageOptions & {
        credentials?: 'omit' | 'same-origin' | 'include';
    };
}
export interface GoCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'Go';
}
export interface NodeJsCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'Node.js';
}
export interface PythonCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'Python';
}
export interface Java8CodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'Java8+Apache';
}
export interface JavaCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'Java';
}
export interface CSharpCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'C#';
}
export interface PHPCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'PHP';
}
export interface RubyCodeSampleConfig extends CodeSampleBasicConfig {
    lang: 'Ruby';
}
export declare type CodeSampleConfig = cURULCodeSampleConfig | JavaScriptCodeSampleConfig | NodeJsCodeSampleConfig | PythonCodeSampleConfig | Java8CodeSampleConfig | JavaCodeSampleConfig | CSharpCodeSampleConfig | PHPCodeSampleConfig | GoCodeSampleConfig | RubyCodeSampleConfig;
/**
 * Code Samples Generator rules
 * - Reference docs always displays all user custom x-code-samples
 * - In addition code samples will be generated only for defined languages in array
 */
export interface CodeSamplesConfig {
    languages: CodeSampleConfig[];
    skipOptionalParameters?: boolean;
    withOAuth2Call?: boolean;
    onSampleTabClick?: (label: string) => void;
}
export {};
