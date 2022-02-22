import { React, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../navbar/NavBar";

import { CreateTodo } from "../todos/CreateTodo";
import { DeleteTodo } from "../todos/DeleteTodo";
import { ListTodos } from "../todos/ListTodos";

const DashboardRoutes = () => {

  return (
    <>
      <NavBar />
        <Routes>
          <Route
            path="/"
            element={<CreateTodo />}
          />
          <Route path="listTodos" element={<ListTodos />} />
          <Route
            path="deleteTodo"
            element={<DeleteTodo />}
          />
        </Routes>
    </>
  );
};

export default DashboardRoutes;