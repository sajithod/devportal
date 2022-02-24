/// <reference types="react" />
export default function AppOverview(props: {
    app: {
        displayName: string;
        name: string;
        appId?: string;
        createdAt: string;
    };
}): JSX.Element;
