import "./Main.css";
import React from "react";
import AddToDo from "../../containers/AddToDo/AddToDo";
import ToDoList from "../../containers/ToDoList/ToDoList";

const Main = (props) => {
  return (
    <article>
      <h1>ToDo List</h1>
      <AddToDo addToDo={props.addToDo} id={props.todos.length + 1 || 1} />
      <ToDoList todos={props.todos} updateToDoStatus={props.updateToDoStatus} />
    </article>
  );
};

export default Main;
