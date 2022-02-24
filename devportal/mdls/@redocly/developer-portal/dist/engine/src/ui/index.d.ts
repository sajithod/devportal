export { navigate } from 'gatsby';
export { UniversalLink as Link } from '../components/UniversalLink/UniversalLink';
export * from './Button';
export * from './Box/Box';
export * from './Box/Flex';
export { ThinTile } from './Tiles/ThinTile';
export { WideTile } from './Tiles/WideTile';
export { GradientBackground } from './GradientBackground/GradientBackground';
export { Jumbotron } from './Jumbotron/Jumbotron';
export { Alert } from './Alert/Alert';
export * from './Typography/Typography';
export { Arrow } from '../components/Arrow/Arrow';
export type { ArrowProps } from '../components/Arrow/Arrow';
export { SearchResultsWrap, SearchResultItemWrap, SearchResultLink, SearchItemDescription, SearchInputWrap, SearchInputField, SearchIcon, SearchClearIcon, SearchLoadingIcon, } from '../components/SearchBox/searchbox.elements';
export type { MenuItemProps } from '../components/Menu/types';
export { default as MenuItem } from '../components/UserComponents/MenuItem';
export { MenuMobileButton, MenuWrapper, } from '../components/UserComponents/layouts/sidebar.components';
export { MenuItems } from '../components/Menu/MenuItems';
export type { UserMenuProps as MenuProps } from '../components/Menu/types';
export { default as Menu } from '../components/UserComponents/Menu';
export { default as MdxLayout } from '../layouts/MarkdownLayout';
export { default as LandingLayout } from '../layouts/LandingLayout';
export { default as FullWidthLayout } from '../layouts/LandingLayout';
export * from '../components/mdx';
export { useAPICatalog, APICatalog } from './Catalog';
export type { APICatalogItem } from './Catalog';
export { useSidebarsInfo } from './sidebars';
export { LoginMenu } from '../components/UserComponents/LoginMenu';
export { NavBar } from '../components/NavBar/NavBar';
export type { UserNavBarProps as NavBarProps } from '../components/NavBar/types';
export type { FooterProps } from '../components/UserComponents/footer.elements';
export { SearchBox } from '../components/SearchBox/SearchBox';
export { LoadingAnimation } from '../components/LoadingAnimation';
export { JsonViewer as RedocJsonViewer } from '@redocly/reference-docs';
export { useFullHeight } from '../hooks';
export * from './integrations';
export * from '../components/RedirectToLogin';
export { setSecurityDetails, Row as ApiReferenceRow, MiddlePanel as ApiReferenceMiddlePanel, ContentItem as ApiReferenceSection, OperationModel, ShelfIcon, LockIcon, CrossIcon, Dropdown, Tooltip, Checkbox, TextField, Button as ReferenceDocsButton, ClipboardService, FormLabel, FormControl, FormError, Markdown, mediaCSS, mediaMap, } from '@redocly/reference-docs';
export type { AuthPanelHookProps, // deprecated
SecurityPanelHookProps, ButtonProps as ReferenceDocsButtonProps, DropdownProps, TooltipProps, ShelfIconProps, DropdownOption, MediaValue, } from '@redocly/reference-docs';
export declare const ApiReferenceRightPanel: import("styled-components").StyledComponent<"div", {
    spacing: {
        unit: number;
        sectionHorizontal: number;
        sectionVertical: number;
    };
    components: {
        buttons: {
            borderRadius: any;
            hoverStyle: string;
            fontWeight: any;
            boxShadow: string;
            hoverBoxShadow: string;
            fontFamily: string;
            sizes: {
                small: {
                    fontSize: string;
                    padding: string;
                    minWidth: string;
                };
                medium: {
                    fontSize: string;
                    padding: string;
                    minWidth: string;
                };
                large: {
                    fontSize: string;
                    padding: string;
                    minWidth: string;
                };
                xlarge: {
                    fontSize: string;
                    padding: string;
                    minWidth: string;
                };
            };
        };
        search: {
            icon: string;
            iconColor: any;
        };
        alert: {
            marginHorizontal: string;
            marginVertical: string;
            paddingHorizontal: string;
            paddingVertical: string;
            borderRadius: string;
            iconSize: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            heading: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                transform: string;
            };
            variants: {
                info: {
                    backgroundColor: string;
                    textColor: any;
                    headingColor: any;
                    iconColor: any;
                    icon: string;
                };
                attention: {
                    backgroundColor: any;
                    textColor: any;
                    headingColor: any;
                    iconColor: any;
                    icon: string;
                };
                warning: {
                    backgroundColor: any;
                    textColor: any;
                    headingColor: any;
                    iconColor: any;
                    icon: string;
                };
                danger: {
                    backgroundColor: any;
                    textColor: any;
                    headingColor: any;
                    iconColor: any;
                    icon: string;
                };
                success: {
                    backgroundColor: any;
                    textColor: any;
                    headingColor: any;
                    iconColor: any;
                    icon: string;
                };
            };
        };
        panels: {
            borderRadius: string;
        };
        shape: {
            borderRadius: string;
        };
        blockquote: {
            marginHorizontal: string;
            marginVertical: string;
            paddingHorizontal: string;
            paddingVertical: string;
            backgroundColor: string;
            borderRadius: string;
            borderLeft: string;
            color: any;
        };
        contentWrapper: {
            maxWidth: string;
            paddingHorizontal: string;
            paddingVertical: string;
        };
        login: {
            avatarBorderRadius: any;
            avatarBgColor: string;
        };
        layoutControls: {
            top: string;
        };
        httpBadges: {
            borderRadius: string;
            fontFamily: any;
            fontWeight: any;
            color: any;
            sizes: {
                medium: {
                    fontSize: string;
                    lineHeight: string;
                };
                small: {
                    fontSize: string;
                    lineHeight: string;
                };
            };
        };
        tryItButton: {
            fullWidth: boolean;
        };
        tryItSendButton: {
            fullWidth: boolean;
        };
    };
    breakpoints: {
        small: string;
        medium: string;
        large: string;
    };
    shape: {
        borderRadius: string;
    };
    colors: {
        background: string;
        tonalOffset: number;
        primary: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        accent: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        success: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        error: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        warning: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        info: {
            main: string;
            light: string;
            dark: string;
            contrastText: string;
        };
        text: {
            primary: string;
            secondary: string;
            light: string;
        };
        border: {
            dark: string;
            light: string;
        };
        responses: {
            success: {
                color: any;
                backgroundColor: string;
            };
            error: {
                color: any;
                backgroundColor: string;
            };
            redirect: {
                color: any;
                backgroundColor: string;
            };
            info: {
                color: any;
                backgroundColor: string;
            };
        };
        http: {
            get: string;
            post: string;
            put: string;
            options: string;
            patch: string;
            delete: string;
            basic: string;
            link: string;
            head: string;
        };
        navbar: {
            main: any;
            gradient: string;
            contrastText: any;
        };
        footer: {
            main: any;
            contrastText: any;
        };
    };
    sidebar: {
        showAtBreakpoint: string;
        backgroundColor: string;
        width: string;
        textColor: string;
        textColorSecondary: string;
        activeTextColor: any;
        activeBgColor: string;
        separatorLineColor: string;
        rightLineColor: string;
        separatorLabelColor: any;
        caretColor: any;
        caretSize: any;
        spacing: {
            unit: number;
            paddingHorizontal: any;
            paddingVertical: any;
            offsetTop: number;
            offsetLeft: number;
            offsetNesting: number;
        };
        borderRadius: string;
        fontFamily: any;
        fontSize: any;
    };
    navbar: {
        borderRadius: string;
        marginHorizontal: string;
        marginVertical: string;
        activeTextColor: any;
        activeBgColor: string;
        activeTextDecoration: string;
        fontWeight: number;
        fontSize: string;
    };
    tocPanel: {
        width: string;
    };
    logo: {
        maxWidth: string;
        maxHeight: string;
        height: string;
        margin: string;
    };
    typography: {
        fontSize: string;
        lineHeight: string;
        fontWeightRegular: string;
        fontWeightBold: string;
        fontWeightLight: string;
        fontFamily: string;
        headings: {
            fontFamily: string;
            fontWeight: string;
        };
        fieldName: {
            fontSize: any;
            fontFamily: any;
            fontWeight: any;
        };
        heading1: {
            fontSize: string;
            fontWeight: string;
            fontFamily: any;
            lineHeight: any;
            color: any;
            capitalize: boolean;
            marginTop: string;
            marginBottom: string;
        };
        heading2: {
            fontSize: string;
            fontWeight: string;
            color: any;
            fontFamily: any;
            lineHeight: any;
            capitalize: boolean;
            marginTop: string;
            marginBottom: string;
        };
        heading3: {
            fontSize: string;
            fontWeight: string;
            color: any;
            fontFamily: any;
            lineHeight: any;
            capitalize: boolean;
            marginTop: string;
            marginBottom: string;
        };
        heading4: {};
        heading5: {};
        heading6: {};
        rightPanelHeading: {};
        code: {
            fontSize: string;
            fontFamily: string;
            fontWeight: any;
            color: string;
            backgroundColor: string;
            wrap: boolean;
        };
        links: {
            color: any;
            visited: any;
            hover: string;
            textDecoration: string;
        };
    };
    rightPanel: {
        showAtBreakpoint: string;
        backgroundColor: string;
        width: string;
        textColor: string;
        panelBackgroundColor: string;
        panelControlsBackgroundColor: string;
    };
    schema: {
        linesColor: any;
        defaultDetailsWidth: string;
        typeNameColor: any;
        typeTitleColor: any;
        requireLabelColor: string;
        labelsTextSize: string;
        nestingSpacing: string;
        nestedBackground: any;
        caretColor: any;
        caretSize: string;
    };
    codeBlock: {
        backgroundColor: any;
        copyButton: {
            visibleText: string;
            contrastText: string;
            background: string;
        };
        tokens: {};
    };
    layout: {
        showDarkRightPanel: boolean;
        stacked: {
            maxWidth: {
                _: string;
                small: string;
                medium: string;
                large: string;
            };
        };
        'three-panel': {
            maxWidth: {
                _: string;
                small: string;
                medium: string;
                large: string;
            };
        };
    };
}, {}, never>;
export { getUserClaims, logout, useProxiedFetch, getUserJwt, getUserId, getIdPJwt, getIdPAccessToken, parseClaims, useIsLoggedIn, useIsAuthenticated, useUserClaims, } from './auth/utils';
export { usePathPrefix, usePageData } from './utils';
export { scrollToHeading } from './helpers';
export { default as SidebarLayout } from '../components/UserComponents/layouts/Sidebar';
export type { SidebarProps, SidebarProps as SidebarLayoutProps, } from '../components/UserComponents/layouts/Sidebar';
export { StyledOperationBadge as OperationBadge } from '../components/UserComponents/styled.elements';
export type { UserSearchInputProps as SearchInputProps, UserSearchResultsProps as SearchResultsProps, } from '../components/SearchBox/types';
export { default as SearchInput } from '../components/UserComponents/SearchInput';
export { default as SearchResults } from '../components/UserComponents/SearchResults';
export { default as SearchResultItem } from '../components/SearchBox/SearchResultItem';
export { default as MarkdownLayout } from '../components/UserComponents/layouts/Markdown';
export type { MarkdownLayoutProps } from '../components/UserComponents/layouts/Markdown';
export type { UserApiReferenceInfoProps as ApiReferenceInfoProps } from '../components/UserComponents/ApiReferenceInfo';
export type { VersionSwitcherProps } from '../components/UserComponents/VersionSwitcher';
export { default as VersionSwitcher } from '../components/UserComponents/VersionSwitcher';
export { appTheme as theme } from '../appTheme';
export type { AppTheme as Theme } from '../appTheme';
export { ApiReferenceLayout } from '../components/styled';
