import "./App.css";
import React, { useState } from "react";
import ToDoDetail from './components/ToDoDetail/ToDoDetail';
import { Routes , Route } from "react-router-dom";
import Main from "./components/Main/Main";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    if (todo.name) {
      setTodos([...todos, todo]);
    }
  };

  const updateToDoStatus = (toDoStatus, toDoPosition) => {
    todos[toDoPosition].status = toDoStatus;
  }

  return (
    <main className="todo-app">
      <Routes>
        <Route path="/" element={<Main addToDo={addToDo} updateToDoStatus={updateToDoStatus} todos={todos} />} />
        <Route path="/todos/:id" element={<ToDoDetail todos={todos} />} />
      </Routes>
    </main>
  );
};

export default App;
