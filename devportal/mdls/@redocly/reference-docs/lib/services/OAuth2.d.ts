export declare class OAuth2 {
    static authorizeImplicit({ authorizationUrl, clientId, scopes, extraParams, routingBasePath, redirectUri, successCallback, errorCallback, }: {
        authorizationUrl: string;
        clientId: string;
        scopes?: string[];
        redirectUri?: string | null;
        routingBasePath?: string;
        extraParams?: Record<string, string>;
        successCallback: OAuth2SuccessCallback;
        errorCallback: OAuth2ErrorCallback;
    }): void;
    static authorizeAuthorizationCode({ authorizationUrl, tokenUrl, clientId, clientSecret, codeVerifier, codeChallenge, scopes, extraParams, routingBasePath, redirectUri, successCallback, errorCallback, }: {
        authorizationUrl: string;
        tokenUrl: string;
        clientId: string;
        clientSecret: string;
        codeVerifier?: string;
        codeChallenge?: string;
        scopes?: string[];
        redirectUri?: string | null;
        routingBasePath?: string;
        extraParams?: Record<string, string>;
        successCallback: OAuth2SuccessCallback;
        errorCallback: OAuth2ErrorCallback;
    }): void;
    static clearRedirectData(flow: 'implicit' | 'authorizationCode'): void;
    static authorizeClientCredentials({ tokenUrl, clientId, clientSecret, scopes, extraParams, successCallback, errorCallback, }: {
        tokenUrl: string;
        clientId: string;
        clientSecret: string;
        scopes?: string[];
        extraParams?: Record<string, string>;
        successCallback: OAuth2SuccessCallback;
        errorCallback: OAuth2ErrorCallback;
    }): Promise<void>;
}
export declare const oauth2Instance: OAuth2;
export interface OAuthState {
    randomStr: string;
}
export declare function randString(len?: number): string;
/**
 * Returns base-64 encoded ASCII string from a stringified JSON object
 */
export declare function encodeState<T extends GenericObject = GenericObject>(params: T): string;
export declare function sha256(str: string): Promise<ArrayBuffer | undefined>;
export declare function base64UrlEncode(arrayBuff?: ArrayBuffer): string | undefined;
export declare function deriveCodeChallenge(codeVerifier: string): Promise<string | undefined>;
