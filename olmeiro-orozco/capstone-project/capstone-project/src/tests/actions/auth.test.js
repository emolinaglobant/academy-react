import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";

import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
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
};

let store = mockStore(initState);

describe("Testing on actions Auth", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("Login and logout should created the action for each one", () => {
    const actionLogin = login("kadlñjfk34", "JonhDoe");
    expect(actionLogin).toEqual({
      type: types.login,
      payload: {
        uid: "kadlñjfk34",
        displayName: "JonhDoe",
      },
    });

    const actionLogout = logout();
    expect(actionLogout).toEqual({
      type: types.logout,
    });
  });

  test("should do startLogout", async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.logout,
    });
  });

  test("should init startLoginEmailPassword", async () => {
    await store.dispatch(startLoginEmailPassword("test@testing.com", "123456"));
    const actions = store.getActions();
    const expected = { type: "[UI] Start loading" };
    expect(actions[0]).toEqual(expected);
  });
});
