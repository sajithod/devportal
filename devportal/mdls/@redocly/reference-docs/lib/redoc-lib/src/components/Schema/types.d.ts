import type { SchemaModel } from '../../services/models';
export interface SchemaOptions {
    showTitle?: boolean;
    skipReadOnly?: boolean;
    skipWriteOnly?: boolean;
    level?: number;
}
export interface SchemaProps extends SchemaOptions {
    schema: SchemaModel;
}
export interface ObjectSchemaProps extends SchemaProps {
    discriminator?: {
        fieldName: string;
        parentSchema: SchemaModel;
    };
}
