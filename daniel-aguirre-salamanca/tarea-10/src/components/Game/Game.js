import "./Game.css";
import { useEffect, useState } from "react";
import { gameMaxPoints, database } from "@setup";
import { getRandomMovie, dropMovie } from "@helpers";
import GameForm from "./GameForm";
import GameResume from "./GameResume";

const Game = ({ lifes, points, onPlayerStatusChange, onReset }) => {
  //states
  const [movies, setMovies] = useState(database);
  const [currentMovie, setCurrentMovie] = useState(getRandomMovie(database));
  const [showResume, setShowResume] = useState(null);

  //useEffects
  useEffect(() => {
    const isWinner = points == gameMaxPoints;
    if (lifes == 0 || isWinner) {
      setMovies(database);
      setCurrentMovie(getRandomMovie(database));
      isWinner
        ? setShowResume("Felicidades, has ganado!")
        : setShowResume("Has perdido :(");
    }
  }, [lifes, points]);

  //handlers
  const handleChangeMovies = (isGuessedCorrect) => {
    onPlayerStatusChange(isGuessedCorrect);
    if (isGuessedCorrect) {
      const newMovies = dropMovie(currentMovie, movies);
      setCurrentMovie(getRandomMovie(newMovies));
      setMovies(newMovies);
    }
  };
  const handleReset = () => {
    onReset();
    setShowResume(null);
  };

  return (
    <article className="game">
      <h1 className="game__title">Adivina la película</h1>
      <h2 className="game__movie">{currentMovie.emoji}</h2>
      <GameForm
        currentMovie={currentMovie}
        onChangeMovies={handleChangeMovies}
      />
      {showResume && <GameResume onReset={handleReset} message={showResume} />}
    </article>
  );
};

export default Game;
