import React, { useState } from "react";
import "./Styles/Home.css";

function Home(props) {
  const series = [
    {
      emoji: "❄👸🏻☃🏰",
      name: "Frozen",
    },
    {
      emoji: "👧🏽🐷🐔🌊",
      name: "Moana",
    },
    {
      emoji: "👱🏻‍♂️💪🏻⛏⚡",
      name: "Thor",
    },
  ];
  const [texto, setTexto] = useState("");
  const [points, setPoints] = useState(0);
  const [lifes, setVidas] = useState(3);
  const [nivel, setNivel] = useState(0);

  const handleInput = (event) => {
    setTexto(event.target.value);
  };
  const guest = () => {
    if (series[nivel].name === texto) {
      setPoints(points + 1);
      setNivel(nivel + 1);
    } else {
      if (lifes > 0) {
        setVidas(lifes - 1);
      }
    }
  };
  return (
    <section className="body">
      {nivel > 2 ? (
        <section className="Winner">
          <h1>🎉WIN🎉</h1>
        </section>
      ) : (
        <section>
          <header className="title">
            <h1>GUESS THE MOVIE-QUIZ</h1>
          </header>
          <figure className="emojis">
            <h1>{series[nivel].emoji}</h1>
          </figure>
          <section className="container_point-life">
            <section className="lifes">
              <h1>Lifes: {lifes}</h1>
            </section>
            <section className="input-send">
              <input
                className="barra"
                type="text"
                placeholder="GUESS THE MOVIE"
                onChange={(event) => handleInput(event)}
              />
              <button className="Button" onClick={() => guest()}>
                {" "}
                SEND{" "}
              </button>
            </section>
            <section className="points">
              <h1 className="points">Points: {points}</h1>
            </section>
          </section>
        </section>
      )}
    </section>
  );
}
export default Home;
