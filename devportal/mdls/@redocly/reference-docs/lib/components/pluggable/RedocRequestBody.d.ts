import * as React from 'react';
import { ProStore } from '../../services';
interface RedocRequestBodyProps {
    store: ProStore;
    pointer: string;
    hideSamples?: boolean;
}
export declare class RedocRequestBody extends React.Component<RedocRequestBodyProps> {
    render(): JSX.Element;
}
export {};
