export const definitionFileToId: {};
export function getOrCreateRedocStoreById(definitionId: any, specPath: any, boundMethods: any, options: any): Promise<{
    id: string;
    absolutePath: string;
    redocStoreStr: string;
    redocStore: ProStore;
    options: any;
} | {
    redocStore: any;
    redocStoreStr: string;
}>;
/**
 *
 * @param {*} definitionId
 * @param {string} specPath
 * @param {import('gatsby').CreateNodeArgs & PluginOptions} boundMethods
 */
export function updateSpecCacheByIdAndPath(definitionId: any, specPath: string, boundMethods: import('gatsby').CreateNodeArgs & PluginOptions, options: any): Promise<void>;
/**
 *
 * @param {object} definitionsConfig
 * @param {string} configDir
 * @param { import('gatsby').CreateNodeArgs & PluginOptions } boundMethods
 */
export function updateDefinitionsCache(definitionsConfig: object, configDir: string, boundMethods: import('gatsby').CreateNodeArgs & PluginOptions): Promise<void>;
export function getRedocStoreById(definitionId: any): {
    id: string;
    absolutePath: string;
    redocStoreStr: string;
    redocStore: ProStore;
    options: any;
};
import { ProStore } from "@redocly/reference-docs/lib/services/ProStore";
