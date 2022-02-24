/// <reference types="react" />
import { ResponseModel } from '../../services/models';
export interface ResponseViewProps {
    response: ResponseModel;
}
export declare const ResponseView: ({ response }: ResponseViewProps) => JSX.Element;
