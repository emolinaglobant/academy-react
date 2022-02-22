import "./ToDo.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ToDo = ({ todo, updateToDoStatus }) => {
  const navigate = useNavigate();
  const toDoClasses = `todo-row todo-${todo.priority}`;
  const [todoIsCompleted, setTodoIsCompleted] = useState(false);

  const onCheckboxChange = (event) => {
    if (event.target.checked) {
      setTodoIsCompleted(true);
    } else {
      setTodoIsCompleted(false);
    }
  };

  useEffect(() => {
    updateToDoStatus(todoIsCompleted, todo.id - 1);
  }, [todoIsCompleted]);

  return (
    <section className={toDoClasses}>
      <input type="checkbox" onChange={onCheckboxChange} />
      <p className={todoIsCompleted ? "todo-name todo-completed" : "todo-name"} onClick={() => navigate(`todos/${todo.id}`)}>{todo.name}</p>
    </section>
  );
};

export default ToDo;
