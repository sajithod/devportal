import * as React from 'react';
import { APIClient } from './APIClient';
export declare const APIClientContext: React.Context<{
    apiClient: APIClient | null;
}>;
export default function APIClientProvider(props: {
    children: JSX.Element;
    user: any;
    userIdPJwt: string | null;
}): JSX.Element;
