/// <reference types="react" />
import { MediaContentModel, OperationModel } from '../../services';
export interface RequestSamplesProps {
    operation: OperationModel;
    defaultLanguage?: string;
    pathParams?: any;
    properties?: any;
    disableHeader?: boolean;
    onlyDefaultSample?: boolean;
    onlyDefaultMimeType?: boolean;
    content?: MediaContentModel;
}
export declare const RequestSamples: ({ operation, defaultLanguage, disableHeader, content, ...props }: RequestSamplesProps) => JSX.Element | null;
