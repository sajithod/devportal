/// <reference types="react" />
import { OperationModel } from '../../services';
import { LayoutVariant } from '../../../../services/store-types';
export interface OperationProps {
    operation: OperationModel;
    layout?: LayoutVariant;
}
export declare const Operation: (props: OperationProps) => JSX.Element;
