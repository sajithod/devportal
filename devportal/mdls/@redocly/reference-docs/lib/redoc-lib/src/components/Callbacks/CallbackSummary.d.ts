/// <reference types="react" />
import { PanelHeaderProps } from '../../../../components/Panel';
import { OperationModel } from '../../services';
export interface CallbackTitleProps extends PanelHeaderProps {
    operation: OperationModel;
}
export declare const CallbackSummary: ({ expanded, toggle, operation: { name, httpVerb, deprecated }, }: CallbackTitleProps) => JSX.Element;
