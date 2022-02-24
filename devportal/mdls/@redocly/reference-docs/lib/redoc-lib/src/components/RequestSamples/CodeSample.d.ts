/// <reference types="react" />
import { OperationModel, Unstable_ExternalCodeSample, MediaContentModel } from '../../services';
import { ExampleSwitchOptions } from '../../../../components/Samples';
interface CodeSamplesProps extends ExampleSwitchOptions {
    content?: MediaContentModel;
    operation: OperationModel;
    lang: string;
    source?: string;
    externalSample?: Unstable_ExternalCodeSample;
    pathParams?: any;
    properties?: any;
    onlyDefaultSample?: boolean;
    onlyDefaultMimeType?: boolean;
}
export declare const CodeSample: ({ onlyDefaultSample, onlyDefaultMimeType, content: mimeContent, ...props }: CodeSamplesProps) => JSX.Element;
export {};
