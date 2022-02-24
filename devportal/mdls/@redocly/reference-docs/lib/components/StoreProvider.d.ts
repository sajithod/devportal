import * as React from 'react';
import { ProStore, RedocProRawOptions } from '../services/ProStore';
import { CodeSampleConfig } from '../services/code-samples/types';
import type { SpecVersions } from '../services/VersionedSpecStore';
export declare const Provider: React.Provider<ProStore | undefined>, Consumer: React.Consumer<ProStore | undefined>;
interface StoreProviderProps {
    definitionUrl?: string;
    definition?: GenericObject;
    store?: ProStore;
    definitions?: SpecVersions;
    options?: RedocProRawOptions;
    children: (props: {
        loading: boolean;
        store?: ProStore;
    }) => JSX.Element | null;
    activeItemId?: string;
    activeSampleLanguage?: CodeSampleConfig['lang'] | string;
    activeDeepLink?: string;
}
export declare const ProStoreProvider: ({ definitions, options, definitionUrl, definition, activeItemId, activeSampleLanguage, activeDeepLink, children, }: StoreProviderProps) => JSX.Element | null;
export declare function loadSpecs({ versions }: SpecVersions): Promise<void>;
export {};
