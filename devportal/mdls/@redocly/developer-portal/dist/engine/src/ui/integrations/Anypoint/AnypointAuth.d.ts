import * as React from 'react';
export declare const AnypointAuthContext: React.Context<{
    authorizedFetch?: typeof fetch;
    accessToken?: string;
    authorized: boolean;
    redirectToAuthEndpoint?: () => void;
    orgId?: string;
    appClientId?: string;
}>;
export declare function AnypointAuth(props: {
    scope: string;
    children: any;
}): JSX.Element;
