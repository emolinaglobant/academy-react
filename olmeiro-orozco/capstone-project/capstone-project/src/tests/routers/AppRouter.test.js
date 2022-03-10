import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";
import { act } from "react-dom/test-utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import "../../firebase/firebase-config";
const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  game: {
    changeRound: false,
    difficulty: "easy",
    numberCategory: 0,
    questions: [],
    round: 0,
    start: false,
    totalPrize: 0,
  },
};

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initState);
store.dispatch = jest.fn();

describe("Tests component <AppRouter />", () => {
  test("Should call login if user is authenticated", async () => {
    let user;

    await act(async () => {
      const auth = getAuth();
      const userCred = await signInWithEmailAndPassword(
        auth,
        "test@testing.com",
        "123456"
      );
      user = userCred.user;

      const wrapper = mount(
        <Provider store={store}>
          <AppRouter />
        </Provider>
      );
    });

    expect(login).toHaveBeenCalledWith("ajUTFsZb3PYe5T0JDv0xibkVVwR2", null);
  });
});
