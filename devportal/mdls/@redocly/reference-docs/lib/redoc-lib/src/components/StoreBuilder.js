"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useStore=exports.StoreContext=exports.StoreConsumer=exports.StoreProvider=void 0;var react_1=require("react"),StoreContext=(0,react_1.createContext)(void 0);exports.StoreContext=StoreContext;var Provider=StoreContext.Provider,Consumer=StoreContext.Consumer;function useStore(){return(0,react_1.useContext)(StoreContext)}exports.StoreProvider=Provider,exports.StoreConsumer=Consumer,exports.useStore=useStore;
//# sourceMappingURL=StoreBuilder.js.map