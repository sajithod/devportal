export declare const REDOCLY_COOKIE_NAME = "redocly_jwt";
export declare const IDP_ACCESS_TOKEN_COOKIE_NAME = "redocly_idp_access_token";
export declare const IDP_ID_TOKEN_COOKIE_NAME = "redocly_idp_id_token";
export declare const REDOCLY_LOGIN_RESULT_COOKIE_NAME = "redocly_login_result";
export declare function getCookie(cname: string): string;
export declare function deleteCookie(name: string, path?: string): void;
export declare function logout(logoutUrl?: string, redirect?: boolean): void;
export declare function useProxiedFetch(proxyId: string): (url: string, opts?: RequestInit) => Promise<Response>;
export declare function getUserJwt(): string;
/**
 * @deprecated use `useIsAuthenticated` instead
 */
export declare function useIsLoggedIn(): boolean;
export declare function useIsAuthenticated(): {
    loading: boolean;
    isAuthenticated: boolean;
};
export declare function useUserClaims<T extends object = {}>(): {
    loading: boolean;
    claims: UserClaims<T> | null;
};
export declare function getIdPJwt(): string | null;
export declare function getIdPAccessToken(): string | null;
export declare function getUserId(): string | null;
export declare type UserClaims<T extends object = {}> = {
    sub: string;
} & T & Record<string, unknown>;
export declare function getUserClaims<T extends object = {}>(): UserClaims<T> | null;
export declare function parseClaims<T extends object = {}>(jwt: string): UserClaims<T> | null;
/**
 * replace '-' and '_' with '+' and '/' because of node.js and browser base64 mismatch
 */
export declare function sanitizeBase64(str: string): string;
