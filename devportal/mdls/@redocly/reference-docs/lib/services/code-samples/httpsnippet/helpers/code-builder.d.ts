import { VariableType } from './constants';
/**
 * Helper object to format and aggragate lines of code.
 * Lines are aggregated in a `code` array, and need to be joined to obtain a proper code snippet.
 *
 * @param {string} indentation Desired indentation character for aggregated lines of code
 * @param {string} lineJoin Desired character to join each line of code
 */
export declare class CodeBuilder {
    private code;
    private indentation;
    private variablesPrefix;
    private lineJoin;
    private capitalize;
    private lang;
    langOptions: {
        stringLiteral: (t: string) => string;
        variableWrapperFn: (variableName: string, variableValue?: string) => string;
        variableDeclaration: (v: string) => string;
        joinSymbol: string;
        urlFieldName: string;
        rawName: boolean;
    };
    constructor({ indentation, lineJoin, variablesPrefix, capitalize, lang, }: {
        indentation: string;
        lineJoin?: string;
        variablesPrefix?: string;
        capitalize?: boolean;
        lang?: string;
    });
    /**
     * Add given indentation level to given string and format the string (variadic)
     * @param {number} [indentationLevel=0] - Desired level of indentation for this line
     * @param {string} line - Line of code. Can contain formatting placeholders
     * @param rest
     * @param {...object} - Parameter to bind to `line`'s formatting placeholders
     * @return {string}
     *
     * @example
     *   const builder = CodeBuilder('\t')
     *
     *   builder.buildLine('console.log("hello world")')
     *   // returns: 'console.log("hello world")'
     *
     *   builder.buildLine(2, 'console.log("hello world")')
     *   // returns: 'console.log("\t\thello world")'
     *
     *   builder.buildLine(2, 'console.log("%s %s")', 'hello', 'world')
     *   // returns: 'console.log("\t\thello world")'
     */
    buildLine(indentationLevel: number | string, line: string): string | null;
    /**
     * Invoke buildLine() and add the line at the top of current lines
     * @return {this}
     * @param args
     */
    unshift(...args: Array<string | number | undefined | unknown>): CodeBuilder;
    /**
     * Invoke buildLine() and add the line at the bottom of current lines
     * @return {this}
     * @param args
     */
    push(...args: Array<string | number | undefined | unknown>): CodeBuilder;
    /**
     * Add an empty line at the end of current lines
     * @return {this}
     */
    blank(): CodeBuilder;
    /**
     * Concatenate all current lines using the given lineJoin
     * @return {string}
     */
    join(): string;
    clean(): void;
    /**
     * Get variable name, use variablesPrefix if specified
     * @param {string} name
     * @param {VariableType} type
     * @return {string}
     */
    var(name: string, type?: VariableType): string;
}
