export declare function getNavbarElement(): any;
export declare function normalizeRedocBadge(label: string): string;
export declare function withPathPrefix(path: string, pathPrefix?: string): string;
export declare function flattenNestedItems<T extends NestedItem<T>>(items: T[], res?: T[]): T[];
interface NestedItem<T> {
    items?: T[];
}
export {};
