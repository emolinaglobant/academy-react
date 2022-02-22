import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Todos } from "./views/todos";
import { TodoDetail } from "./views/todo-detail";
import { TodoNew } from "./views/todoNew";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/:id" element={<TodoDetail />}></Route>
        <Route path="/new" element={<TodoNew />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
