import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="nav__link nav__link--home">
        <i className="fa-solid fa-house"></i> Home{" "}
      </Link>
      <Link to="/create" className="nav__link nav__link--create">
        {" "}
        <i className="fa-solid fa-arrow-right"></i>&nbsp;Create a new todo{" "}
      </Link>
    </header>
  );
};
export default Header;
