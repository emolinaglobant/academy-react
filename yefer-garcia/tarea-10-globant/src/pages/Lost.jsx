import React from "react";
import { Link } from "react-router-dom";

const Lost = () => {
  return (
    <main className="centrado">
      <article className="welcome">
        <img src="/img/losing.svg" alt="" width={270} height={270} />
        <h1>Que Mal..!!</h1>
        <h2>Mas suerte para la proxima.</h2>
        <Link to="/">
          <button className="btn-play">Reintentar</button>
        </Link>
      </article>
    </main>
  );
};

export default Lost;
