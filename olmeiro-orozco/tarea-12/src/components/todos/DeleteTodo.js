import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Proptypes from "prop-types";

import { deleteTodo } from "../../redux/todoSlice";

export const DeleteTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  return (
    <section className="deleteTodo">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <p className={`${todo.done && "complete"}`}>
              {index + 1}. {todo.desc}
            </p>
            <button
              className="btnDelete"
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              Borrar ToDo
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

DeleteTodo.prototypes = {
  todo: Proptypes.object.isRequired,
  handleDelete: Proptypes.func.isRequired,
};