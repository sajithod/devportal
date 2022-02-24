import * as React from 'react';
import { OperationModel } from '../../services';
export interface CallbackDetailsProps {
    operation: OperationModel;
}
export declare class CallbackDetails extends React.Component<CallbackDetailsProps> {
    render(): JSX.Element;
}
