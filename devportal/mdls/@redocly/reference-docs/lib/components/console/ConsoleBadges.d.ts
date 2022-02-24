import * as React from 'react';
export interface ConsoleBadgesProps {
    onChange: (activeBadge: number) => void;
    active: number;
    hasResponse: boolean;
}
export declare class ConsoleBadges extends React.Component<ConsoleBadgesProps> {
    render(): JSX.Element;
}
