import * as React from 'react';
import { FieldModel } from '../../services/models';
import { RedocProNormalizedOptions } from '../../../../services/ProStore';
import { SchemaOptions } from '../Schema/types';
export interface FieldProps extends SchemaOptions {
    className?: string;
    isLast?: boolean;
    showExamples?: boolean;
    field: FieldModel;
    expandByDefault?: boolean;
    renderDiscriminatorSwitch?: (opts: FieldProps) => JSX.Element;
}
export declare class Field extends React.Component<FieldProps> {
    static contextType: React.Context<RedocProNormalizedOptions>;
    context: RedocProNormalizedOptions;
    toggle: () => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    render(): JSX.Element;
}
