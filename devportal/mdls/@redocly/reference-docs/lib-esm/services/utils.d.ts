export declare function normalizePath(path: string): string;
/**
 * Compare mime-types ignoring charset or other params (application/json;charset=UTF-8)
 * @param a
 * @param b
 */
export declare function isSameMime(a?: string, b?: string): boolean;
/**
 * Removes the mime-types params e.g. charset (application/json;charset=UTF-8))
 * @param mimeType mime type string or undefined
 */
export declare function normalizeMimeType(mimeType?: string): string | undefined;
export declare function unescapeServerVariables(str: string): string;
export declare function arrayMerge<T>(target: T[], source: T[]): T[];
export declare function isEmptyObject(obj: GenericObject): boolean;
