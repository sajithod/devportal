import type { AxiosInstance } from 'contentful-sdk-core';
import { GetWebhookParams } from '../../../common-types';
import { CreateWebhooksProps, WebhookProps } from '../../../entities/webhook';
import { RestEndpoint } from '../types';
export declare const get: RestEndpoint<'Webhook', 'get'>;
export declare const getManyCallDetails: RestEndpoint<'Webhook', 'getManyCallDetails'>;
export declare const getCallDetails: RestEndpoint<'Webhook', 'getCallDetails'>;
export declare const getHealthStatus: RestEndpoint<'Webhook', 'getHealthStatus'>;
export declare const getMany: RestEndpoint<'Webhook', 'getMany'>;
export declare const create: RestEndpoint<'Webhook', 'create'>;
export declare const createWithId: (http: AxiosInstance, params: GetWebhookParams, rawData: CreateWebhooksProps, headers?: Record<string, unknown> | undefined) => Promise<WebhookProps>;
export declare const update: RestEndpoint<'Webhook', 'update'>;
export declare const del: RestEndpoint<'Webhook', 'delete'>;
