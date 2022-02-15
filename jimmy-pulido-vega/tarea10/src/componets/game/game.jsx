import React from "react";
import Card from "../card/card";
import "./game.css";

function Game({
  peliculas,
  nivel,
  setNivel,
  vidas,
  setVidas,
  respuestaCorrecta,
  pasarNivel,
  respuestaIncorrecta,
  errarNivel,
}) {

  const lives = () => {
    let result = ""
    for(let i = 0; i < vidas; i++){
      result += "🤍"
    }
    return result
  }

  return (
    <section className="Game">
      <section className="info">
        {vidas !== 0 ? <p>{lives()}</p> : <p>sin vidas</p>}
        <p>nivel: {nivel + 1}</p>
      </section>
      {respuestaCorrecta ? (
        <section className="succesMesage">
          <p>🎉 Correctro! 🎉<br></br> pasate al seguiente nivel.</p>
        </section>
      ) : (
        <Card
          {...peliculas[nivel]}
          pasarNivel={pasarNivel}
          nivel={nivel}
          setNivel={setNivel}
          vidas={vidas}
          setVidas={setVidas}
          errarNivel={errarNivel}
        />
      )}
      {respuestaIncorrecta && <p className="fail">Fallaste! pierdes una vida.</p>}
    </section>
  );
}

export default Game;
