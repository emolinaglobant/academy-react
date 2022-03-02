import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { HeaderButtons } from "./HeaderButtons";

export const HeaderGame = () => {

  const imagePath = "/assets/trivia2.jpg";

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <>
      <header className="trivia__header">
        <img src={imagePath} className="trivia__img animate__animated animate__flash" alt="image trivia" />
        <h1 className="animate__animated animate__bounce">Trivia Game</h1>
        <Link to="/rules" className="trivia__header-link">Reglas</Link>
        <button className="btn btn__end animate__animated animate__rubberBand" onClick={ handleLogout }>Salir</button>
      </header>
      <section className="trivia__header-buttons">
        <HeaderButtons />
      </section>
    </>
  );
};