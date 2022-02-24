import * as React from 'react';
import { IMenuItem } from '../../services/MenuStore';
import { RedocProNormalizedOptions } from '../../../../services/ProStore';
import { ProMenu } from '../../../../services/ProMenu';
export declare class SideMenu extends React.Component<{
    menu: ProMenu;
    className?: string;
}> {
    static contextType: React.Context<import("../..").RedocNormalizedOptions>;
    context: RedocProNormalizedOptions;
    private _updateScroll?;
    render(): JSX.Element;
    activate: (item: IMenuItem) => void;
    private saveScrollUpdate;
}
