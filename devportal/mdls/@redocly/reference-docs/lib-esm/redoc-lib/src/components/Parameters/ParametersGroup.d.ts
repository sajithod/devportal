import * as React from 'react';
import { FieldModel } from '../../services/models';
export interface ParametersGroupProps {
    place: string;
    parameters: FieldModel[];
}
export declare class ParametersGroup extends React.PureComponent<ParametersGroupProps, any> {
    render(): JSX.Element | null;
}
export declare const Wrap: import("styled-components").StyledComponent<"div", import("../../../../services/extendTheme").ProTheme, {}, never>;
