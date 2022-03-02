import React from "react";

export const CardQuestion = () => {
  return (
    <article className="card__question">
      <header className="card__question-title">
        <h3>
          ¿Which company was established on April 1st, 1976 by Steve Jobs, Steve
          Wozniak and Ronald Wayne??
        </h3>
        <h5>Elija una opción, sólo una es verdadera!</h5>
      </header>

      <section className="card__question-options">
        <section className="card__options">
          <section className="card__option">
            <button
              type="button"
              data-answer="correct_answer"
              className="btn btn__option btn-answer"
            >
              Apple
            </button>
          </section>

          <section className="card__option">
            <button
              type="button"
              data-answer="incorrect_answer"
              className="btn btn__option btn-answer"
            >
              Microsoft
            </button>
          </section>

          <section className="card__option">
            <button
              type="button"
              data-answer="incorrect_answer"
              className="btn btn__option btn-answer"
            >
              Atari
            </button>
          </section>

          <section className="card__option">
            <button
              type="button"
              data-answer="incorrect_answer"
              className="btn btn__option btn-answer"
            >
              Commodore
            </button>
          </section>
        </section>
        <footer className="card__footer">
          <button
            type="button"
            className="btn btn__startQuestion"
            id="siguiente"
          >
            Siguiente pregunta
          </button>
          <button type="button" className="btn btn__retirement" id="retiro">
            Retiro Voluntario
          </button>
        </footer>
      </section>
    </article>
  );
};
