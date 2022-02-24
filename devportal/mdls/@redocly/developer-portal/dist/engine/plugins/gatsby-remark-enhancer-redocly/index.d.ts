declare function _exports({ markdownAST, markdownNode, getNode, getNodes, pathPrefix }: {
    markdownAST: any;
    markdownNode: any;
    getNode: any;
    getNodes: any;
    pathPrefix?: string;
}, options: any): void;
declare namespace _exports {
    const setParserPlugins: (options: {
        envVariablesAllowedClientSide: string[];
    }) => (Function | [Function, any])[];
}
export = _exports;
