import "./MovieInput.css";
import React, {  useState } from "react";

const MovieInput = (props) => {
  const [playerAnswer, setPlayerAnswer] = useState("");

  const handleClick = () => {
    props.validateAnswer(playerAnswer);
    setPlayerAnswer("");
  }

  const updatePlayerAnswer = (event) => {
    setPlayerAnswer(event.target.value);
  }

  return (
    <section className="movie-container">
      <p className="game-title">Guess the movie</p>
      <p className="emojis">{props.movie.emojis}</p>
      <section className="input-container">
        <input type="text" name="movie-name" id="movie-name" value={playerAnswer} onChange={updatePlayerAnswer} />
        <button className="send-btn" onClick={handleClick}>
          Send
        </button>
      </section>
    </section>
  );
};

export default MovieInput;
