import * as React from 'react';
export declare function useIdpLoginPath(idpId?: string, options?: {
    redirectTo?: string;
    loginHint?: string;
    withPathPrefix?: boolean;
}): string;
export declare function useLoginPageUrl(idpId?: string, options?: {
    redirectTo?: string;
    loginHint?: string;
}): string;
export declare function RedirectToLogin({ idpId }: {
    idpId?: string;
}): JSX.Element;
export declare function LoginPageLink<T extends object>(props: React.PropsWithChildren<T> & {
    idpId?: string;
}): JSX.Element;
