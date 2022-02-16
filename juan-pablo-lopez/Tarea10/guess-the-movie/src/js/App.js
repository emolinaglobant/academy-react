import React, { useState } from 'react';
import '../css/App.css';
import swal from 'sweetalert';

const guessMovies = {
  'ghostbusters' : '👻🚫',
  'it' : '🤡🎈🧒🏻🌧',
  'coco' : '🧑🏾🎸🎵🎵💀💀',
  'i am legend' : '👩🏾‍🦲🐕‍🦺🏙👤👤',
  'happy feet' : '🐧🎼🎶'
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [attempts, attemptStatus] = useState(3);
  const [guessMovie, setStateAction] = useState(0);
  const [emoji, updateEmoji] = useState(guessMovies['ghostbusters']);
  const [iMovies, updateMovie] = useState(0);

  const correctAttempt = () => {
    setStateAction(guessMovie + 1);
    swal({
      title: "Good job!",
      text: "It's correct!",
      icon: "success",
      button: "OK",
    });                                             
  }

  const finalState = () => {
    if(attempts <= 1) {
      swal({
        title: "Congratulations!",
        text: "You finished!",
        icon: "success",
        button: "OK",
      }); 
      state();
    } 
    if(guessMovie >= Object.keys(guessMovies).length - 1) {
      swal({
        title: "Congratulations!",
        text: "You Won!",
        icon: "success",
        button: "OK",
      }); 
      state();
    }
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const incorrectAttempt = () => {
    swal({
      title: "Incorect!",
      text: "It's inccorrect!",
      icon: "error",
      button: "Try again",
    }); 
  }

  const nextEmojis = () => {
    updateEmoji(Object.values(guessMovies)[iMovies + 1]);
  }

  const nextMovie = () => {
    updateMovie(iMovies + 1);
    nextEmojis();
  }

  const state = () => {
    attemptStatus(0);
    setStateAction(0);
    updateMovie(0);
    setInputValue('');
  }

  const validateCorrectAnswer = () => {
    let changeToLowerCase = inputValue.toLocaleLowerCase();
    if(changeToLowerCase === Object.keys(guessMovies)[iMovies]) {
      nextMovie();                                       
      correctAttempt(); 
      setInputValue('');
    } else {
      incorrectAttempt();
    }
    finalState();
  }

  return (
      <article className="app__container">
        <section className='game__container'>
            <h2>Guess the movie</h2>
            <section className='emoji__container'>{emoji}</section>
            <section className='movie__input'>
                <input type='text' placeholder='Enter a movie name' onChange={handleInputValue} value={inputValue}/>
                <button onClick={validateCorrectAnswer}>Send</button>
            </section>
        </section>
      </article>
  );
}

export default App;