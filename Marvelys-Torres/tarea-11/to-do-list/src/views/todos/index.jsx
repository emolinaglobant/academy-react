import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";

export const Todos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <main className="main-section">
      <h1>To-Do's</h1>
      <article>
        {todos.map((todo, i) => (
          <Link key={todo.id} to={`${todo.id}`}>
            <section>
              <p>
                {i + 1}. {todo.description}
              </p>
            </section>
          </Link>
        ))}
      </article>
      <Link to="/new">
        <button>+</button>
      </Link>
    </main>
  );
};
