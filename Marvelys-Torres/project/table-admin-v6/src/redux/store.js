import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  /* preloadedState, */ devToolsEnhancer()
  // Specify custom devTools options
);

export default store;
