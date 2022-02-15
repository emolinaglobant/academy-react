import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz3 = ({ puntos, setpuntos, vidas, setvidas }) => {
  const quiz = "¿Cual es la Pelicula?";
  const answer = "Batman";

  const navigate = useNavigate();

  const [select, setSelect] = useState();

  const verificar = () => {
    if (select == answer) {
      setpuntos(puntos + 100);
      navigate("/fourd-Quiz");
    } else if (vidas == 0) {
      alert("La Pelicula es:" + "" + answer);
      setpuntos(0);
      setvidas(3);
      navigate("/lost");
    } else {
      navigate("/fourd-Quiz");
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
          <span>🦇🦸‍♂️🦇</span>
        </h1>
        <section className="container-box">
          <section onClick={() => responder(1)} className="box">
            <h3>A</h3>
            <p id="opcion1">Dracula</p>
          </section>
          <section className="box" onClick={() => responder(2)}>
            <h3>B</h3>
            <p id="opcion2">Crepusculo</p>
          </section>
          <section className="box" onClick={() => responder(3)}>
            <h3>C</h3>
            <p id="opcion3">Batman</p>
          </section>
          <section className="box" onClick={() => responder(4)}>
            <h3>D</h3>
            <p id="opcion4">Hombre Araña</p>
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

export default Quiz3;
