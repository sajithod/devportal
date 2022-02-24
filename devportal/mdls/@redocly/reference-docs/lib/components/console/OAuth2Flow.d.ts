import * as React from 'react';
import { FormApi, FormState } from 'informed';
import { InputActionButtonProps } from '../common/TextField';
import { SecurityDetails } from '../../utils';
import { RedocProNormalizedOptions } from '../../services';
export interface OAuth2FlowProps {
    authorizationUrl: string;
    tokenUrl?: string;
    usePkce?: boolean;
    authCorsProxyUrl: Maybe<string>;
    scopes: string[];
    server: string;
    id: string;
    form: FormState;
    formApi: FormApi;
    flow: 'implicit' | 'authorizationCode';
    clientId?: string;
    defaultValues?: SecurityDetails;
}
interface OAuth2FlowState {
    error: string | null;
    loading: boolean;
    showPkceOptions: boolean;
    codeVerifier?: string;
    codeChallenge?: string;
    validCodeChallenge?: string;
}
export declare class OAuth2Flow extends React.Component<OAuth2FlowProps, OAuth2FlowState> {
    static contextType: React.Context<RedocProNormalizedOptions>;
    context: RedocProNormalizedOptions;
    state: OAuth2FlowState;
    get values(): {
        client_id: string;
        client_secret: string;
        scopes: string[];
        token: {
            access_token: string;
            token_type: string;
        };
    };
    get errors(): GenericObject;
    get pkceInputActionButtonProps(): InputActionButtonProps | undefined;
    componentDidMount(): void;
    handleAuthorize(_authorizationUrl: string): void;
    handleLogout(): void;
    handleCancel(): void;
    clearToken: () => void;
    togglePkceOptions: () => void;
    handleCodeVerifierChange: ({ target: { value: codeVerifier }, }: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    render(): JSX.Element;
}
export {};
