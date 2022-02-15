import React, { useState } from "react";
import "./card.css";

function Card({
  emojis,
  nombre,
  pista,
  pasarNivel,
  nivel,
  setNivel,
  vidas,
  setVidas,
  errarNivel,
}) {
  const [respuesta, setRespuesta] = useState("");
  const [ayuda, setAyuda] = useState(false);
  const changeHandler = (e) => setRespuesta(e.target.value.toLowerCase());
  const clickHandler = () => {
    if (respuesta === nombre) {
      setNivel(nivel + 1);
      pasarNivel();
    } else {
      setVidas(vidas - 1);
      setRespuesta("")
      errarNivel();
    }
  };
  const necesitoAyuda = () => setAyuda(true);
  const reload = () => window.location.reload(true);

  return (
    <>
      {vidas > 0 ? (
        <section className="card">
          <h4>{emojis}</h4>
          <section className="answer">
            <input
              type="text"
              placeholder="Adivina la pelicula"
              onChange={changeHandler}
              value={respuesta}
            />
            <button onClick={clickHandler}>check</button>
          </section>
          {ayuda ? <p>{pista}</p> : <h3 onClick={necesitoAyuda}>?</h3>}
        </section>
      ) : (
        <section className="zeroLives">
          <p>Que mal te quedaste sin vidas.</p>
          <button onClick={reload}>Reintentar</button>
        </section>
      )}
    </>
  );
}

export default Card;
