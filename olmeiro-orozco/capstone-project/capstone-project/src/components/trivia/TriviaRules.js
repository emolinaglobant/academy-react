import React from "react";
import { Link } from "react-router-dom";
import { FooterGame } from "./FooterGame";

export const TriviaRules = () => {
  return (
  
      <article className="rules__container animate__animated animate__flash">
       <header>
          <h1>Reglas Trivia Game</h1>
       </header>
      
       <section className="rules__list">
          <ol>
            <li>Por cada pregunta bien contestada obtiene un punto.</li>
            <li>Puede retirarse antes sí lo desea con su acumulado.</li>
            <li>Si falla con la respuesta pierde el acumulado.</li>
            <li>Total número preguntas 25</li>
          </ol>

          <Link to="/" className="rules__link">Volver A TriviaGame</Link>
       </section>

       <footer>
         <FooterGame />
       </footer>
      
      </article>
    
  );
};