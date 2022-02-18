import React from "react";
import Proptypes from 'prop-types'

export const DeleteTodo = ({ todos, handleDelete }) => {
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