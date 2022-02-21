import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Todos } from "./views/todos";
import { TodoDetail } from "./views/todo-detail";
import { TodoNew } from "./views/todoNew";
import { TodoProvider } from "./context/TodoContext";

ReactDOM.render(
  <TodoProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/:id" element={<TodoDetail />}></Route>
        <Route path="/new" element={<TodoNew />}></Route>
      </Routes>
    </BrowserRouter>
  </TodoProvider>,
  document.getElementById("root")
);

reportWebVitals();
