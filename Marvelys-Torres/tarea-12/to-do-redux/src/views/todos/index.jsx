import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  const { todosList } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <main className="main-container">
      <section className="todo-section">
        <h1>To-Do's</h1>
        <article>
          {todosList?.map((todo, i) => (
            <section className="todo-list" key={todo.id}>
              <p onClick={() => navigate(`/${todo.id}`)}>
                {i + 1}. {todo.description}
              </p>
              <button
                className="delete-todo"
                onClick={() => handleDelete(todo.id)}
              >
                X
              </button>
            </section>
          ))}
        </article>
        <Link to="/new">
          <button className="new-todo">+</button>
        </Link>
      </section>
    </main>
  );
};
