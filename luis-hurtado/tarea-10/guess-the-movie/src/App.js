import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const movieList = [
    { 
      emojis: ["🧑🏻🧙⚡️"],
      answer: "Harry Potter", 
    },
    {
      emojis: ["🕷🕸🧑🏻"],
      answer: "Spiderman"
    }, 
    {
      emojis: ["🕔💲☠️"],
      answer: "InTime"
    },
    {
      emojis: ["🐅🌊🚣🏽‍♂️"],
      answer: "Life of Pi"
    },
    {
      emojis: ["🏹🙋🏻🍖🎮"],
      answer: "Hunger Games"
    }
  ]

  const [points, setPoints] = useState(0);
  const [lifes, setLifes] = useState(3);
  const [movieName, setMovieName] = useState("")
  const [movie, setMovie] = useState(movieList[0])

  const getMovieName = (e) => {setMovieName(e.target.value)}

  const handlePoints = () =>{
    if(movieName === movie.answer){
      setPoints(points + 1)
      setMovieName("")
    } else {
      setLifes(lifes - 1)
      setMovieName("")
    }
  }

  useEffect(() => {
    if(lifes === 0){
      alert("You Lose, try again")
      handleReset()
    }
    setMovie(movieList[points])
    if(points === 3){
      alert("You Rock!!")
      handleReset()
    }
  }, [points, lifes])

  const handleReset = () => {
    setPoints(0);
    setLifes(3);
    setMovie(movieList[0]);
    setMovieName("")
  }
 
  return (
    <div className="app">
      <header className="header">
        <h2>Lives: {lifes} </h2>
        <h2>Points: {points} </h2>
      </header>
      <main className="gameContainer">
        <h1>Guess the movie</h1>
        <article className='inputContainer'>
          <section className="emojis">
            {movie.emojis}
          </section>
          <section className="movieInput">
            <input 
              type="text" 
              placeholder="Guess the movie"
              value={movieName}
              onChange={getMovieName}
            />
            <input type="button" onClick={handlePoints} value="Send"/>
          </section>
          {/* <section>
            <input type="button" onClick={handleReset} value="Reset"></input>
          </section> */}
        </article>
      </main>
    </div>
  );
}

export default App;
