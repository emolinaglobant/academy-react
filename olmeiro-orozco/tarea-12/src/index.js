import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./components/routers/AppRouter";

import store from "./redux/store";
import { Provider } from 'react-redux';

import "../src/styles/styles.css";

ReactDOM.render(
   <Provider store={store}>
      <AppRouter />
   </Provider>,
  document.getElementById("root")
);