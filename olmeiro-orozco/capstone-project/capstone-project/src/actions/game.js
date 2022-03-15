import { getQuestions } from "../helpers/getQuestions";
import { types } from "../types/types";

export const startRound = (start, numberCategory, difficulty) => {
  return {
    type: types.startRound,
    payload: {
      start: start,
      numberCategory: numberCategory,
      difficulty: difficulty,
    },
  };
};

export const loadQuestions = () => {
  return async (dispatch, getState) => {
    const { numberCategory, difficulty } = getState().game;
    const data = await getQuestions(numberCategory, difficulty);

    dispatch(storeQuestions(data));
  };
};

export const storeQuestions = (questions) => {
  return {
    type: types.gameStoreQuestions,
    payload: {
      questions,
    },
  };
};

export const increasePrize = (increase) => {
  return {
    type: types.gameIncreasePrize,
    payload: {
      totalPrize: increase,
    },
  };
};

export const addRound = (increase) => {
  return {
    type: types.gameAddRound,
    payload: {
      round: increase,
    },
  };
};

export const roundChange = (value) => {
  return {
    type: types.gameChangeRound,
    payload: {
      changeRound: value,
    },
  };
};

export const resetGame = () => {
  return {
    type: types.gameReset,
  };
};
