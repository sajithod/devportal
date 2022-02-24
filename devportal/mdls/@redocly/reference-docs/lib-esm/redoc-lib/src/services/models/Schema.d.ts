import { OpenAPIExternalDocumentation, OpenAPISchema, Referenced } from '../../types';
import { OpenAPIParser } from '../OpenAPIParser';
import { RedocProNormalizedOptions } from '../../../../services';
import { FieldModel } from './Field';
import { MergedOpenAPISchema, ResponseModel } from '../';
import { OperationModel } from './Operation';
export declare type Deps = {
    parentFieldFullPath?: string;
    operation?: OperationModel;
    type?: 'request' | 'response';
    response?: ResponseModel;
    in?: string;
};
export declare class SchemaModel {
    private parser;
    private options;
    private parent?;
    private deps;
    pointer: string;
    type: string | string[];
    displayType: string;
    typePrefix: string;
    title: string;
    description: string;
    externalDocs?: OpenAPIExternalDocumentation;
    isPrimitive: boolean;
    isCircular: boolean;
    format?: string;
    displayFormat?: string;
    nullable: boolean;
    deprecated: boolean;
    pattern?: string;
    example?: any;
    enum: any[];
    default?: any;
    readOnly: boolean;
    writeOnly: boolean;
    constraints: string[];
    private _fields?;
    items?: SchemaModel;
    oneOf?: SchemaModel[];
    oneOfType: string;
    discriminatorProp: string;
    activeOneOf: number;
    rawSchema: OpenAPISchema;
    schema: MergedOpenAPISchema;
    extensions?: GenericObject;
    'x-enumDescriptions': {
        [name: string]: string;
    };
    const: any;
    contentEncoding?: string;
    contentMediaType?: string;
    minItems?: number;
    maxItems?: number;
    /**
     * @param parser
     * @param schemaOrRef
     * @param pointer
     * @param options - normalized options
     * @param isChild if schema discriminator Child
     * When true forces dereferencing in allOfs even if circular
     * @param parent - parent item
     * @param deps - items depth
     */
    constructor(parser: OpenAPIParser, schemaOrRef: Referenced<OpenAPISchema>, pointer: string, options: RedocProNormalizedOptions, isChild?: boolean, parent?: SchemaModel | undefined, deps?: Deps);
    /**
     * Set specified alternative schema as active
     * @param idx oneOf index
     */
    activateOneOf(idx: number): void;
    hasType(type: string): boolean;
    get fields(): FieldModel[] | undefined;
    hasCircularParent($refs: string[]): boolean;
    init(parser: OpenAPIParser, isChild: boolean): void;
    private initOneOf;
    private initDiscriminator;
}
