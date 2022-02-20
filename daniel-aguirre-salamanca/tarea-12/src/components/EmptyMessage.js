import { Link } from "react-router-dom";
const EmptyMessage = () => {
  return (
    <li className="todo__item todo__item--empty">
      You have 0 todos &nbsp;
      <Link to="/create" className="nav__link nav__link--create">
        <i className="fa-solid fa-arrow-right" />
        &nbsp;Create your first one!
      </Link>
    </li>
  );
};
export default EmptyMessage;
