import React from "react";
import Lifes from "./lifes";
import Score from "./score";
import { useState } from "react";
import "../App.css";

const database = {
  "the flash": "β‘π",
  "batman": "π¦π΅π€",
  "planet of the apes": "ππππππ΅",
  "sleeping beauty": "πΈππ΄",
};
const Game = () => {
  const [inputValue, setInputValue] = useState("");
  const [lifes, setLifes] = useState(3);
  const [score, setScore] = useState(0);
  const [movies, setMovies] = useState(0);
  const [emoji, setEmoji] = useState(database["the flash"]);

  console.log(emoji);

  const changeEmoji = () => {
    setEmoji(Object.values(database)[movies + 1]);
  };

  const changeMovie = () => {
    setMovies(movies + 1);
    changeEmoji();
  };

  const decreaseLifes = () => {
    setLifes(lifes - 1);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };
  const endGame = () => {
    if (lifes < 1) {
      alert("Game over, please try again π");
      setLifes(3);
      setScore(0);
      setEmoji(database["the flash"]);
    }
    if (score >= Object.keys(database).length - 1) {
      alert(`You Won!`);
    }
  };
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const checkAnswer = () => {
    let changeToLowerCase = inputValue.toLocaleLowerCase();
    if (changeToLowerCase === Object.keys(database)[movies]) {
      changeMovie();
      increaseScore();
      setInputValue("");
    } else {
      decreaseLifes();
      setInputValue("");
    }
    endGame();
  };
  return (
    <>
      <header className="header-page">
        <Lifes life={lifes} />
        <Score score={score} />
      </header>
      <main>
        <section className="game-board">
          <h2 className="title-page">GUESS THE MOVIE</h2>
          <section className="emojis">{emoji}</section>
          <section className="sendInfo">
            <input
              type="text"
              className="search-bar"
              onChange={handleInputValue}
              value={inputValue}
              placeholder="e.g: Justice League"
            />
            <button className="btn-send" onClick={checkAnswer}>
              Send
            </button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Game;
