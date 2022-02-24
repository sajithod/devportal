import { AnalyticsEvent, AnalyticsEventType, CodeSamplesLanguageSwitchedEvent, PanelToggleEvent } from '../../../../services/store-types';
import { OperationModel, Sample } from '../../services';
export declare function createTrackingEvent<T extends AnalyticsEvent>(eventType: AnalyticsEventType): (payload: Omit<T, 'eventType'>) => T;
export interface LanguageSwitchProps {
    operation: OperationModel;
    sample: Sample;
}
export declare const languageSwitchEvent: (payload: Omit<CodeSamplesLanguageSwitchedEvent, "eventType">) => CodeSamplesLanguageSwitchedEvent;
export declare const panelToggleEvent: (payload: Omit<PanelToggleEvent, "eventType">) => PanelToggleEvent;
export declare const createLanguageSwitchEvent: ({ operation, sample, }: LanguageSwitchProps) => CodeSamplesLanguageSwitchedEvent;
export interface PanelToggleProps {
    operation: OperationModel;
    isExpanded: boolean;
    panelType: PanelToggleEvent['panelType'];
}
export declare const creatPanelToggleEvent: ({ operation, isExpanded, panelType, }: PanelToggleProps) => PanelToggleEvent;
