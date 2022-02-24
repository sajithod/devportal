import { ReactElement } from 'react';
import { OperationModel } from '../../redoc-lib';
import { PanelHeaderProps } from '../Panel';
export declare type EndpointSummaryProps = PanelHeaderProps & {
    operation: OperationModel;
    onToggleConsole: () => void;
    showConsole: boolean;
    tryItOverride?: {
        link?: string;
        label: string;
        onClick?: () => void;
    } | null;
};
export declare const Summary: ({ operation, expanded, toggle, onToggleConsole, tryItOverride, showConsole, }: EndpointSummaryProps) => ReactElement;
