import * as React from 'react';
export declare const StyledInput: import("styled-components").StyledComponent<"input", import("../../services/extendTheme").ProTheme, {}, never>;
export interface CheckboxExtraProps {
    fullWidth?: boolean;
    label?: string;
    nowrap?: boolean;
}
export declare const Checkbox: React.ForwardRefExoticComponent<React.InputHTMLAttributes<Omit<HTMLInputElement, "type">> & CheckboxExtraProps & React.RefAttributes<HTMLInputElement>>;
