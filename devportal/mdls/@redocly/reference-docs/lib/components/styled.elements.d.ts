/// <reference types="react" />
import { ProTheme } from '../services/extendTheme';
import { ProStore, LayoutVariant } from '../services';
export declare const StyledToggleRightPanelButton: import("styled-components").StyledComponent<"a", ProTheme, {}, never>;
export declare const ToggleRightPanelButton: ({ store, isVisible, }: {
    store: ProStore;
    isVisible: boolean;
}) => JSX.Element | null;
export declare const ArrowIcon: import("styled-components").StyledComponent<(props: any) => JSX.Element, ProTheme, {}, never>;
export declare const RedocWrap: import("styled-components").StyledComponent<"div", ProTheme, {}, never>;
export declare const ApiContentWrap: import("styled-components").StyledComponent<"div", ProTheme, {
    layout?: LayoutVariant | undefined;
}, never>;
export declare const BackgroundStub: import("styled-components").StyledComponent<"div", ProTheme, {}, never>;
export declare const BackgroundStubFix: import("styled-components").StyledComponent<"div", ProTheme, {}, never>;
export declare const NextSectionButtonWrap: import("styled-components").StyledComponent<"div", ProTheme, {}, never>;
export declare const ChangeViewButton: ({ store, isVisible, }: {
    store: ProStore;
    isVisible: boolean;
}) => JSX.Element | null;
export declare const ControlsWrap: import("styled-components").StyledComponent<"div", ProTheme, {}, never>;
