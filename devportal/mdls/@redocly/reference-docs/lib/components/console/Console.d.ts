import * as React from 'react';
import { FormApi, FormState } from 'informed';
import { SecurityDetails } from '../../utils';
import { OpenApiResponseData } from './ResponsePanel';
import { ProStore } from '../../services';
import { OperationModel, Server } from '../../redoc-lib';
import { PanelComponentProps } from '../Panel';
export declare type RequestAndResponseType = {
    request: Record<string, unknown>;
    response: OpenApiResponseData;
};
export interface ConsoleProps {
    store: ProStore;
    operation: OperationModel;
    className?: string;
    rootElement?: HTMLElement | null;
    onClose?: () => void;
    properties?: any;
    securityDefaults?: Record<string, SecurityDetails | string>;
    onResponse?: (arg: RequestAndResponseType) => void;
}
export interface ConsoleState {
    form: FormState<any>;
    shaking: boolean;
    loading: boolean;
    activeTab: number;
    error?: Error & {
        response?: OpenApiResponseData;
    };
    resolvedRawSpec?: any;
    response?: OpenApiResponseData;
    time?: number;
    server: Server;
}
export declare class Console extends React.Component<ConsoleProps, ConsoleState> {
    formApi: FormApi;
    constructor(props: ConsoleProps);
    setFormApi: (formApi: FormApi, { values, ...rest }?: FormState<import("informed").FormValues>) => void;
    handleChange: ({ values, ...rest }: ConsoleState['form']) => void;
    handleTabChange: (idx: number) => void;
    handleServerChange: (server: Server) => void;
    handleExecute: () => Promise<void>;
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: Readonly<ConsoleProps>): void;
    render(): JSX.Element;
    renderRequest(): JSX.Element;
    renderResponse(): JSX.Element;
}
export declare function TryItPanel({ header, error, success, ...rest }: React.PropsWithChildren<{
    header: string;
    error?: boolean;
    success?: boolean;
} & PanelComponentProps>): JSX.Element;
