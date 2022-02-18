import React, { useState } from 'react';
import './App.css';

const movies=[
  {'Antman':'🐜👨'},
  {'The flash':'🏃⚡'},
  {'Cars':'🚗⚡🏁🏆'},
  {'E.T.':'👽📞🏠'},
  {'The Lord of the Rings':'🧙‍♂️🌋💍'},
  {'Toy Story':'🤠👨‍🚀🦖🐷'},
  {'Spider-man':'👨🕷'},
  {'':'Game Over 🎮'}
];
let level=0;
let button="Check";
let gameOver=false;
function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue,setOutputValue]=useState('🐜👨');
  const [lifes,setLifes]=useState(3);
  const [score,setScore]=useState(0);
  
  const  handleInputChange = (event) => {

    setInputValue(event.target.value)
   }
   
  const nextLevel = () =>{
    if(level<7 &&gameOver==false){
      level ++;
      setOutputValue(Object.values(movies[level])[0]);
      setInputValue('')
    } 
    else{ 
      setOutputValue("Game Over 🎮");
      button="Restart";

    }
  }
    
  const checkMovie=()=>{

    if(inputValue===Object.keys(movies[level])[0]){
      setScore(score +1);
    }
    else {
      
      if(lifes>0){
      setLifes(lifes -1)}
      else {
        setOutputValue("Game Over 🎮")
        gameOver=true;
      } 
    }
    nextLevel();
   
  }
  const restartGame=()=>{
    level=0;
    button='Check';
    setOutputValue('🐜👨')
    setLifes(3)
    setScore(0)
  }
   
  
  return (
    <main>
      <article className="container">
        <section className="quiz">
          <h1 >Guess the movie 👀 </h1>
          <h2>{outputValue}</h2>
          <input type="text" placeholder='Try' onChange={handleInputChange} value={inputValue}/>
          {gameOver==false && level<7  
            ?<button onClick={checkMovie}>{button}</button>
            :<button onClick={restartGame}>{button}</button>
          }
        </section>
        <section>
          <h2>Lifes: {lifes}</h2>
        </section>
        <section>
          <h2>Score: {score}</h2>
        </section>
        
      </article>
    </main>
    
  );
}

export default App;
