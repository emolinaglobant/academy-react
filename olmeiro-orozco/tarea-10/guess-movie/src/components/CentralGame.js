import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Proptypes from "prop-types";

import { quizz } from "../data/quizz";
import { HeaderGame } from "./HeaderGame";

export const CentralGame = ({ lives, points, numberQuestion }) => {
  const [questionGame, setQuestion] = useState(numberQuestion);
  const [title, setTitle] = useState("");
  const [pointsGame, setPointsGame] = useState(points);
  const [livesGame, setlivesGame] = useState(lives);

  const randomQuestion = (quizz) => {
    let randCue = quizz[Math.floor(Math.random() * quizz.length)];
    setQuestion(randCue.cue);
    setTitle(randCue.title);
  };

  const setLives = () => {
    setlivesGame(livesGame - 1);
  };

  const setPoints = () => {
    setPointsGame(pointsGame + 1);
  };

  const [inputValue, setInputValue] = useState({
    nameMovie: "",
  });

  const { nameMovie } = inputValue;

  const handleInputChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    randomQuestion(quizz);
  }, []);

  useEffect(() => {
    if (livesGame === 0) {
      setPointsGame(0);
      setlivesGame(3);
      randomQuestion(quizz);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Try it again!",
      });
    } else if (pointsGame === 3) {
      setPointsGame(0);
      setlivesGame(3);
      randomQuestion(quizz);
      Swal.fire("You won, keep it up!");
    }
  }, [livesGame, pointsGame]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.includes(nameMovie) && nameMovie.length !== 0) {
      setPoints();
      randomQuestion(quizz);
      handleReset();
    } else {
      setLives();
      handleReset();
    }
  };

  const handleReset = () => {
    document.querySelectorAll("input").value = "";
    setInputValue({
      nameMovie: "",
    });
  };

  return (
    <main>
      <HeaderGame livesGame={livesGame} pointsGame={pointsGame} />
      <header>
        <h1>Guess the movie</h1>
        <p value={inputValue}></p>
      </header>
      <section>{questionGame}</section>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="inputNameMovie"
          type="text"
          name="nameMovie"
          value={nameMovie}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </main>
  );
};

CentralGame.prototypes = {
  lives: Proptypes.number.isRequired,
  points: Proptypes.number.isRequired,
  numberQuestion: Proptypes.number.isRequired,
};
