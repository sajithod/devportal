import { Oas2Decorator, Oas2Rule } from '../../visitors';
export declare const rules: {
    spec: Oas2Rule;
    'info-description': Oas2Rule;
    'info-contact': Oas2Rule;
    'info-license': Oas2Rule;
    'info-license-url': Oas2Rule;
    'tag-description': Oas2Rule;
    'tags-alphabetical': Oas2Rule;
    'paths-kebab-case': Oas2Rule;
    'no-enum-type-mismatch': Oas2Rule;
    'boolean-parameter-prefixes': Oas2Rule;
    'no-path-trailing-slash': Oas2Rule;
    'operation-2xx-response': Oas2Rule;
    'operation-4xx-response': Oas2Rule;
    'operation-operationId-unique': Oas2Rule;
    'operation-parameters-unique': Oas2Rule;
    'path-parameters-defined': Oas2Rule;
    'operation-tag-defined': Oas2Rule;
    'path-declaration-must-exist': Oas2Rule;
    'operation-operationId-url-safe': Oas2Rule;
    'operation-operationId': Oas2Rule;
    'operation-summary': Oas2Rule;
    'operation-description': Oas2Rule;
    'path-not-include-query': Oas2Rule;
    'path-params-defined': Oas2Rule;
    'parameter-description': Oas2Rule;
    'operation-singular-tag': Oas2Rule;
    'operation-security-defined': Oas2Rule;
    'no-unresolved-refs': Oas2Rule;
    'no-identical-paths': Oas2Rule;
    'no-ambiguous-paths': Oas2Rule;
    'path-http-verbs-order': Oas2Rule;
    'no-http-verbs-in-paths': Oas2Rule;
    'path-excludes-patterns': Oas2Rule;
    'request-mime-type': Oas2Rule;
    'response-mime-type': Oas2Rule;
    'path-segment-plural': Oas2Rule;
};
export declare const preprocessors: {};
export declare const decorators: {
    'registry-dependencies': Oas2Decorator;
    'operation-description-override': Oas2Decorator;
    'tag-description-override': Oas2Decorator;
    'info-description-override': Oas2Decorator;
};