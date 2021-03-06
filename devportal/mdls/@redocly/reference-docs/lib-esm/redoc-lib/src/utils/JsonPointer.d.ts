/**
 * Wrapper for JsonPointer. Provides common operations
 */
export declare class JsonPointer {
    /**
     * returns last JsonPointer token
     * if level > 1 returns levels last (second last/third last)
     * @example
     * // returns subpath
     * JsonPointerHelper.baseName('/path/0/subpath')
     * // returns foo
     * JsonPointerHelper.baseName('/path/foo/subpath', 2)
     */
    static baseName(pointer?: string, level?: number): string;
    /**
     * returns dirname of pointer
     * if level > 1 returns corresponding dirname in the hierarchy
     * @example
     * // returns /path/0
     * JsonPointerHelper.dirName('/path/0/subpath')
     * // returns /path
     * JsonPointerHelper.dirName('/path/foo/subpath', 2)
     */
    static dirName(pointer: string, level?: number): string;
    /**
     * returns relative path tokens
     * @example
     * // returns ['subpath']
     * JsonPointerHelper.relative('/path/0', '/path/0/subpath')
     * // returns ['foo', 'subpath']
     * JsonPointerHelper.relative('/path', '/path/foo/subpath')
     */
    static relative(from: string, to: string): string[];
    /**
     * overridden JsonPointer original parse to take care of prefixing '#' symbol
     * that is not valid JsonPointer
     */
    static parse(pointer?: string): string[];
    /**
     * Creates a JSON pointer path, by joining one or more tokens to a base path.
     *
     * @param {string} base - The base path
     * @param {string|string[]} tokens - The token(s) to append (e.g. ["name", "first"])
     * @returns {string}
     */
    static join(base: string, tokens: string | string[]): string;
    static get<T>(object: GenericObject, pointer: string): T;
    static compile(tokens: string[]): string;
    static escape(pointer: string): string;
}
export default JsonPointer;
