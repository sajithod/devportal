import * as React from 'react';
import { RedocNormalizedOptions } from '../redoc-lib';
import { ProStore } from '../services/ProStore';
export interface ProProvidersProps {
    store: ProStore;
    children: React.ReactNode;
    customOptions?: Partial<RedocNormalizedOptions>;
}
export declare const ProProviders: ({ store, children, customOptions, }: ProProvidersProps) => JSX.Element;
