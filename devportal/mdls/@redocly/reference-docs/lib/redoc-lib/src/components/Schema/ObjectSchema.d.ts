import * as React from 'react';
import { ObjectSchemaProps } from './types';
import type { SchemaModel } from '../../services';
export declare class ObjectSchema extends React.Component<ObjectSchemaProps> {
    static contextType: React.Context<import("../../services").RedocNormalizedOptions>;
    get parentSchema(): SchemaModel | undefined;
    render(): JSX.Element;
}
