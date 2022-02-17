import React from "react";
import { Link } from "react-router-dom";

const Lost = ({points}) => {
  
  return (
    <main className="center">
      <article className="welcome">
        <img src="/img/gameover.svg" alt="" width={270} height={270} />
        <h1>Game Over</h1>
        <h2>Tus puntos: {points}pts </h2>
        <Link to="/">
          <button className="btn-play">Reintentar</button>
        </Link>
      </article>
    </main>
  );
};

export default Lost;
