/// <reference types="react" />
import { ProStore } from '../../../services/ProStore';
declare const StoreContext: import("react").Context<ProStore | undefined>;
declare const Provider: import("react").Provider<ProStore | undefined>, Consumer: import("react").Consumer<ProStore | undefined>;
export { Provider as StoreProvider, Consumer as StoreConsumer, StoreContext };
export declare function useStore(): ProStore | undefined;
