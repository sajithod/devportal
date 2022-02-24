import { AppTheme } from '../../appTheme';
export declare function getAlertVariant(variants: AppTheme['components']['alert']['variants'], variant?: string): any;
export declare function getAlertIcon(theme: AppTheme, variant: any): string;
export declare const alertGeneral: ({ theme: { components, colors }, variant, }: {
    theme: AppTheme;
    variant?: string;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("@redocly/reference-docs/lib/services/extendTheme").ProTheme>>;
export declare const alertHeading: ({ theme: { components }, variant, }: {
    theme: AppTheme;
    variant?: string;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("@redocly/reference-docs/lib/services/extendTheme").ProTheme>>;
export declare const alertIcon: ({ theme, variant }: {
    theme: AppTheme;
    variant?: string;
}) => string;
