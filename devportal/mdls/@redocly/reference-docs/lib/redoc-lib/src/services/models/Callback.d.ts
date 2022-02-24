import { OpenAPICallback, Referenced } from '../../types';
import { OpenAPIParser } from '../OpenAPIParser';
import { OperationModel } from './Operation';
import { RedocProNormalizedOptions } from '../../../../services/ProStore';
export declare class CallbackModel {
    expanded: boolean;
    name: string;
    operations: OperationModel[];
    constructor(parser: OpenAPIParser, name: string, infoOrRef: Referenced<OpenAPICallback>, pointer: string, options: RedocProNormalizedOptions);
    toggle(): void;
}
