/// <reference types="react" />
import { OperationModel } from '../../redoc-lib';
export interface OperationParametersProps {
    operation: OperationModel;
    errors: Record<string, Record<string, string>>;
    values: Record<string, Record<string, string>>;
}
export declare enum SchemaType {
    ARRAY = "array",
    OBJECT = "object"
}
export declare function OperationParameters({ values, operation }: OperationParametersProps): JSX.Element;
