import { SnippetRequest } from '../index';
import { CodeBuilder } from './code-builder';
export declare function getPreserveTransformer({ body, authorizationHeader, }: {
    body?: boolean;
    authorizationHeader?: boolean;
}): (input: GenericObject, prop: string, originalResult: string) => string;
export declare function addIndentation(str: string, { level, indent, firstLine }?: {
    level?: number | undefined;
    indent?: string | undefined;
    firstLine?: boolean | undefined;
}): string;
export declare type CodeOperand = {
    type: 'string';
    value: string;
} | {
    type: 'variable';
    name: string;
};
/**
 * Parse url with arguments into concatenation operands array so it can be manipulated easily language-independently
 *
 * @example
 * // returns [{type: 'string', value: '/var/'}, {type: 'variable', name: 'test'}, {type: "string", value: "/"}]
 * parseUrlIntoOperands("/url/:test/", {test: 1})
 **/
export declare function parseUrlIntoOperands(url: string, params: Record<string, unknown>): CodeOperand[];
export declare function buildUrlExpression(source: SnippetRequest, code: CodeBuilder): string;
export declare function printUrlVariablesDeclarations({ pathParameters, serverVariables }: SnippetRequest, code: CodeBuilder, indentationLevel?: number): void;
