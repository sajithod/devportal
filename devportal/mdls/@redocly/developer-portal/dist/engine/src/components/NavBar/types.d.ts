import { Location } from 'history';
import { NavItem } from '../../../auto-graphql';
export interface NavBarProps {
    standalone?: boolean;
    location: Location;
    sidebarName?: string;
}
export interface UserNavBarProps extends NavBarProps {
    items: {
        [P in keyof NavItem]?: NonNullable<NavItem[P]>;
    }[];
    logo?: string;
    altText?: string;
    href?: string;
    pathPrefix: string;
    className?: string;
}
