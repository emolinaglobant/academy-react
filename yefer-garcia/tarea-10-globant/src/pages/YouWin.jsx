import React from "react";
import { Link } from "react-router-dom";

const YouWin = ({ puntos, setpuntos, setvidas }) => {
  const restablecer = () => {
    setpuntos(0);
    setvidas(3);
  };
  return (
    <main className="centrado">
      <article className="welcome">
        <img src="/img/felicidades.svg" alt="" width={270} height={270} />
        <h1>FELICIDADES!!</h1>
        <h2>Tus Puntos: {puntos}pts</h2>
        <Link to="/">
          <button className="btn-play" onClick={() => restablecer()}>
            Reintentar
          </button>
        </Link>
      </article>
    </main>
  );
};

export default YouWin;
