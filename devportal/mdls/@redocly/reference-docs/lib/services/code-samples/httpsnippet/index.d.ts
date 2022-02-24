import { CustomHAR } from '..';
import { PostData } from '../har';
interface ParsedUrlQueryInput {
    [key: string]: string | number | boolean | string[] | number[] | boolean[] | undefined | null;
}
export declare type KeyValueAreStrings = {
    [key in string]: string;
};
export interface SnippetRequest extends CustomHAR {
    queryObj?: {
        [key: string]: string | number | boolean | string[] | number[] | boolean[] | undefined | null;
    };
    headersObj: KeyValueAreStrings;
    cookiesObj?: KeyValueAreStrings;
    allHeaders: KeyValueAreStrings;
    postData?: PostData & {
        jsonObj?: GenericObject;
        paramsObj?: ParsedUrlQueryInput;
    };
    uriObj?: any;
    pathParameters: KeyValueAreStrings;
    serverVariables: KeyValueAreStrings;
    fullUrl?: string;
}
export declare class HTTPSnippet {
    private readonly request;
    constructor(data: CustomHAR);
    prepare(request: SnippetRequest): SnippetRequest;
    convert(target: string, client: string, opts: PrivateOptions): string;
    _matchTarget<T>(target: string, client: Maybe<string>): T | false;
}
export interface PrivateOptions {
    variablesPrefix?: string;
    showBoilerplate?: boolean;
    withImports?: boolean;
    withComments?: boolean;
    withWrapper?: boolean;
    printBody?: boolean;
    level?: number;
}
export interface LanguageHandler<LanguageOptions> {
    (request: SnippetRequest, opts: LanguageOptions & PrivateOptions, { target, client }: {
        target: string;
        client: string;
    }): string;
}
export {};
