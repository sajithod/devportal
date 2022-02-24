import type { OperationModel, Unstable_ExternalCodeSample } from '../../services';
import { OpenAPIXCodeSample } from '../../types';
export declare function useCodeSamples({ allCodeSamples, payload }: OperationModel): {
    payload: OperationModel['payload'];
    samples: Array<{
        key: string;
        title: string;
    } & (Unstable_ExternalCodeSample | OpenAPIXCodeSample)>;
};
