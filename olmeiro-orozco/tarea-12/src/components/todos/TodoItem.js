import React from "react";

export const TodoItem = ({ todo, index }) => {
  return (
    <li key={todo.id}>
      <p>
        {index + 1}. {todo.desc}
      </p>
    </li>
  );
};