/// <reference types="react" />
import { DropdownProps as ReactDropdownProps } from '@redocly/react-dropdown-aria';
export interface DropdownOption {
    idx: number;
    value: string;
    title?: string;
}
export interface DropdownProps extends Partial<ReactDropdownProps> {
    options: DropdownOption[];
    onChange: (option: DropdownOption) => void;
}
export declare const darkDropdownStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../../services/extendTheme").ProTheme>>;
export declare const Dropdown: import("styled-components").StyledComponent<{
    (props: ReactDropdownProps): JSX.Element;
    defaultProps: {
        ariaDescribedBy: null;
        ariaLabel: null;
        ariaLabelledBy: null;
        arrowRenderer: undefined;
        centerText: boolean;
        className: undefined;
        contentClassName: null;
        defaultOpen: boolean;
        disabled: boolean;
        height: null;
        hideArrow: boolean;
        id: null;
        maxContentHeight: number;
        openUp: boolean;
        optionItemRenderer: undefined;
        pageKeyTraverseSize: number;
        placeholder: string;
        searchable: boolean;
        selectedValueClassName: null;
        style: {};
        value: undefined;
        width: null;
    };
}, import("../../../services/extendTheme").ProTheme, {
    dense?: boolean | undefined;
    fullWidth?: boolean | undefined;
    openUp?: boolean | undefined;
    variant?: "light" | "dark" | undefined;
    prefix?: string | undefined;
}, never>;
export declare const SimpleDropdown: import("styled-components").StyledComponent<{
    (props: ReactDropdownProps): JSX.Element;
    defaultProps: {
        ariaDescribedBy: null;
        ariaLabel: null;
        ariaLabelledBy: null;
        arrowRenderer: undefined;
        centerText: boolean;
        className: undefined;
        contentClassName: null;
        defaultOpen: boolean;
        disabled: boolean;
        height: null;
        hideArrow: boolean;
        id: null;
        maxContentHeight: number;
        openUp: boolean;
        optionItemRenderer: undefined;
        pageKeyTraverseSize: number;
        placeholder: string;
        searchable: boolean;
        selectedValueClassName: null;
        style: {};
        value: undefined;
        width: null;
    };
}, import("../../../services/extendTheme").ProTheme, {
    dense?: boolean | undefined;
    fullWidth?: boolean | undefined;
    openUp?: boolean | undefined;
    variant?: "light" | "dark" | undefined;
    prefix?: string | undefined;
}, never>;
export declare const MimeLabel: import("styled-components").StyledComponent<"span", import("../../../services/extendTheme").ProTheme, {}, never>;
