import * as React from 'react';
import { SecurityDetails } from '../../utils';
export interface OAuth2TokenInputProps {
    flow: {
        refreshUrl?: string;
        scopes: Record<string, string>;
        tokenUrl: string;
    };
    authCorsProxyUrl: Maybe<string>;
    server: string;
    id: string;
    form: {
        values: any;
        errors: any;
    };
    formApi: any;
    clientId?: string;
    defaultValues?: SecurityDetails;
}
interface OAuth2TokenInputState {
    error: string;
    loading: boolean;
    tokenMasked: boolean;
}
export declare class OAuth2TokenInput extends React.Component<OAuth2TokenInputProps, OAuth2TokenInputState> {
    state: OAuth2TokenInputState;
    get values(): GenericObject;
    get errors(): GenericObject;
    clearToken: () => void;
    toggleTokenMask: () => void;
    requestToken: () => Promise<void>;
    render(): JSX.Element;
}
export default OAuth2TokenInput;
