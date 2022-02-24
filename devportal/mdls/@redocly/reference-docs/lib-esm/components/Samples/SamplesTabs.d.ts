/// <reference types="react" />
import { TabProps, TabsProps } from '../Tabs';
interface SampleProps extends TabProps {
    lang: string;
}
interface SamplesTabsProps extends TabsProps {
    onChange?: (tab: TabProps) => void;
    tabs: SampleProps[];
    defaultLanguage?: string;
}
export declare const SamplesTabs: ({ children, onChange, defaultLanguage, ...props }: SamplesTabsProps) => JSX.Element;
export {};
