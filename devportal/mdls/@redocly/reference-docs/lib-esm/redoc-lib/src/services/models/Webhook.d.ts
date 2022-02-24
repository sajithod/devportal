import { OpenAPIPath, Referenced } from '../../types';
import { OpenAPIParser } from '../OpenAPIParser';
import { OperationModel } from './Operation';
import { RedocProNormalizedOptions } from '../../../../services';
export declare class WebhookModel {
    operations: OperationModel[];
    constructor(parser: OpenAPIParser, options: RedocProNormalizedOptions, infoOrRef?: Referenced<OpenAPIPath>);
    initWebhooks(parser: OpenAPIParser, webhooks: OpenAPIPath, options: RedocProNormalizedOptions): void;
}
