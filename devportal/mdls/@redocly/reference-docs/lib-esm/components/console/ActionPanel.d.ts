import * as React from 'react';
import { FormValues } from 'informed';
import { OperationModel } from '../../redoc-lib';
export interface ActionPanelProps {
    execute: () => void;
    loading: boolean;
    operation: OperationModel;
    params: FormValues;
    hasResponse: boolean;
}
export declare const ActionPanelComponent: ({ loading, operation, hasResponse, execute, params, }: ActionPanelProps) => JSX.Element;
export declare const ActionPanel: React.NamedExoticComponent<ActionPanelProps>;
