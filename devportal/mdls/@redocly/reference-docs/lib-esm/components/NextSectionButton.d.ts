/// <reference types="react" />
import { ProMenu } from '../services/ProMenu';
import { RedocProNormalizedOptions } from '../services/ProStore';
export declare const NextSectionButton: import("styled-components").StyledComponent<"button", import("../services/extendTheme").ProTheme, import("./shared/Button").ButtonProps, never>;
export declare const NextSectionButtonLink: import("styled-components").StyledComponent<"a", import("../services/extendTheme").ProTheme, import("./shared/Button").ButtonProps, never>;
interface ContinueButtonProps {
    pagination?: RedocProNormalizedOptions['pagination'];
    menu: ProMenu;
}
export declare const ContinueButton: ({ pagination, menu }: ContinueButtonProps) => JSX.Element | null;
export {};
