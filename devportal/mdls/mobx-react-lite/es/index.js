import "./utils/assertEnvironment";
import { unstable_batchedUpdates as batch } from "./utils/reactBatchedUpdates";
import { observerBatching } from "./utils/observerBatching";
import { useDeprecated } from "./utils/utils";
import { useObserver as useObserverOriginal } from "./useObserver";
import { enableStaticRendering } from "./staticRendering";
observerBatching(batch);
export { isUsingStaticRendering, enableStaticRendering } from "./staticRendering";
export { observer } from "./observer";
export { Observer } from "./ObserverComponent";
export { useLocalObservable } from "./useLocalObservable";
export { useLocalStore } from "./useLocalStore";
export { useAsObservableSource } from "./useAsObservableSource";
export { resetCleanupScheduleForTests as clearTimers } from "./utils/reactionCleanupTracking";
export function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if ("production" !== process.env.NODE_ENV) {
        useDeprecated("[mobx-react-lite] 'useObserver(fn)' is deprecated. Use `<Observer>{fn}</Observer>` instead, or wrap the entire component in `observer`.");
    }
    return useObserverOriginal(fn, baseComponentName);
}
export { isObserverBatched, observerBatching } from "./utils/observerBatching";
export function useStaticRendering(enable) {
    if ("production" !== process.env.NODE_ENV) {
        console.warn("[mobx-react-lite] 'useStaticRendering' is deprecated, use 'enableStaticRendering' instead");
    }
    enableStaticRendering(enable);
}
//# sourceMappingURL=index.js.map