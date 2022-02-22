import { React } from "react";
import { useSelector } from "react-redux";

import { TodoItem } from "./TodoItem";

export const ListTodos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <section className="listTodos">
      <h1>Lista de ToDos: {todos.length}</h1>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={todo.id} todo={todo} index={i} />
        ))}
      </ul>
    </section>
  );
};