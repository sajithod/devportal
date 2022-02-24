export declare enum LayoutVariant {
    STACKED = "stacked",
    THREE_PANEL = "three-panel"
}
export declare enum AnalyticsEventType {
    CodeSampleLanguageSwitched = "CodeSampleLanguageSwitched",
    CodeSampleCopied = "CodeSampleCopied",
    OperationServerExpanded = "OperationServerExpanded",
    PanelToggle = "PanelToggle",
    TryItOpen = "TryItOpen",
    TryItSent = "TryItSent"
}
export interface AnalyticsEvent {
    eventType: AnalyticsEventType;
    resource: 'Redocly_CodeSample' | 'Redocly_Operation' | 'Redocly_OperationTryIt';
    action: 'LanguageSwitched' | 'PanelToggled' | 'Opened' | 'NavigatedOverrideLink' | 'Sent' | 'ValidationFailed';
    operationId?: string;
    operationPath: string;
    operationHttpVerb: string;
    operationSummary?: string;
}
export interface CodeSamplesLanguageSwitchedEvent extends AnalyticsEvent {
    lang: string;
    label: string;
    exampleId?: string;
}
declare type TryItOpenedEvent = AnalyticsEvent;
export interface PanelToggleEvent extends AnalyticsEvent {
    panelType: 'request' | 'responses' | 'request-samples' | 'response-samples';
    state: 'expanded' | 'collapsed';
    operationId: string;
    operationPath: string;
    operationHttpVerb: string;
    operationSummary?: string;
}
export declare type Events = {
    codeSamplesLanguageSwitch?: (event: CodeSamplesLanguageSwitchedEvent) => void;
    tryItOpen?: (event: TryItOpenedEvent) => void;
    tryItSent?: (event: TryItOpenedEvent) => void;
    panelToggle?: (event: PanelToggleEvent) => void;
};
export {};
