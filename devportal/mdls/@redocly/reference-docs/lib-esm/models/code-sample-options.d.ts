import { Events, CodeSamplesConfig } from '../services';
export interface CodeSampleOptions {
    payloadSampleIdx: number;
    hideRequestPayloadSample: boolean;
    hideSingleRequestSampleTab: boolean;
    generatedPayloadSamplesMaxDepth: number;
    onlyRequiredInSamples: boolean;
    events: Pick<Events, 'codeSamplesLanguageSwitch'>;
    generateCodeSamples?: CodeSamplesConfig;
}
