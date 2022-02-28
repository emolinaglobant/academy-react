import "./App.css";
import React from "react";
import ToDoDetail from './components/ToDoDetail/ToDoDetail';
import { Routes , Route } from "react-router-dom";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <main className="todo-app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todos/:id" element={<ToDoDetail />} />
      </Routes>
    </main>
  );
};

export default App;
