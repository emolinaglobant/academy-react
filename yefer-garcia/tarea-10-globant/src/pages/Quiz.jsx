import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Quiz = ({ Points, setPoints, Lifes, setLifes }) => {

  const answers = ["Hombre Araña","Jurasicc Park","Batman", "La Sirenita","Mago de Oz","Libro de la Vida"] 

  const navigate = useNavigate();

  const [select, setSelect] = useState();

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
  const respond = (num) => {
    const selected = document.getElementById(`option${num}`);
    setSelect(selected.innerText);
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
            Vidas:{" "}
            <span className="items-game">
            {Lifes} <i className="bi bi-heart-fill heart"></i>
            </span>
          </p>
        </section>
    </aside>

    <section className="center" >
      <article className="quiz-box">
        <h1>
          ¿Cual es la Pelicula?
          <span>🕷🦸‍♂️🕷</span>
        </h1>
        <section className="container-box">
          <section onClick={() => respond(1)} className="box">
            <h3>A</h3>
            <p id="option1">Hombre Araña</p>
          </section>
          <section className="box" onClick={() => respond(2)}>
            <h3>B</h3>
            <p id="option2">Titanic</p>
          </section>
          <section className="box" onClick={() => respond(3)}>
            <h3>C</h3>
            <p id="option3">Shaolin Soccer</p>
          </section>
          <section className="box" onClick={() => respond(4)}>
            <h3>D</h3>
            <p id="option4">Expreso Polar</p>
          </section>
        </section>
        <a href="#1">
        <button
          className="verify"
          onClick={() => {
            verify(0);
          }}
        >
          Verificar
        </button> 
        </a>      
      </article>
    </section>

    <section className="center" id="1">   
        <article className="quiz-box">
          <h1>
            ¿Cual es la Pelicula?
            <span>🦕🚁🌍</span>
          </h1>
          <section className="container-box">
            <section onClick={() => respond(5)} className="box">
              <h3>A</h3>
              <p id="option5">El Padrino</p>
            </section>
            <section className="box" onClick={() => respond(6)}>
              <h3>B</h3>
              <p id="option6">Moana</p>
            </section>
            <section className="box" onClick={() => respond(7)}>
              <h3>C</h3>
              <p id="option7">Un Gran Dinosaurio</p>
            </section>
            <section className="box" onClick={() => respond(8)}>
              <h3>D</h3>
              <p id="option8">Jurasicc Park</p>
            </section>
          </section>
          <a href="#2">
          <button
            className="verify"
            onClick={() => {
              verify(1);
            }}
          >
            Verificar
          </button>
          </a>
          
        </article>
    </section>

    <section className="center" id="2">            
      <article className="quiz-box">
              <h1>
                ¿Cual es la Pelicula?
                <span>🦇🦸‍♂️🦇</span>
              </h1>
              <section className="container-box">
                <section onClick={() => respond(9)} className="box">
                  <h3>A</h3>
                  <p id="option9">Dracula</p>
                </section>
                <section className="box" onClick={() => respond(10)}>
                  <h3>B</h3>
                  <p id="option10">Crepusculo</p>
                </section>
                <section className="box" onClick={() => respond(11)}>
                  <h3>C</h3>
                  <p id="option11">Batman</p>
                </section>
                <section className="box" onClick={() => respond(12)}>
                  <h3>D</h3>
                  <p id="option12">Hombre Araña</p>
                </section>
              </section>
              <a href="#3">
              <button
                className="verify"
                onClick={() => {
                  verify(2);
                }}
              >
                Verificar
              </button>
              </a>          
      </article>
    </section>

    <section className="center" id="3">       
        <article className="quiz-box">
          <h1>
            ¿Cual es la Pelicula?
            <span>🧜‍♀️🔮⚓</span>
          </h1>
          <section className="container-box">
            <section onClick={() => respond(13)} className="box">
              <h3>A</h3>
              <p id="option13">Titanic</p>
            </section>
            <section className="box" onClick={() => respond(14)}>
              <h3>B</h3>
              <p id="option14">Thor</p>
            </section>
            <section className="box" onClick={() => respond(15)}>
              <h3>C</h3>
              <p id="option15">Crucero a bordo</p>
            </section>
            <section className="box" onClick={() => respond(16)}>
              <h3>D</h3>
              <p id="option16">La Sirenita</p>
            </section>
          </section>
          <a href="#4">
            <button
            className="verify"
            onClick={() => {
              verify(3);
            }}
          >
            Verificar
            </button>
          </a>      
        </article>
    </section>

    <section className="center" id="4">       
        <article className="quiz-box">
          <h1>
            ¿Cual es la Pelicula?
            <span>🧙‍♂🤖👩👴🦁👨‍🌾</span>
          </h1>
          <section className="container-box">
            <section onClick={() => respond(17)} className="box">
              <h3>A</h3>
              <p id="option17">Mago Merlin</p>
            </section>
            <section className="box" onClick={() => respond(18)}>
              <h3>B</h3>
              <p id="option18">Sherk 3</p>
            </section>
            <section className="box" onClick={() => respond(19)}>
              <h3>C</h3>
              <p id="option19">Mundo Magico</p>
            </section>
            <section className="box" onClick={() => respond(20)}>
              <h3>D</h3>
              <p id="option20">Mago de Oz</p>
            </section>
          </section>
          <a href="#5">
          <button
            className="verify"
            onClick={() => {
              verify(4);
            }}
          >
            Verificar
          </button>
          </a>      
        </article>
    </section>

    <section className="center" id="5">      
        <article className="quiz-box">
          <h1>
            ¿Cual es la Pelicula?
            <span>💀🎸❤</span>
          </h1>
          <section className="container-box">
            <section onClick={() => respond(21)} className="box">
              <h3>A</h3>
              <p id="option21">Libro de la Vida</p>
            </section>
            <section className="box" onClick={() => respond(22)}>
              <h3>B</h3>
              <p id="option22">Cenicienta</p>
            </section>
            <section className="box" onClick={() => respond(23)}>
              <h3>C</h3>
              <p id="option23">Coco</p>
            </section>
            <section className="box" onClick={() => respond(24)}>
              <h3>D</h3>
              <p id="option24">Catabumbas</p>
            </section>
          </section>
      <Link to="/gameover">
      <button
            className="verify"
            onClick={() => {
              verify(5);
            }}
          >
            Verificar
          </button>
      </Link>       
        </article>
    </section>
      </>
  );
};

export default Quiz;
