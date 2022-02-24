import * as React from 'react';
import type { FieldModel, RequestBodyModel, MediaContentModel } from '../../services/models';
export interface ParametersProps {
    parameters?: FieldModel[];
    body?: RequestBodyModel;
}
export declare class Parameters extends React.PureComponent<ParametersProps> {
    orderParams(params: FieldModel[]): Record<string, FieldModel[]>;
    render(): JSX.Element | null;
}
export declare function BodyContent({ content, description, }: {
    content: MediaContentModel;
    description?: string;
}): JSX.Element;
