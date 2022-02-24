/// <reference types="react" />
export declare const CollapsingDropdown: import("styled-components").StyledComponent<{
    (props: import("@redocly/react-dropdown-aria").DropdownProps): JSX.Element;
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
} & {
    active?: boolean | undefined;
}, never>;
