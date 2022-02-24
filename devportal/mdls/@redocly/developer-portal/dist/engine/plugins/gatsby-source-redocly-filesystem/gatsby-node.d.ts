/// <reference types="node" />
export var onCreateNode: (args: CreateNodeArgs<FileNode | RemarkNode>, config: PluginOptions) => Promise<void | boolean>;
export function onPostBootstrap({ getNodesByType }: {
    getNodesByType: any;
}): void;
export function createPages({ getNodesByType }: {
    getNodesByType: any;
}): void;
export var sourceNodes: (boundMethods: SourceNodesArgs, config: PluginOptions) => Promise<void>;
export function onCreateBabelConfig({ actions }: {
    actions: any;
}): void;
export var onPostBuild: (boundMethods: BuildArgs, config: PluginOptions) => Promise<any>;
export function preprocessSource({ filename, contents }: {
    filename: any;
    contents: any;
}): Promise<string>;
export type PageMeta = {
    description?: string;
    label?: string;
    title?: string;
};
export type TemplatePageNodeConfig = {
    meta?: PageMeta;
    data: {};
    template: string;
    path?: string;
};
export type FilesystemNode = import("gatsby-source-filesystem").FileSystemNode;
export type SourceNodesArgs = import("gatsby").SourceNodesArgs;
export type BuildArgs = import("gatsby").BuildArgs;
export type FileNode = import("gatsby").Node & {
    relativePath: string;
    absolutePath: string;
    internal: {
        type: 'File';
    };
};
export type RemarkNode = import("gatsby").Node & {
    internal: {
        type: 'MarkdownRemark';
    };
};
/**
 * <T>
 */
export type CreateNodeArgs<T> = import("gatsby").CreateNodeArgs<T>;
import { onCreateWebpackConfig } from "./webpack/config";
import { createResolvers } from "./resolvers";
import path = require("path");
export { onCreateWebpackConfig, createResolvers };
