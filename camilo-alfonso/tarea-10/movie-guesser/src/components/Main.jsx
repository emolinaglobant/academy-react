import React, { useState, useEffect } from "react";
import "../assets/main.css";
import EmojiList from "./EmojiList";

const emojiList = EmojiList;

const Main = () => {
  const [inputGuesser, setInputGuesser] = useState("");
  const [swapMovie, setSwapMovie] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  //handlers
  const handleGuesser = (e) => {
    setInputGuesser(e.target.value);
  };

  const handleClick = () => {
    inputGuesser.toUpperCase() === emojiList[swapMovie].name
      ? nextEmojiMovie()
      : wrongEmojiMovie();
  };

  //checking emoji and movie
  const nextEmojiMovie = () => {
    setScore(score + 1);
    setInputGuesser("");
    setSwapMovie(swapMovie + 1);
  };

  const wrongEmojiMovie = () => {
    setLives(lives - 1);
    setInputGuesser("");
  };

  //alerts based on lives and score
  useEffect(() => {
    if (lives === 0) {
      setLives(3);
      alert("GAME OVER!😞 TRY AGAIN.");
      setScore(0);
      setSwapMovie(0);
    }
    if (score === 4) {
      setLives(3);
      alert(" 🎊 YOU WIN 🎊.");
      setScore(0);
      setSwapMovie(0);
    }
  }, [lives, score]);

  return (
    <>
      <header className="header">
        <section className="header__content">
          Lives:
          <p className="header__content--item">{lives} </p>
        </section>
        <section className="header__content">
          Score:
          <p className="header__content--item">{score} </p>
        </section>
      </header>
      <main className="main">
        <h1 className="main__title">
          Movie <span>Guesser</span>
        </h1>
        <section className="main__emojis">
          {emojiList[swapMovie].emojis}
        </section>
        <section className="main__content">
          <input
            type="text"
            onChange={handleGuesser}
            value={inputGuesser}
            name=""
            id=""
          />
          <button onClick={handleClick}>Guess</button>
        </section>
      </main>
    </>
  );
};

export default Main;
