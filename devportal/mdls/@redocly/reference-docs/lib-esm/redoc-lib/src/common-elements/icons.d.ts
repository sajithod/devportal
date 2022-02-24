import * as React from 'react';
export interface ShelfIconProps {
    className?: string;
    float?: 'left' | 'right';
    size?: string;
    color?: string;
    direction: 'left' | 'right' | 'up' | 'down';
    style?: React.CSSProperties;
}
export declare const ShelfIcon: import("styled-components").StyledComponent<({ className, style }: ShelfIconProps) => JSX.Element, import("../../../services/extendTheme").ProTheme, {}, never>;
declare function CrossIconInt({ className }: {
    className?: string;
}): JSX.Element;
export declare const CrossIcon: import("styled-components").StyledComponent<typeof CrossIconInt, import("../../../services/extendTheme").ProTheme, {
    size?: string | undefined;
    color?: string | undefined;
    float?: string | undefined;
}, never>;
declare function LockIconInt({ className }: {
    className?: string;
}): JSX.Element;
export declare const LockIcon: import("styled-components").StyledComponent<typeof LockIconInt, import("../../../services/extendTheme").ProTheme, {
    size?: string | undefined;
    color?: string | undefined;
    float?: string | undefined;
}, never>;
export declare const FileIcon: import("styled-components").StyledComponent<({ className }: {
    className?: string | undefined;
}) => JSX.Element, import("../../../services/extendTheme").ProTheme, {
    size?: string | undefined;
    color?: string | undefined;
}, never>;
export declare const LinkIcon: import("styled-components").StyledComponent<({ className }: {
    className?: string | undefined;
}) => JSX.Element, import("../../../services/extendTheme").ProTheme, {
    size?: string | undefined;
}, never>;
export {};
