import * as React from 'react';
import { RedocNormalizedOptions, RedocRawOptions } from '../../services/RedocNormalizedOptions';
import { OptionsContext } from '../OptionsProvider';
import { ProMenu } from '../../../../services/ProMenu';
export interface StickySidebarProps {
    className?: string;
    scrollYOffset?: RedocRawOptions['scrollYOffset'];
    menu: ProMenu;
}
export interface StickySidebarState {
    offsetTop?: string;
}
export declare class StickyResponsiveSidebar extends React.Component<StickySidebarProps, StickySidebarState> {
    static contextType: React.Context<RedocNormalizedOptions>;
    context: React.ContextType<typeof OptionsContext>;
    state: StickySidebarState;
    stickyElement: Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getScrollYOffset(options: RedocNormalizedOptions): string;
    render(): JSX.Element;
    private toggleNavMenu;
}
