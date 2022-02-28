import "./ToDo.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateToDoStatus } from "../../redux/ToDoSlice";

const ToDo = ({ todo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toDoClasses = `todo-row todo-${todo.priority}`;
  const [todoIsCompleted, setTodoIsCompleted] = useState(todo.status);

  const onCheckboxChange = (event) => {
    if (event.target.checked) {
      setTodoIsCompleted(true);
    } else {
      setTodoIsCompleted(false);
    }
  };

  useEffect(() => {
    dispatch(updateToDoStatus({ id: todo.id, status: todoIsCompleted }));
  }, [todoIsCompleted]);

  return (
    <section className={toDoClasses}>
      <input type="checkbox" onChange={onCheckboxChange} checked={todo.status || false} />
      <p className={todoIsCompleted ? "todo-name todo-completed" : "todo-name"} onClick={() => navigate(`todos/${todo.id}`)}>{todo.name}</p>
    </section>
  );
};

export default ToDo;
