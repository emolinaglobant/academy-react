import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setpuntos, setvidas }) => {
  const location = useLocation();

  const restablecer = () => {
    setpuntos(0);
    setvidas(3);
  };

  return (
    <nav>
      <h1>Quiz Time ⏳</h1>
      {location.pathname == "/" ? (
        ""
      ) : (
        <Link to="/" className="opciones" onClick={() => restablecer()}>
          Home
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
