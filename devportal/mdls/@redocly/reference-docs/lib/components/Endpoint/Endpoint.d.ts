import { ReactElement } from 'react';
import { OperationModel } from '../../redoc-lib/src/services';
export interface EndpointProps {
    operation: OperationModel;
    hideHostname?: boolean;
    compact?: boolean;
}
export declare const Endpoint: ({ operation, hideHostname }: EndpointProps) => ReactElement;
