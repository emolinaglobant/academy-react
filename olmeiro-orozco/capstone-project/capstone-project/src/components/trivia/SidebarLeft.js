import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startRound, loadQuestions, roundChange } from "../../actions/game";
import { getDifficulty } from '../../helpers/getDifficulty';

export const SidebarLeft = () => {

  const dispatch = useDispatch();
  const {round, changeRound } = useSelector( state => state.game );

  const clickCategory = (e) => {
    if(changeRound === true){
      dispatch(roundChange(false));
    }
    e.target.disabled = true;
    let numCategory = e.target.dataset.numbercategory;
    const newDifficulty = getDifficulty(round);
    dispatch(startRound(true, numCategory, newDifficulty));
    dispatch(loadQuestions());
  }
 
  return (
    <aside className='trivia__sidebar-left'>
        <h2>Difficulty level</h2>
        <section className="trivia__difficulty">
          <button type="button" data-level="easy" className="btn btn__warning mr-3 ml-3">Low</button>
          <button type="button" data-level="medium" className="btn btn__success mr-3">Medium</button>
          <button type="button" data-level="hard" className="btn btn__danger mr-3">High</button>
        </section>

        <section className="trivia__categories">
          <h3>Categories</h3>
          <button onClick={ clickCategory }  type="button" className="btn btn__outline-dark mt-3 mr-3 category" data-category="Celebrities" data-numbercategory="26">Celebrities</button>
          <button onClick={ clickCategory }  type="button" className="btn btn__outline-dark mt-3 mr-3 category" data-category="History" data-numbercategory="23">History</button>
          <button onClick={ clickCategory }  type="button" className="btn btn__outline-dark mt-3 mr-3 category" data-category="Sports" data-numbercategory="21">Sports</button>
          <button onClick={ clickCategory }  type="button" className="btn btn__outline-dark mt-3 mr-3 category" data-category="Animals" data-numbercategory="27">Animals</button>
          <button onClick={ clickCategory }  type="button" className="btn btn__outline-dark mt-3 mr-3 category" data-category="Geography" data-numbercategory="22">Geography</button>
        </section>
    </aside>
  )
}