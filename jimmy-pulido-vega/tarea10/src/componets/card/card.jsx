import React, { useState } from "react";
import "./card.css";

function Card({
  emojis,
  name,
  clue,
  level,
  setLevel,
  lives,
  setLives,
  nextLevel,
  failLevel
}) {
  const [answer, setAnswer] = useState("");
  const [help, setHelp] = useState(false);
  const changeHandler = (e) => setAnswer(e.target.value.toLowerCase());
  const clickHandler = () => {
    if (answer === name) {
      setLevel(level + 1);
      nextLevel();
    } else {
      setLives(lives - 1);
      setAnswer("")
      failLevel();
    }
  };
  const needHelp = () => setHelp(true);
  const reload = () => window.location.reload(true);

  return (
    <>
      {lives > 0 ? (
        <section className="card">
          <h4>{emojis}</h4>
          <section className="answer">
            <input
              type="text"
              placeholder="Adivina la pelicula"
              onChange={changeHandler}
              value={answer}
            />
            <button onClick={clickHandler}>check</button>
          </section>
          {help ? <p>{clue}</p> : <h3 onClick={needHelp}>?</h3>}
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
