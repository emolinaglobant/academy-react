import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { increasePrize, addRound, resetGame, roundChange } from "../../actions/game";
import { getRandom } from "../../helpers/getRandom";

export const CardQuestion = () => {
  const allCategories = document.querySelectorAll(".category");

  const [numberQuestionAsked, setNumberQuestionAsked] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [prize, setPrize] = useState(1);
  const [round, setRound] = useState(1);
  const [startGame, setStart] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();
  const { questions, start, changeRound } = useSelector((state) => state.game);

  useEffect(() => {
    setStart(start);
    setDisabled(changeRound);
    dispatch(addRound(round));
  }, [questions, round, prize, dispatch, changeRound]);

  const checkAnswer = (e) => {
    let answer = e.target.dataset.answer;
    if (answer === "correct_answer") {
      if (prize % 5 === 0 && numberQuestionAsked !== 1 && prize !== 25) {
        setNumberQuestionAsked(1);
        setQuestionIndex(0);
        setPrize(prize + 1);
        setRound(round + 1);

        setDisabled(true);
        dispatch(roundChange(true));

        dispatch(increasePrize(prize));
        dispatch(addRound(round));

        Swal.fire({
          icon: "success",
          title: "Excelent...",
          text: "Please choose another category",
        });
      } else if (prize % 5 === 0 && prize === 25) {
        const imagePath = "/assets/trivia2.jpg";
        Swal.fire({
          title: 'Triviaaa!',
          text: 'You are amazing.',
          imageUrl: `${imagePath}`,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        setStart(false);
        setQuestionIndex(0);
        setNumberQuestionAsked(1);
        setPrize(1);

        allCategories.forEach((btn) => {
          btn.removeAttribute("disabled");
        });
        dispatch(resetGame());
      } else {
        
        setNumberQuestionAsked(numberQuestionAsked + 1);
        setQuestionIndex(questionIndex + 1);
        setPrize(prize + 1);
        dispatch(increasePrize(prize));

        Swal.fire({
          icon: "success",
          title: "Excellent...",
          text: "Keep playing, click on the next question.",
        });
      }
    } else {
      handleErrorQuestion();
    }
  };

  const handleErrorQuestion = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Nice try!",
      footer: 'Try it again, you can do it!',
    });
    setStart(false);
    setQuestionIndex(0);
    setNumberQuestionAsked(1);
    setPrize(1);

    allCategories.forEach((btn) => {
      btn.removeAttribute("disabled");
    });
    dispatch(resetGame());
  };

  const handleRetire = () => {
    Swal.fire({
      icon: "error",
      title: "You won accumulated!",
      text: "Try it again!",
      footer: "Choose another category",
    });
    setStart(false);
    setQuestionIndex(0);
    setNumberQuestionAsked(1);
    setPrize(1);

    dispatch(resetGame());

    allCategories.forEach((btn) => {
      btn.removeAttribute("disabled");
    });
  };

  const order = getRandom(0, 5);
  return (
    <>
      {startGame && (
        <article className="card__question">
          <header className="card__question-title">
            <h3>
              {questions === undefined
                ? "loading"
                : questions[questionIndex].question}
            </h3>
            <h5>choose one option, only one is true.</h5>
          </header>

          <section className="card__question-options">
            <section className="card__options">
              <section className={`card__option order-${order}`}>
                <button
                  type="button"
                  data-answer="correct_answer"
                  className="btn btn__option btn-answer btn-option"
                  disabled={disabled}
                  onClick={checkAnswer}
                >
                  {questions === undefined
                    ? "Loading"
                    : questions[questionIndex].correct_answer}
                </button>
              </section>

              <section className="card__option order-1">
                <button
                  type="button"
                  data-answer="incorrect_answer"
                  className="btn btn__option btn-answer btn-option"
                  disabled={disabled}
                  onClick={checkAnswer}
                >
                  {questions === undefined
                    ? "Loading"
                    : questions[questionIndex].incorrect_answers[0]}
                </button>
              </section>

              <section className="card__option order-2">
                <button
                  type="button"
                  data-answer="incorrect_answer"
                  className="btn btn__option btn-answer btn-option"
                  disabled={disabled}
                  onClick={checkAnswer}
                >
                  {questions === undefined
                    ? "Loading"
                    : questions[questionIndex].incorrect_answers[1]}
                </button>
              </section>

              <section className="card__option order-3">
                <button
                  type="button"
                  data-answer="incorrect_answer"
                  className="btn btn__option btn-answer btn-option"
                  disabled={disabled}
                  onClick={checkAnswer}
                >
                  {questions === undefined
                    ? "Loading"
                    : questions[questionIndex].incorrect_answers[2]}
                </button>
              </section>
            </section>
            <footer className="card__footer">
              <button
                type="button"
                className="btn btn__retirement"
                id="retire"
                onClick={handleRetire}
              >
                I want to retire
              </button>
            </footer>
          </section>
        </article>
      )}

      <section
        className="card__start"
        style={{ display: start ? "none" : "flex" }}
      >
        <h1>Please choose a category to start.</h1>
      </section>
    </>
  );
};