import React from "react";
import Card from "../card/card";
import "./game.css";

function Game({
  movies,
  level,
  setLevel,
  lives,
  setLives,
  rightAnswer,
  nextLevel,
  wrongAnswer,
  failLevel
}) {

  const showLives = () => {
    let result = ""
    for(let i = 0; i < lives; i++){
      result += "🤍"
    }
    return result
  }

  return (
    <section className="Game">
      <section className="info">
        {lives !== 0 ? <p>{showLives()}</p> : <p>sin vidas</p>}
        <p>nivel: {level + 1}</p>
      </section>
      {rightAnswer ? (
        <section className="succesMesage">
          <p>🎉 Correctro! 🎉<br></br> pasate al seguiente nivel.</p>
        </section>
      ) : (
        <Card
          {...movies[level]}
          level={level}
          setLevel={setLevel}
          lives={lives}
          setLives={setLives}
          nextLevel={nextLevel}
          failLevel={failLevel}
        />
      )}
      {wrongAnswer && <p className="fail">Fallaste! pierdes una vida.</p>}
    </section>
  );
}

export default Game;
