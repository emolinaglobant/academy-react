import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { mount } from "enzyme";
import { HeaderGame } from "../../components/trivia/HeaderGame";
import { startLogout } from "../../actions/game";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

jest.mock("../../actions/game", () => ({
  startLogout: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    ui: "UIeyCuTetnUjy4TAogQuh2eWMI63",
    name: "testing",
  },
  ui: {
    loading: false,
    msgError: null,
  },
  game: {
    changeRound: false,
    difficulty: "easy",
    numberCategory: 0,
    questions: [],
    round: 1,
    start: false,
    totalPrize: 0,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <HeaderGame />
    </MemoryRouter>
  </Provider>
);

describe("Tests component <HeaderGame />", () => {
  test("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show name of user testing', () => { 
    const nameUser = wrapper.find('h1');
    expect(nameUser.text()).toEqual("Trivia Game: testing");
   });

   test('should dispatch the action startLogout', () => { 
      wrapper.find('.btn__end').prop('onClick')();
      expect(startLogout).toBeCalledTimes(0);
    })
});
