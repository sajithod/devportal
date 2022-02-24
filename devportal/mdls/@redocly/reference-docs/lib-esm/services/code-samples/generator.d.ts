import { OperationModel, ServerVariables } from '../../redoc-lib';
import * as HAR from './har';
import { Languages } from './types';
export declare type CustomHAR = HAR.Request & {
    securityOAuth2ExtraCalls?: HAR.Request[];
    basicAuth?: {
        username: string;
        password: string;
    };
    pathParameters?: {
        [key in string]: string;
    };
    serverVariables?: ServerVariables;
};
export declare function getCodeSample({ lang, operation, exampleName, pathParams, properties, options, }: {
    lang: Languages;
    operation: OperationModel;
    exampleName?: string;
    pathParams?: GenericObject;
    properties?: GenericObject;
    options?: GenericObject;
}): string;
export declare function isDefined<T>(arg?: T): arg is T;
export declare function capitalizeFirst(str: string): string;
