/// <reference types="react" />
import { RequestBodyModel } from '../../redoc-lib';
import { Console } from './Console';
export interface RequestBodyProps {
    body: RequestBodyModel;
    resolvedBody: any;
    validate: () => string | undefined;
    console: Console;
    id: string;
    properties: any;
}
export declare const RequestBody: ({ properties, ...props }: RequestBodyProps) => JSX.Element;
