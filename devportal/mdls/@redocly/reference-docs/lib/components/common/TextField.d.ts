import React from 'react';
import { FieldProps } from 'informed';
import { Option, DropdownProps } from '@redocly/react-dropdown-aria';
export declare const invertedInputStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../services/extendTheme").ProTheme>>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", import("../../services/extendTheme").ProTheme, {
    fullWidth?: boolean | undefined;
    inputType?: string | undefined;
    inputActionButton?: InputActionButtonProps | undefined;
}, never>;
export interface InputActionButtonProps {
    label: string;
    onClick: React.EventHandler<React.SyntheticEvent>;
}
export interface TextFieldExtraProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
    errorMessage?: string;
    inputActionButton?: InputActionButtonProps;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldExtraProps & React.RefAttributes<HTMLInputElement>>;
export declare function FormTextField(props: FieldProps<string, GenericObject> & TextFieldExtraProps): JSX.Element;
export interface FormDropdownProps extends Partial<DropdownProps> {
    options: Option[];
    initValue?: string;
}
export declare const FormDropdown: React.ComponentType<FieldProps<string, any> & FormDropdownProps>;
