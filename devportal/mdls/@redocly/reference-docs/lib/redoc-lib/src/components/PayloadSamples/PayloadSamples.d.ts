/// <reference types="react" />
import { MediaContentModel, OperationModel } from '../../services';
export interface PayloadSamplesProps {
    content: MediaContentModel;
    operation?: OperationModel;
    properties?: any;
    onlyDefaultMimeType?: boolean;
}
export declare const PayloadSamples: ({ onlyDefaultMimeType, operation, content: mimeContent, ...props }: PayloadSamplesProps) => JSX.Element;
