import { gameReducer } from "../../reducers/gameReducer";
import { types } from "../../types/types";

describe("Tests on reducers Game", () => {
  const initalState = {
    changeRound: false,
    difficulty: "easy",
    numberCategory: 0,
    questions: [],
    round: 0,
    start: false,
    totalPrize: 0,
  };

  const questions = [
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "What is the capital of Indonesia?",
      correct_answer: "Jakarta",
      incorrect_answers: ["Bandung", "Medan", "Palembang"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question:
        "All of the following are classified as Finno-Ugric languages EXCEPT:",
      correct_answer: "Samoyedic",
      incorrect_answers: ["Hungarian", "Finnish", "Estonian"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "Which US state has the highest population?",
      correct_answer: "California",
      incorrect_answers: ["New York", "Texas", "Florida"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "The Space Needle is located in which city?",
      correct_answer: "Seattle",
      incorrect_answers: ["Los Angles", "Toronto", "Vancouver"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "How many countries does Mexico border?",
      correct_answer: "3",
      incorrect_answers: ["2", "4", "1"],
    },
  ];

  test("should startRound Game", () => {
    const action = {
      type: types.startRound,
      payload: {
        start: true,
        numberCategory: 26,
        difficulty: "easy",
      },
    };

    const state = gameReducer(initalState, action);
    expect(state).toEqual({
      changeRound: false,
      difficulty: "easy",
      numberCategory: 26,
      questions: [],
      round: 0,
      start: true,
      totalPrize: 0,
    });
  });

  test("should store question on Store", () => {
    const action = {
      type: types.gameStoreQuestions,
      payload: {
        questions: questions,
      },
    };

    const state = gameReducer(initalState, action);
    expect(state).toEqual({
      ...initalState,
      questions
    });
  });

  test("should increase Prize game", () => {
    const increase = 1;
    const action = {
      type: types.gameIncreasePrize,
      payload: {
        totalPrize: increase,
      },
    };

    const state = gameReducer(initalState, action);
    expect(state).toEqual( {
      changeRound: false,
      difficulty: 'easy',
      numberCategory: 0,
      questions: [],
      round: 0,
      start: false,
      totalPrize: 1
    });
  });
 
  test("should add one round", () => {
    const increase = 1;
    const action = {
      type: types.gameAddRound,
      payload: {
        round: increase,
      },
    };

    const state = gameReducer(initalState, action);
    expect(state).toEqual( {
      changeRound: false,
      difficulty: 'easy',
      numberCategory: 0,
      questions: [],
      round: 1,
      start: false,
      totalPrize: 0
    });
  });
 
  test("should change round on the store", () => {
    const changeRound = true;
    const action = {
      type: types.gameChangeRound,
      payload: {
        changeRound: changeRound,
      },
    };

    const state = gameReducer(initalState, action);
    expect(state).toEqual( {
      changeRound: true,
      difficulty: 'easy',
      numberCategory: 0,
      questions: [],
      round: 0,
      start: false,
      totalPrize: 0
    });
  });
 
  test("should reset store game", () => {
    const action = {
      type: types.gameReset
    };

    const state = gameReducer(initalState, action);
    expect(state).toEqual({
      changeRound: false,
      difficulty: "easy",
      numberCategory: 0,
      questions: [],
      round: 0,
      start: false,
      totalPrize: 0,
    });
  });
 
  test("should not do changes on state", () => {
    const action = {
      type: types.gameActionWeird
    };

    const state = gameReducer(initalState, action);
    expect(state).toEqual(initalState);
  });


  



















});
