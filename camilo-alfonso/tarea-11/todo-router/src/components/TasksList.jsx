import React from "react";
import { Outlet } from "react-router-dom";

import Task from "./Task";

import "../assets/css/tasksList.css";

const TasksList = ({ todos, setTodos }) => {
  return (
    <main className="taskList">
      <>
        <ul className="taskList__content">
          {todos.map((todo) => (
            <Task
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              todo={todo}
            />
          ))}
        </ul>
        <section>
          <Outlet />
        </section>
      </>
    </main>
  );
};

export default TasksList;
