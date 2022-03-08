import { types } from "../types/types";

const initalState = {
  changeRound: false,
  difficulty: "easy",
  numberCategory: 0,
  questions: [],
  round: 0,
  start: false,
  totalPrize: 0,
};

export const gameReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.startRound:
      return {
        ...state,
        start: action.payload.start,
        numberCategory: action.payload.numberCategory,
        difficulty: action.payload.difficulty,
      };

    case types.gameStoreQuestions:
      return {
        ...state,
        questions: action.payload.questions,
      };

    case types.gameIncreasePrize:
      return {
        ...state,
        totalPrize: action.payload.totalPrize,
      };

    case types.gameAddRound:
      return {
        ...state,
        round: action.payload.round,
      };

    case types.gameChangeRound:
      return {
        ...state,
        changeRound: action.payload.changeRound,
      };

    case types.gameReset:
      return {
        ...initalState,
      };

    default:
      return state;
  }
};
