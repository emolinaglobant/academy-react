import { useState, useEffect } from 'react';
import { loadQuestions } from '../helpers/loadQuestions';

export const useFetchQuestions = (amount, category, difficulty, type) => {

   const [state, setState] = useState({
     data: [],
     loading:true
   });

   useEffect( () => {
     loadQuestions(amount, category, difficulty, type)
      .then( questions => {
        setState({
          data: questions,
          loading: false,
        });
      })
   },[category]);

   return state;
};

