import React, { useState } from 'react';
import { Lifes } from './Lifes';
import { Score } from './Score';
import '../css/App.css';

const movies = {
  'black panther' : '⚫🐆',
  'kung fu panda' : '🐼👊',
  'madagascar' : '🦒🦁🦛🦓🐧🐧🐧🐧',
  'harry potter' : '👶⚡👓🏰🎓',
  'paranormal activity' : '👩🏻‍🤝‍🧑🏼📸👻',
  'lord of rings' : '👑👴💍💍',
  'the wolf of wall street' : '🐺🗽💵💰',
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lifes, updateLifes] = useState(3);
  const [score, updateScore] = useState(0);
  const [emoji, updateEmoji] = useState(movies['black panther']);
  const [iMovies, updateOption] = useState(0);

  const decreaseLifes = () => {
    updateLifes(lifes - 1);
  }

  const finish = () => {
    if(lifes <= 1) {
      alert(`Game over - Score: ${score}`);
      updateScreen();
    } 
    if(score >= Object.keys(movies).length - 1) {
      alert(`You Won!`);
      updateScreen();
    }
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const increaseScore = () => {
    updateScore(score + 1);                                             
  }

  const increaseIMovies = () => {
    updateOption(iMovies + 1);
    nextEmojis();
  }

  const nextEmojis = () => {
    updateEmoji(Object.values(movies)[iMovies + 1]);
  }

  const updateScreen = () => {
    updateLifes(3);
    updateScore(0);
    updateOption(0);
    updateEmoji(movies['black panther']);
    setInputValue('');
  }

  const validateCorrectAnswer = () => {
    let changeToLowerCase = inputValue.toLocaleLowerCase();
    if(changeToLowerCase === Object.keys(movies)[iMovies]) {
      increaseIMovies();                                       
      increaseScore(); 
      setInputValue('');
    } else {
      decreaseLifes();
    }
    finish();
  }

  return (
    <>
      <article className="App">
        <Lifes lifeNumber={lifes} />
        <Score scoreNumber={score} />
        <section className='game'>
            <h2>GUESS THE MOVIE</h2>
            <section className='emojis'>{emoji}</section>
            <section className='sendInfo'>
                <input type='text' onChange={handleInputValue} value={inputValue} placeholder="e.g: The lion king"/>
                <button onClick={validateCorrectAnswer}>Guess</button>
            </section>
        </section>
      </article>
    </>
  );
}

export default App;
