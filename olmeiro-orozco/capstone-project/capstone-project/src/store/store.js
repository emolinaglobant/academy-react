import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { uiReducer } from "../reducers/uiReducers";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
