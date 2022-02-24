/// <reference types="node" />
export var YAML_PAGE_EXTENSION: string;
export var CONFIG_FILE_NAME: string;
export var SIDEBARS_FILE_NAME: string;
export function isYamlBasedPage(filePath: any): any;
export function isAllowedMdxFile(filePath: any): boolean;
export function isAllowedDataFile(filePath: any): boolean;
export function normalizeGatsbyPage(path: any): any;
export function readYaml(path: any, transform: any): Promise<unknown>;
export function contentDigest(data: any): string;
export function createPath(relativePath: any): string;
export function relative(absolute: any, baseDir: any): string;
export function extractTocHeadings(options: import('./webpack/mdx/ast').ParserOptions): Promise<any[]>;
export function extractFirstMdHeading(markdown: any): any;
export function headingRank(node: any): number;
export function copyFile(url: string, { context, getNodesByType, getNodeAndSavePathDependency, pathPrefix, reporter }: Pick<CreateNodeArgs, 'getNodesByType' | 'getNodeAndSavePathDependency' | 'pathPrefix' | 'reporter'> & {
    context?: {
        path: string;
    };
}, fromPath: string, contentRoot: string): string;
export function staticCopyFile(url: any, { reporter, pathPrefix }: {
    reporter: any;
    pathPrefix: any;
}, fromPath: any, contentRoot: any): any;
export function copyReferencedFiles(data: object, boundActions: Pick<CreateNodeArgs, 'getNodesByType' | 'getNodeAndSavePathDependency' | 'pathPrefix' | 'reporter'> & {
    context?: {
        path: string;
    };
}, fromPath: string, contentRoot: string): object;
export function isAllowedFileName(filePath: any): boolean;
export function getLastModifiedForFileNode(fileNode: any, baseDir: any): Promise<any>;
export function getLastModifiedForFile(fileAbsolutePath: any, baseDir: any, fileModifiedTime: any): Promise<any>;
export type CreateNodeArgs = import("gatsby").CreateNodeArgs;
import path = require("path");
export function createRootSidebarConfig(rootSidebarFilename: any, readYaml: any): Promise<any>;
