declare type BadgeColor = 'success' | 'warning' | 'secondary';
declare const _default: import("styled-components").StyledComponent<"p", any, import("styled-system").TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    color?: string;
    mt?: string;
    mb?: string;
} & {
    mt: string;
    mb: string;
} & {
    'data-cy': string;
} & {
    color: BadgeColor;
}, "mt" | "mb" | "data-cy">;
export default _default;
