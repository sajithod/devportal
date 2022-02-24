export function replaceEnv(value: any, whitelist: any): any;
export function getEnv(name: any, whitelist: any): string;
export function replaceEnvDeep(obj: any, whitelist: any): any;
export function isChildOf(child: any, parent: any): boolean;
/**
 * Sanitize definition id so it can be used in gql query
 * @param {string} definition id
 * @returns {string}
 */
export function sanitizeDefinitionId(id: any): string;
export function withPathPrefix(url: any, pathPrefix: any): any;
