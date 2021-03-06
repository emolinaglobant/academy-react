import "./Game.css";
import GameHeader from "../../components/GameHeader/GameHeader";
import MovieInput from "../MovieInput/MovieInput";
import React, { useEffect, useState } from "react";

const movies = [
  { emojis: "ππ¨π‘", title: "fast and furious" },
  { emojis: "π¦π", title: "the lion king" },
  { emojis: "ππ", title: "finding dory" },
  { emojis: "π’π§β οΈ", title: "titanic" },
  { emojis: "π·οΈπ€·π»ββοΈβ‘οΈπ§π»πΈοΈ", title: "spiderman" },
  { emojis: "π§πΆπ¦Ά", title: "happy feet" },
  { emojis: "πΊπ½π°", title: "the wolf of wall street" },
  { emojis: "π¦π»π«π­", title: "charlie and the chocolate factory" },
  { emojis: "ππ»ββοΈππ»βοΈ", title: "edward scissorhands" },
  { emojis: "π’π’ππ’π’", title: "teenage mutant ninja turtles" },
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
