import { React, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../navbar/NavBar";

import { CreateTodo } from "../todos/CreateTodo";
import { DeleteTodo } from "../todos/DeleteTodo";
import { ListTodos } from "../todos/ListTodos";

import { todoReducer } from "../todos/todoReducer";

const init = () => {
  let localStore = null;
  if (typeof window !== "undefined") {
    localStore = localStorage.getItem("todos");
  }
  return JSON.parse(localStore) || [];
};

const DashboardRoutes = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<CreateTodo handleAddTodo={handleAddTodo} />}
        />
        <Route path="listTodos" element={<ListTodos todos={todos} />} />
        <Route
          path="deleteTodo"
          element={<DeleteTodo todos={todos} handleDelete={handleDelete} />}
        />
      </Routes>
    </>
  );
};

export default DashboardRoutes;