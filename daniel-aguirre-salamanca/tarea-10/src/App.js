import "./App.css";
import { Lifes, Game, Points } from "./components";
import { useState } from "react";
import {gameLifes} from "@setup";

function App() {
  //states
  const [lifes, setLifes] = useState(gameLifes);
  const [points, setPoints] = useState(0);

  //handlers
  const handlePlayerStatus = (guessed) => {
    guessed ? setPoints(points + 1) : setLifes(lifes - 1);
  }

  return (
    <main>
      <Lifes lifes={lifes} />
      <Game
        onPlayerStatusChange={handlePlayerStatus}
        onReset={() => {setPoints(0); setLifes(gameLifes)}}
        lifes={lifes}
        points = {points}
      />
      <Points points={points} />
    </main>
  );
}

export default App;
