import{__assign}from"tslib";import{AnalyticsEventType}from"../../../../services/store-types";export function createTrackingEvent(e){return function(t){return __assign(__assign({},t),{eventType:e})}}export var languageSwitchEvent=createTrackingEvent(AnalyticsEventType.CodeSampleLanguageSwitched);export var panelToggleEvent=createTrackingEvent(AnalyticsEventType.PanelToggle);export var createLanguageSwitchEvent=function(e){var t=e.operation,a=e.sample,n=a.lang,r=a.label;return languageSwitchEvent({resource:"Redocly_CodeSample",action:"LanguageSwitched",operationId:t.id,operationPath:t.path,operationHttpVerb:t.httpVerb,operationSummary:t.name,label:r||n,lang:n})};export var creatPanelToggleEvent=function(e){var t=e.operation,a=e.isExpanded,n=e.panelType;return panelToggleEvent({resource:"Redocly_Operation",action:"PanelToggled",operationId:t.id,operationPath:t.path,operationHttpVerb:t.httpVerb,operationSummary:t.name,panelType:n,state:a?"expanded":"collapsed"})};
//# sourceMappingURL=languageSwitchEvent.js.map