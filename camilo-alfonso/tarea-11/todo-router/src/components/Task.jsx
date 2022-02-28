import React from "react";
import { useNavigate } from "react-router-dom";

import "../assets/css/task.css";

const Task = ({ text, todo, todos, setTodos }) => {
  const buttonDeleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const buttonCompleteHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const navigate = useNavigate();

  return (
    <article className="task">
      <section className="task__header">
        <button
          onClick={buttonDeleteHandler}
          className="task__header--icon"
        ></button>
        <button
          className="task__header--icon"
          onClick={() => navigate(`/${todo.id}`)}
        ></button>
        <button
          onClick={buttonCompleteHandler}
          className="task__header--icon"
        ></button>
      </section>
      <li className="task__item">
        {text} {todo.completed ? <span>✅</span> : ""}
      </li>
      <section></section>
    </article>
  );
};

export default Task;
