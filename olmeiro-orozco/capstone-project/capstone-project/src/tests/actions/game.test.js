import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
  auth: {
    uid: "TESTING",
  },
  game: {
    changeRound: false,
    difficulty: "easy",
    numberCategory: 26,
    questions: [],
    round: 0,
    start: false,
    totalPrize: 0,
  },
});

import { addRound, increasePrize, resetGame, roundChange, startRound, storeQuestions } from "../../actions/game";
import { getQuestions } from "../../helpers/getQuestions";
import { types } from "../../types/types";

describe("Tests on actions game", () => {
  test("All actions should be created", () => {
    const actionStartRound = startRound(true, 26, "easy");
    expect(actionStartRound).toEqual({
      type: types.startRound,
      payload: {
        start: true,
        numberCategory: 26,
        difficulty: "easy",
      },
    });

    const questions = ["questions Game"];
    const actionStoreQuestions = storeQuestions(questions);

    expect(actionStoreQuestions).toEqual({
      type: types.gameStoreQuestions,
      payload: { questions },
    });

    const increase = 1;
    const actionIncreasePrize = increasePrize(increase);
    expect(actionIncreasePrize).toEqual({
      type: types.gameIncreasePrize,
      payload: {
        totalPrize: increase,
      },
    });

    const valueAddRound = 1;
    const actionAddRound = addRound(valueAddRound);
    expect(actionAddRound).toEqual({
      type: types.gameAddRound,
      payload: {
        round: valueAddRound,
      },
    });

    const value = true;
    const actionRoundChange = roundChange(value);
    expect(actionRoundChange).toEqual({
      type: types.gameChangeRound,
      payload: {
        changeRound: value,
      },
    });

    const actionResetGame = resetGame();
    expect(actionResetGame).toEqual({
      type: types.gameReset,
    });
  });

  test("should loadQuestions to store", async () => {
    const numberCategor = store.getState().game.numberCategory;
    const difficult = store.getState().game.difficulty;

    const data = await getQuestions(numberCategor, difficult);
    store.dispatch(storeQuestions(data));

    const actionsCalled = store.getActions();
    const expected = [
      { type: "[Game] Store Questions", payload: { questions: [...data] } },
    ];

    expect(actionsCalled).toEqual(expected);
  });
});
