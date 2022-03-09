import React from "react";
import "./navButton.scss";
import { Link } from "react-router-dom";

function NavButton({ route }) {
  return (
    <Link to={`/${route}`}>
      <div className="navBorder">
        <section className="navButton">{route}</section>
      </div>
    </Link>
  );
}

export default NavButton;
