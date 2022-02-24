export declare const OperationBadge: import("styled-components").StyledComponent<"span", import("../../../../services/extendTheme").ProTheme, {
    className: `operation-type ${string}`;
} & {
    type: string;
}, "className">;
export declare const MenuItemUl: import("styled-components").StyledComponent<"ul", import("../../../../services/extendTheme").ProTheme, {
    expanded: boolean;
}, never>;
export declare const MenuItemLi: import("styled-components").StyledComponent<"li", import("../../../../services/extendTheme").ProTheme, {
    depth: number;
}, never>;
export interface MenuItemLabelType {
    depth: number;
    active: boolean;
    deprecated?: boolean;
    type?: string;
    hasChildren?: boolean;
}
export declare const MenuItemLabel: import("styled-components").StyledComponent<"label", import("../../../../services/extendTheme").ProTheme, {
    role: "menuitem";
    className: string;
} & MenuItemLabelType, "className" | "role">;
export declare const MenuItemLink: import("styled-components").StyledComponent<"a", import("../../../../services/extendTheme").ProTheme, {
    role: "menuitem";
    className: string;
} & MenuItemLabelType, "className" | "role">;
export declare const MenuItemTitle: import("styled-components").StyledComponent<"span", import("../../../../services/extendTheme").ProTheme, {
    width?: string | undefined;
}, never>;
export declare const RedocAttribution: import("styled-components").StyledComponent<"div", import("../../../../services/extendTheme").ProTheme, {}, never>;
