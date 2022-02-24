import * as React from 'react';
import { IMenuItem, OperationModel } from '../../services';
import { ExternalLink } from '../../../../services/ProStore';
export interface MenuItemProps {
    item: IMenuItem;
    onActivate?: (item: IMenuItem, evt: React.MouseEvent<HTMLElement>) => void;
    withoutChildren?: boolean;
}
export declare const MenuExternalLink: (props: React.PropsWithChildren<{
    link: ExternalLink;
}>) => JSX.Element;
export declare const MenuItem: (props: React.PropsWithChildren<MenuItemProps>) => JSX.Element;
export interface OperationMenuItemContentProps {
    item: OperationModel;
}
export declare const MenuItemPath: import("styled-components").StyledComponent<"code", import("../../../../services/extendTheme").ProTheme, {}, never>;
export declare const SeparatorLine: import("styled-components").StyledComponent<"span", import("../../../../services/extendTheme").ProTheme, {}, never>;
