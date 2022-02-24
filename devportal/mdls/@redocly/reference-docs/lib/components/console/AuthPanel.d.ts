import * as React from 'react';
import { FormApi, FormState } from 'informed';
import { Option } from '@redocly/react-dropdown-aria';
import { OperationModel } from '../../redoc-lib';
import { SecurityDetails } from '../../utils';
export declare function requiredValidator(value: unknown): string | undefined;
export interface AuthPanelProps {
    operation: OperationModel;
    form: FormState;
    formApi: FormApi;
    activeServer: string;
    authCorsProxyUrl: Maybe<string>;
    securityDefaults?: Record<string, SecurityDetails | string>;
}
export interface AuthPanelState {
    activeScheme: number;
}
export declare class AuthPanel extends React.Component<AuthPanelProps, AuthPanelState> {
    static getDerivedStateFromProps(props: AuthPanelProps): AuthPanelState;
    state: {
        activeScheme: number;
    };
    handleSchemeChange: (option: Option & {
        idx: number;
    }) => void;
    render(): JSX.Element | null;
}
