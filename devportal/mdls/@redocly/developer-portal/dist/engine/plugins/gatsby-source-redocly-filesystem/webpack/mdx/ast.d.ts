export type PluginDefinition = string | {
    resolve: string;
};
export type ParserOptions = {
    mdxNode: any;
    getNode: Function;
    getNodes: Function;
    reporter: any;
    cache: any;
    pathPrefix: string;
    actions: any;
    getNodeAndSavePathDependency: Function;
};
/**
 *
   @typedef {string | {resolve: string}} PluginDefinition
   @typedef {{
    mdxNode: any
    getNode: Function
    getNodes: Function
    reporter: any
    cache: any
    pathPrefix: string
    actions: any
    getNodeAndSavePathDependency: Function
  }} ParserOptions
 */
/** @type Map<string, Promise<object>> */
/**
 *
 * @param {ParserOptions} options
 * @param {boolean} skipCopyFiles - disable copy files plugin during header parsing initial run for mdx
 * @returns
 */
export function getMdxParser(options: ParserOptions, skipCopyFiles?: boolean): Promise<{
    parseAndTransform: (mdxNode: any) => Promise<any>;
    stringify: (rootHAstNode: any) => any;
}>;
/**
 * Fake gatsby node because some gatsby remark plugins rely on this
 */
export function createMDXNode({ node, content }: {
    node: any;
    content: any;
}): {
    id: string;
    children: any[];
    parent: any;
    internal: {
        content: any;
        type: string;
    };
};
