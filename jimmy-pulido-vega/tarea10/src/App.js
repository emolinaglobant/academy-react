import "./App.css";
import peliculas from "./data/peliculas";
import Game from "./componets/game/game";
import { useState } from "react";

function App() {
  const [nivel, setNivel] = useState(0);
  const [vidas, setVidas] = useState(3);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
  const [respuestaIncorrecta, setRespuestaIncorrecta] = useState(false);
  const pasarNivel = () => {
    setRespuestaCorrecta(true);
    setTimeout(() => {
      setRespuestaCorrecta(false);
    }, 1100);
  };
  const errarNivel = () => {
    setRespuestaIncorrecta(true);
    setTimeout(() => {
      setRespuestaIncorrecta(false);
    }, 1500);
  };

  return (
    <div className="App">
      {nivel < 10 ? (
        <Game
          peliculas={peliculas}
          nivel={nivel}
          setNivel={setNivel}
          vidas={vidas}
          setVidas={setVidas}
          respuestaCorrecta={respuestaCorrecta}
          pasarNivel={pasarNivel}
          respuestaIncorrecta={respuestaIncorrecta}
          errarNivel={errarNivel}
        />
      ) : (
        <section className="win">
          <h2>🎉🍾 Felicidades Ganaste! 🍾🎉</h2>
        </section>
      )}
    </div>
  );
}

export default App;
