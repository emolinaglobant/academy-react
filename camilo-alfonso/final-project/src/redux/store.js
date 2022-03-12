import { createStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
