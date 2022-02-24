export declare const baseButton: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("../../services/extendTheme").ProTheme>>;
export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
    disabled?: boolean;
    blinking?: boolean;
    fullWidth?: boolean;
    variant?: 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large' | 'xlarge' | string;
}
export declare const Button: import("styled-components").StyledComponent<"button", import("../../services/extendTheme").ProTheme, ButtonProps, never>;
export declare const ButtonLink: import("styled-components").StyledComponent<"a", import("../../services/extendTheme").ProTheme, ButtonProps, never>;
