/// <reference types="node" />
export function createContentItem(type: typeof PAGE_TYPES[keyof typeof PAGE_TYPES], data: ContentItemData, srcNode: FileNode | undefined, suffix: string | undefined, reporter: any): {
    id: string;
    pageId: string;
    link: string;
    baseLink: string;
    type: "redoc-operation" | "redoc-info" | "markdown" | "mdx" | "data-template" | "redoc-redirect";
    data: ContentItemData;
    seo: {};
    permission: any;
    sourcePath: string;
    parent: string;
    internal: {
        type: string;
        owner: string;
        contentDigest: string;
    };
    children: any[];
};
export type FileNode = import("gatsby").Node & {
    relativePath: string;
    absolutePath: string;
    internal: {
        type: 'File';
    };
};
export type Sitemap = {
    changefreq?: string;
    priority?: number;
    lastmod?: Date;
};
export type ContentItemSeo = {
    description?: string;
    title?: string;
    keywords?: string;
    lang?: string;
    jsonLd: any;
    sitemap: Sitemap;
};
export type ContentItemData = {
    [k: string]: any;
    path?: string;
    description?: string;
    label?: string;
    title?: string;
    customTemplate?: string | null;
    seo?: ContentItemSeo;
    customDataString?: string | null;
};
import { PAGE_TYPES } from "../../../constants";
import path = require("path");
