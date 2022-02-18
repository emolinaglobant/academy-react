import "./App.css";
import movies from "./data/movies";
import Game from "./componets/game/game";
import { useState } from "react";

function App() {
  const [level, setLevel] = useState(0);
  const [lives, setLives] = useState(3);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const nextLevel = () => {
    setRightAnswer(true);
    setTimeout(() => {
      setRightAnswer(false);
    }, 1100);
  };
  const failLevel = () => {
    setWrongAnswer(true);
    setTimeout(() => {
      setWrongAnswer(false);
    }, 1500);
  };

  return (
    <div className="App">
      {level < 10 ? (
        <Game
          movies={movies}
          level={level}
          setLevel={setLevel}
          lives={lives}
          setLives={setLives}
          rightAnswer={rightAnswer}
          nextLevel={nextLevel}
          wrongAnswer={wrongAnswer}
          failLevel={failLevel}
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
