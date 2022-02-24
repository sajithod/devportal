import * as React from 'react';
import { ProStore, RedocProRawOptions } from '../services/ProStore';
import { LayoutVariant } from '../services/store-types';
import { SpecVersions } from '../services/VersionedSpecStore';
import { CodeSampleConfig } from '../services/code-samples/types';
export interface RedoclyReferenceDocsProps {
    store: ProStore;
    _forceRenderInfo?: boolean;
}
interface RedoclyReferenceDocsState {
    searchPopUpShown: boolean;
    searchPopUpValue: string;
}
interface CssFixesProps {
    whiteLabel: boolean;
    showRightPanel: boolean;
    layout: LayoutVariant;
}
export declare const CssFixes: import("styled-components").GlobalStyleComponent<CssFixesProps, import("../services/extendTheme").ProTheme>;
export declare class RedoclyReferenceDocs extends React.Component<RedoclyReferenceDocsProps, RedoclyReferenceDocsState> {
    private _observer;
    private _updatedItems;
    rootElementRef: React.RefObject<HTMLDivElement>;
    constructor(props: RedoclyReferenceDocsProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    handleClose: () => void;
    render(): JSX.Element;
}
export interface RedoclyReferenceDocsStandaloneProps {
    definition?: GenericObject;
    definitionUrl?: string;
    options?: RedocProRawOptions;
    activeItemId?: string;
    activeSampleLanguage?: CodeSampleConfig['lang'];
    activeDeepLink?: string;
}
export declare function RedoclyReferenceDocsStandalone(props: RedoclyReferenceDocsStandaloneProps): JSX.Element | null;
export interface RedoclyReferenceDocsMultiStandaloneProps {
    definitions: SpecVersions;
    options?: RedocProRawOptions;
}
export declare class RedoclyReferenceDocsMultiStandalone extends React.Component<RedoclyReferenceDocsMultiStandaloneProps> {
    render(): JSX.Element;
}
export {};
