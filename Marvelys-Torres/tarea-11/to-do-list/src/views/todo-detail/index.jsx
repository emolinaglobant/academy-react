import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";

export const TodoDetail = () => {
  const { todos } = useContext(TodoContext);
  const { id } = useParams();

  const todo = todos?.find((todo) => todo.id === +id);

  return (
    <main className="main-detail">
      <Link to="/">Back to main</Link>
      {todo && (
        <>
          <h2>To-Do # {todo.id}</h2>
          <p>{todo.description}</p>
        </>
      )}
    </main>
  );
};
