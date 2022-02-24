import { ReactElement } from 'react';
import { OperationModel } from '../../redoc-lib/src/services';
export interface ServerListProps {
    operation: OperationModel;
    expandVariables: boolean;
    hideHostname: boolean;
}
export declare const ServerList: ({ operation, expandVariables, hideHostname, }: ServerListProps) => ReactElement;
