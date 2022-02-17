import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="center">
      <article className="welcome">
        <img src="/img/welcome.svg" alt="" width={270} height={270} />
        <h1>Bienvenido A Quiz Game</h1>
        <Link to="/quiz">
          <button className="btn-play">Play Game</button>
        </Link>
      </article>
    </main>
  );
};

export default Home;
