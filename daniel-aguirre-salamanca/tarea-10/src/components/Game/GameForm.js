import "./GameForm.css";
import { useEffect, useState } from "react";
import { Button } from "@UI";

const GameForm = ({currentMovie, onChangeMovies}) => {
  //states
  const [inputValue, setInputValue] = useState("");
  const [isFormValid,setIsFormValid ] = useState(true);

  //useEffects
  useEffect(()=>{
    if(inputValue.length > 0){
      setIsFormValid(true);
    }
  },[inputValue]);

  // handlers
  function handleSubmit (event){
    event.preventDefault();
    const guess = inputValue;
    if (!guess){
      setIsFormValid(false);
      return;
    }
    const isCorrect = currentMovie.name == guess;
    onChangeMovies(isCorrect);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="game__form">
      <input type="text" value ={inputValue} className={!isFormValid ? "input__invalid": ""} onChange={(event)=>{setInputValue(event.target.value)}} />
      {!isFormValid && <section className="message__invalid">Debes escribir algo!</section>}
      <Button>Adivinar</Button>
    </form>
  );
};

export default GameForm;
