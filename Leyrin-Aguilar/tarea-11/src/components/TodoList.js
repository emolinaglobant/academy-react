import { Link } from "react-router-dom";
import Todo from "./Todo";
const TodoList = ({ data, onDelete }) => {
  const emptyMessage = (
    <Todo className="todo__item--empty">
      {" "}
      You have 0 todos &nbsp;
      <Link to="/create" className="nav__link nav__link--create">
        <i className="fa-solid fa-arrow-right" />
        &nbsp;Create your first one!
      </Link>
    </Todo>
  );
  return (
    <ul className="todo">
      {data.length > 0
        ? data.map((item, index) => (
            <Todo key={index} onDelete={onDelete} index={index}>
              {" "}
              {item}{" "}
            </Todo>
          ))
        : emptyMessage}
    </ul>
  );
};
export default TodoList;
