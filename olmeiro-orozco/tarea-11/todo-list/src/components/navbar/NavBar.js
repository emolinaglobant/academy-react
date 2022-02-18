import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav>
      <Link to="/">Crear ToDo</Link>
      <Link to="/listTodos">Lista Todos</Link>
      <Link to="/deleteTodo">Borrar Todo</Link>
      <Link className="logout" to="/login" onClick={handleLogout}>
        Salir
      </Link>
    </nav>
  );
};
