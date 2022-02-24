import * as React from 'react';
import { OpenAPIParser } from '../../services';
import { RedocProNormalizedOptions } from '../../../../services/ProStore';
import { LayoutVariant } from '../../../../services/store-types';
export interface ObjectDescriptionProps {
    schemaRef: string;
    exampleRef?: string;
    showReadOnly?: boolean;
    showWriteOnly?: boolean;
    parser: OpenAPIParser;
    options: RedocProNormalizedOptions;
    layout?: LayoutVariant;
    showRightPanel?: boolean;
}
export declare class SchemaDefinition extends React.PureComponent<ObjectDescriptionProps> {
    private static getMediaType;
    private _mediaModel;
    private get mediaModel();
    render(): JSX.Element;
}
