import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducers";
import { gameReducer } from "../reducers/gameReducer";

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  game: gameReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);