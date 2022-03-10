import React from "react";
import Lifes from "./Lifes";
import Score from "./Score";
import database from "../utils/database.json"
import { useState } from "react";

const GameForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [lifes, setLifes] = useState(3);
  const [score, setScore] = useState(0);
  const [movies, setMovies] = useState(0);
  const [emojis, setEmojis] = useState(database["jurassic park"]);

  const changeEmojis = () => {
    setEmojis(Object.values(database)[movies + 1]);
  };

  const changeMovie = () => {
    setMovies(movies + 1);
    changeEmojis();
  };

  const decreaseLifes = () => {
    setLifes(lifes - 1);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  const finishGame = () => {
    if (lifes < 1) {
      alert("Game over, try again");
      setLifes(3);
      setScore(0);
      setEmojis(database["jurassic park"]);
    }
    if (score >= Object.keys(database).length - 1) {
      alert('You Win!');  
    }
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const checkAnswer = () => {
    let toLowerCase = inputValue.toLocaleLowerCase();

    if (toLowerCase === Object.keys(database)[movies]) {
      changeMovie();
      increaseScore();
      setInputValue("");
    } else {
      decreaseLifes();
      setInputValue("");
    }
    finishGame();
  };

  return (
    <section>
      <header className="header">
        <Lifes life={ lifes } />
        <Score score={ score }/>
      </header>
      <h1>Guess the Movie</h1>
      <section className="emojis-section">{ emojis }</section>
      <section className="form-section">
        <input
          type="text"
          className="movie-input"
          onChange={handleInputValue}
          value={inputValue}
          placeholder="Example: Forrest Gump"
        />
        <button className="check-btn" onClick={checkAnswer}>
          Check
        </button>
      </section>
    </section>
  )
}

export default GameForm;