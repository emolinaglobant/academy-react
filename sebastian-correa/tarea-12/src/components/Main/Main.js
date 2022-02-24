import "./Main.css";
import React from "react";
import AddToDo from "../../containers/AddToDo/AddToDo";
import ToDoList from "../../containers/ToDoList/ToDoList";

const Main = () => {
  return (
    <article>
      <h1>ToDo List</h1>
      <AddToDo />
      <ToDoList />
    </article>
  );
};

export default Main;
