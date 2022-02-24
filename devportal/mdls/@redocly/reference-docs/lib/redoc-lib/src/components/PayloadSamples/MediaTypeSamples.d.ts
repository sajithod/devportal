/// <reference types="react" />
import { MediaTypeModel } from '../../services/models';
export interface PayloadSamplesProps {
    mediaType: MediaTypeModel;
    onlyDefaultSample?: boolean;
    properties?: any;
}
export declare const MediaTypeSamples: ({ mediaType, onlyDefaultSample, properties }: PayloadSamplesProps) => JSX.Element;
