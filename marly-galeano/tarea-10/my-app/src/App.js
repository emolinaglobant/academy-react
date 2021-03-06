import "./App.css";
import React, { useState } from "react";

function App() {
  function changuEmojis() {
    let index = Math.floor(Math.random() * (movies.length - 1));
    setEmojis(movies[index].emojis);
  }
  const [emojis, setEmojis] = useState("ππ¨π‘");
  const handleInputChange = (event) => {
    setInput(event.target.value.toLowerCase());
  };
  function handleSubmit(e) {
    e.preventDefault();
    const actualTitle = movies.find((movie) => movie.emojis == emojis).title;
    if (input == actualTitle) {
      changuEmojis();
    }
  }
  const [input, setInput] = useState("");
  const movies = [
    { title: "the fast and the furious", emojis: "ππ¨π‘" },
    { title: "paranormal activity", emojis: "π«π₯π»" },
    { title: "the wolf of wall street", emojis: "πΊπ½π°" },
    { title: "chicken run", emojis: "πππ¨" },
    { title: "up", emojis: "πππ " },
    { title: "titanic", emojis: "βοΈπ©ββ€οΈβπ¨π’" },
    { title: "kung fu panda", emojis: "π₯πΌ" },
    { title: "blood diamond", emojis: "ππ" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2 id="lives-heading">Lives: 3</h2>
        <h2 id="points-heading">Points: 0</h2>
      </header>
      <section>
        <form>
          <h1>
            <label htmlFor="title-input" className="label__movie">
              Guess the movie
            </label>
          </h1>
          <p>{emojis}</p>
          <article>
            <input
              type="text"
              id="title-input"
              className="input"
              name="text"
              value={input}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn" onClick={handleSubmit}>
              Send
            </button>
          </article>
        </form>
      </section>
    </div>
  );
}

export default App;