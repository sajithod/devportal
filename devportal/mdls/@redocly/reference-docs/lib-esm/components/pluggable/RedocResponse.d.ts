import * as React from 'react';
import { ProStore } from '../../services/ProStore';
export interface RedocResponseProps {
    store: ProStore;
    pointer: string;
    hideSamples?: boolean;
}
export declare class RedocResponse extends React.Component<RedocResponseProps> {
    render(): JSX.Element;
}
