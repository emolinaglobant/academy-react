import React, { useState, useEffect } from "react";
import { movies } from "../data/movies";

export const Game = () => {
  const [text, setText] = useState("");
  const [gameIndex, setGameIndex] = useState(0);
  const [level, setLevel] = useState(movies[gameIndex]);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [points, setPoints] = useState(0);
  const isWon = movies.length === points;

  const handleReset = () => {
    setIsGameOver(false);
    setGameIndex(0);
    setLevel(movies[0]);
    setText("");
    setLives(3);
    setPoints(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (level.title === text.toLowerCase()) {
      setText("");
      setPoints((prev) => prev + 1);
      setGameIndex((prev) => prev + 1);
    } else {
      setText("");
      setLives((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (lives === 0) {
      setIsGameOver(true);
    }
  }, [lives]);

  useEffect(() => {
    setLevel(movies[gameIndex]);
  }, [gameIndex, points]);

  return (
    <div>
      {isWon ? (
        <section className="win-section">
          <h2>YOU WIN!</h2>
          <button onClick={handleReset}>Volver a jugar</button>
        </section>
      ) : (
        <>
          {isGameOver ? (
            <section className="game-over-section">
              <h2>GAME OVER!</h2>
              <button onClick={handleReset}>Volver a jugar</button>
            </section>
          ) : (
            <>
              <header className="header-section">
                <section>Lives: {lives}</section>
                <section>Points: {points}</section>
              </header>
              <main className="main-section">
                <h1>Guess the movie</h1>
                <section className="emoji-section">
                  {level.emojis.map((x, i) => (
                    <section key={i}>{x}</section>
                  ))}
                </section>
                <form className="form-section" onSubmit={handleSubmit}>
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                  />
                  <button type="submit">Send</button>
                </form>
              </main>
            </>
          )}
        </>
      )}
    </div>
  );
};
