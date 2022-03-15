import React from "react";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startGoogleLogin, startLoginEmailPassword } from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe("Tests on <LoginScreen /> ", () => {
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  });

  test("should show it correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should dispatch action startGoogleLogin", () => {
    wrapper.find(".google__btn").prop("onClick")();
    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test("should dispatch action startLoginEmailPassword", () => {
    wrapper.find("form").prop("onSubmit")({ preventDefault() {} });
    expect(startLoginEmailPassword).toHaveBeenCalled();
  });

  test("should dispatch action startLoginEmailPassword", () => {
    wrapper.find("form").prop("onSubmit")({ preventDefault() {} });
    expect(startLoginEmailPassword).toHaveBeenLastCalledWith("","");
  });
});
