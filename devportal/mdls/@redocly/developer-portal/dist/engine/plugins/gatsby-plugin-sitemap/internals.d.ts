export var __esModule: boolean;
/**
 * @name prefixPath
 *
 * Properly handles prefixing relative path with site domain, Gatsby pathPrefix and AssetPrefix
 *
 * @param {string} url - string containing relative path
 * @param {string} siteUrl - results of the resolveSiteUrl function
 * @returns {string}
 */
export function prefixPath({ url, siteUrl, pathPrefix }: string): string;
/**
 * @name resolveSiteUrl
 *
 * @param {object} data - results of the GraphQL query
 * @returns {string} - site URL, this can come from thegraphql query or another scope
 */
export function resolveSiteUrl(data: object): string;
/**
 * @name resolvePagePath
 *
 * if you don't want to place the URI in "path" then resolvePagePath
 * are needed.
 *
 * @param {object} page - Array Item returned from resolvePages
 * @returns {string} - uri of the page without domain or protocol
 */
export function resolvePagePath(page: object): string;
/**
 * @name resolvePages
 *
 * This allows custom resolution of the array of pages.
 * This also where user's could merge multiple sources into
 * a single array if needed.
 *
 * @param {object} data - results of the GraphQL query
 * @returns {Array} - Array of objects representing each page
 */
export function resolvePages(data: object): any[];
/**
 * @name defaultFilterPages
 *
 * This allows filtering any data in any way.
 *
 * This Function is executed via allPages.filter((page) => !excludes.some((excludedRoute) => thisFunc(page, ecludedRoute, tools)))
 * allPages is the results of the resolvePages
 *
 * @param {object} page
 * @param {string} excludedRoute - Array from plugin config `options.exclude`
 * @param {object} tools - contains required tools for filtering
 *
 * @returns {boolean}
 */
export function defaultFilterPages(page: object, excludedRoute: string, { minimatch, withoutTrailingSlash, resolvePagePath }: object): boolean;
/**
 * @name serialize
 *
 * This function is executed by allPages.map(page => thisFunc(page, siteUrl, tools))
 * allpages is the result of the filter process
 *
 * @param {object[]} page - results of the resolvePages function
 * @param {object} tools - contains tools for serializing
 *
 */
export function serialize(page: object[], { resolvePagePath }: object): {
    url: string;
    changefreq: string;
    priority: number;
};
export function pageFilter({ allPages, filterPages, excludes }: {
    allPages: any;
    filterPages: any;
    excludes: any;
}): {
    filteredPages: any[];
    messages: any[];
};
/**
 *
 * @param {string} path
 * @returns {string}
 */
export function withoutTrailingSlash(path: string): string;
export const REPORTER_PREFIX: "[gatsby-plugin-sitemap]:";
