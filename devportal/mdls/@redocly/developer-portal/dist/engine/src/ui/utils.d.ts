/**
 *
 * @returns url with leading and without trailing slash or empty string, e.g. '/prefix'
 */
export declare function usePathPrefix(): string;
export declare function normalizePathPrefix(prefix: string): string;
export declare function removeTrailingSlash(url: string): string;
export declare function addLeadingSlash(url: string): string;
export declare function removeLeadingSlash(url: string): string;
export declare function addTrailingSlash(url: string): string;
export * from '../layouts/PageDataContext';
