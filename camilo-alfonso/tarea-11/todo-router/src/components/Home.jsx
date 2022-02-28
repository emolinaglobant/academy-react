import React, { useState } from "react";

import TasksList from "./TasksList";
import FormTask from "./FormTask";

import "../assets/css/home.css";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <main className="home">
      <h1>Todo-Router</h1>
      <FormTask
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TasksList todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default Home;
