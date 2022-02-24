import type { ProStore } from './services/ProStore';
export declare const getGlobalStore: () => ProStore;
export declare const setGlobalStore: (store: ProStore) => ProStore;
export declare function debounce<T extends unknown>(fn: (...args: T[]) => void, threshold: number, leading?: boolean): (...args: T[]) => void;
export declare function toSessionStorage(key: string, value: string): void;
export declare function fromSessionStorage<T extends string>(key: string): T;
export declare function setParameterValue(_in: string, name: string, value: GenericObject): void;
export declare function getParameterValue(_in: string, name: string): string | null;
export declare function toLocalStorage(key: string, value: string): void;
export declare function fromLocalStorage<T extends string>(key: string): T;
export declare function useDimensions(node?: HTMLElement | null): [DOMRect | null];
export declare type SecurityDetails = {
    password?: string;
    username?: string;
    token?: {
        token_type?: string;
        access_token: string;
    };
    client_id?: string;
    client_secret?: string;
    scopes?: string;
};
export declare function escapeFormId(id: string): string;
export declare function unescapeFormId(id: string): string;
export declare function setSecurityDetails(name: string, details: SecurityDetails | string): void;
export declare function setSecurityDetailsVariants(name: string, variants: {
    label: string;
    details: SecurityDetails | string;
}[]): void;
export declare function getSecurityDetails(name: string): SecurityDetails & {
    raw: string;
};
export declare function getSecurityDetailsOptions(name: string, fieldName: string): Array<{
    label: string;
    value: string;
}> | null;
export declare function get<T>(object: GenericObject, path: string | Array<string>, defval?: T): GenericObject;
export declare function joinStringFactory(separator: string): (...args: (string | undefined)[]) => string;
export declare const dottedString: (...args: (string | undefined)[]) => string;
