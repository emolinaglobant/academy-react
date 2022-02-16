import "./Game.css";
import GameHeader from "../../components/GameHeader/GameHeader";
import MovieInput from "../MovieInput/MovieInput";
import React, { useEffect, useState } from "react";

const movies = [
  { emojis: "🚗💨😡", title: "fast and furious" },
  { emojis: "🦁👑", title: "the lion king" },
  { emojis: "🔎🐟", title: "finding dory" },
  { emojis: "🚢🧊☠️", title: "titanic" },
  { emojis: "🕷️🤷🏻‍♂️➡️🧑🏻🕸️", title: "spiderman" },
  { emojis: "🐧🎶🦶", title: "happy feet" },
  { emojis: "🐺🗽💰", title: "the wolf of wall street" },
  { emojis: "👦🏻🍫🏭", title: "charlie and the chocolate factory" },
  { emojis: "🙍🏻‍♂️👐🏻✂️", title: "edward scissorhands" },
  { emojis: "🐢🐢🐀🐢🐢", title: "teenage mutant ninja turtles" },
];

const Game = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const resetGame = () => {
    if (gameWon) {
      alert("Congratulations, you won!");
    } else {
      alert("You lost, try again.")
    }
    setCurrentMovieIndex(0);
    setLives(3);
    setPoints(0);
    setGameLost(false);
    setGameWon(false);
  }

  
  const validateAnswer = (inputData) => {
    let playerAnswer = inputData.toLowerCase();
    if (playerAnswer === movies[currentMovieIndex].title) {
      setCurrentMovieIndex(currentMovieIndex < movies.length - 1? currentMovieIndex + 1 : currentMovieIndex);
      setPoints(points + 1);
    } else {
      setCurrentMovieIndex(currentMovieIndex + 1);
      setLives(lives > 0? lives - 1 : 0);
    }
  }
  
  useEffect(() => {
    if (points === (movies.length - (3 - lives))) {
      setGameWon(true);
    } else if (lives === 0) {
      setGameLost(true);
    }
  }, [lives, points]);
  
  useEffect(() => {
    if (gameLost || gameWon) {
      resetGame();
    }
  }, [gameWon, gameLost]);

  return (
    <main className="game">
      <article>
      <GameHeader lives={lives} points={points}></GameHeader>
      <MovieInput movie={movies[currentMovieIndex]} validateAnswer={validateAnswer}></MovieInput>
      </article>
    </main>
  );
}

export default Game;
