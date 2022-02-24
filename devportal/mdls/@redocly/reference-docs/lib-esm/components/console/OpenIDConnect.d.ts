/// <reference types="react" />
import { FormApi, FormState } from 'informed';
import { SecurityScheme } from '../../redoc-lib';
import { SecurityDetails } from '../../utils';
export interface OpenIDConnectProps {
    server: string;
    authCorsProxyUrl: Maybe<string>;
    id: string;
    form: FormState;
    formApi: FormApi;
    scheme: SecurityScheme;
    clientId?: string;
    defaultValues?: SecurityDetails;
}
export declare function OpenIDConnect(props: OpenIDConnectProps): JSX.Element;
