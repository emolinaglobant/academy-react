import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz5 = ({ puntos, setpuntos, vidas, setvidas }) => {
  const quiz = "¿Cual es la Pelicula?";
  const answer = "Mago de Oz";

  const navigate = useNavigate();

  const [select, setSelect] = useState();

  const verificar = () => {
    if (select == answer) {
      setpuntos(puntos + 100);
      navigate("/Last-Quiz");
    } else if (vidas == 0) {
      alert("La Pelicula es:" + "" + answer);
      setpuntos(0);
      setvidas(3);
      navigate("/lost");
    } else {
      navigate("/last-Quiz");
      setvidas(vidas - 1);
    }
  };

  const responder = (num) => {
    const selecccion = document.getElementById(`opcion${num}`);
    setSelect(selecccion.innerText);
  };

  return (
    <main className="centrado">
      <aside className="points">
        <section>
          <p id="puntos">
            Puntos: <span className="items-game">{puntos}</span>Pts
          </p>
        </section>
        <section>
          <p className="lifes">
            Vidas:{" "}
            <span className="items-game">
              {vidas} <i class="bi bi-heart-fill heart"></i>
            </span>
          </p>
        </section>
      </aside>
      <article className="quiz-box">
        <h1>
          ¿Cual es la Pelicula?
          <span>🧙‍♂🤖👩👴🦁👨‍🌾</span>
        </h1>
        <section className="container-box">
          <section onClick={() => responder(1)} className="box">
            <h3>A</h3>
            <p id="opcion1">Mago Merlin</p>
          </section>
          <section className="box" onClick={() => responder(2)}>
            <h3>B</h3>
            <p id="opcion2">Sherk 3</p>
          </section>
          <section className="box" onClick={() => responder(3)}>
            <h3>C</h3>
            <p id="opcion3">Mundo Magico</p>
          </section>
          <section className="box" onClick={() => responder(4)}>
            <h3>D</h3>
            <p id="opcion4">Mago de Oz</p>
          </section>
        </section>
        <button
          className="verificar"
          onClick={() => {
            verificar();
          }}
        >
          Verificar
        </button>
      </article>
    </main>
  );
};

export default Quiz5;
