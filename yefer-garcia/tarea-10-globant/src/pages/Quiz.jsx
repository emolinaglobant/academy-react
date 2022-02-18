import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Quiz = ({ Points, setPoints, Lifes, setLifes }) => {

  const answers = ["Hombre Araña","Jurasicc Park","Batman", "La Sirenita","Mago de Oz","Libro de la Vida"] 
  const emojiQuiz = ["🕷🦸‍♂️🕷","🦕🚁🌍","🦇🦸‍♂️🦇","🧜‍♀️🔮⚓","🧙‍♂🤖👩👴🦁👨‍🌾","💀🎸❤"]
  const options = [["Hombre Araña","Titanic","Shaolin Soccer","Expreso Polar"],["El Padrino","Moana","Un Gran Dinosaurio","Jurasicc Park"],["Dracula","Crepusculo","Batman","Hombre Araña"],["Titanic", "Thor","Crucero a Bordo","La Sirenita"],["Mago Merlin","Sherk 3","Mundo Magico","Mago de Oz"],["Libro de la Vida","Cenicienta","Coco","Catatumbas"]]

  const [select,setSelect]=useState()
  const navigate = useNavigate();

  const verify = (num) => {
  if(select == answers[num]){
 
    setPoints(Points + 100) 
  }else{
    
    setLifes(Lifes - 1)
  }

  if (Lifes == 0) {
      setPoints(0);
      setLifes(3);
      navigate("/lost")}
  };

  return (
      <>
    <aside className="points">
        <section>
          <p id="puntos">
            Puntos: <span className="items-game">{Points}</span>Pts
          </p>
        </section>
        <section>
          <p className="lifes">
            Vidas:
            <span className="items-game">
            {Lifes} <i className="bi bi-heart-fill heart"></i>
            </span>
          </p>
        </section>
  </aside>
    {emojiQuiz.map((question,ind)=>{ 
          return (<section className="center" key={ind} >
          <article  className="quiz-box">
            <h1>
              ¿Cual es la Pelicula?
              <span>{question}</span>
            </h1>
            <section className="container-box"  >
              {options[ind].map((option,i)=>{
                return(
              <section onClick={()=>{setSelect(option)}} className="box" key={i}>
                <h3>{i}</h3>
                <p id="option1">{option}</p>
              </section>)})
              }
            </section>
            <a href={"#"+ind} id={ind}>
            <button
              className="verify"
              onClick={() => {
                verify(ind);
              }}
            >
              Verificar
            </button> 
            </a>      
          </article>
        </section>)
        })}

      </>
  );
};

export default Quiz;
