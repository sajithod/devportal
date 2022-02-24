import { OpenAPIParameter, OpenAPIParameterLocation, OpenAPIParameterStyle, Referenced } from '../../types';
import { RedocProNormalizedOptions } from '../../../../services';
import { OpenAPIParser } from '../OpenAPIParser';
import { SchemaModel, Deps } from './Schema';
import { ExampleModel } from './Example';
/**
 * Field or Parameter model ready to be used by components
 */
export declare class FieldModel {
    deps: Deps;
    expanded: boolean | undefined;
    schema: SchemaModel;
    name: string;
    required: boolean;
    description: string;
    example?: string;
    examples?: Record<string, ExampleModel>;
    deprecated: boolean;
    in?: OpenAPIParameterLocation;
    kind: string;
    extensions?: GenericObject;
    explode: boolean;
    style?: OpenAPIParameterStyle;
    const?: any;
    serializationMime?: string;
    fieldFullPath?: string;
    constructor(parser: OpenAPIParser, infoOrRef: Referenced<OpenAPIParameter> & {
        name?: string;
        kind?: string;
    }, pointer: string, options: RedocProNormalizedOptions, parentSchema?: SchemaModel, deps?: Deps);
    toggle(): void;
    collapse(): void;
    expand(): void;
}
