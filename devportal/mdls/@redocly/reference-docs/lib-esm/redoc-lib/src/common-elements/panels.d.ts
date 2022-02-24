import { LayoutVariant } from '../../../services/store-types';
export declare const MiddlePanel: import("styled-components").StyledComponent<"div", import("../../../services/extendTheme").ProTheme, {
    compact?: boolean | undefined;
    isStacked?: boolean | undefined;
}, never>;
export declare const Section: import("styled-components").StyledComponent<"div", import("../../../services/extendTheme").ProTheme, {
    "data-section-id": string | undefined;
} & {
    underlined?: boolean | undefined;
}, "data-section-id">;
export declare const RightPanel: import("styled-components").StyledComponent<"div", import("../../../services/extendTheme").ProTheme, {}, never>;
export declare const DarkRightPanel: import("styled-components").StyledComponent<"div", import("../../../services/extendTheme").ProTheme, {}, never>;
export declare const Row: import("styled-components").StyledComponent<"div", import("../../../services/extendTheme").ProTheme, {
    layout?: LayoutVariant | undefined;
}, never>;
