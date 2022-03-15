import React from "react";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import { types } from "../../../types/types";
import { RegisterScreen } from "../../../components/auth/RegisterScreen";

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

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
);

describe("Tests component <RegisterScreeen /> ", () => {
  test("should show it correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should dispatch correct action input name', () => { 
    const nameInput = wrapper.find('input[name="name"]');

    nameInput.simulate('change', {
      target: {
        value: '',
        name:'name'
      }
    });

    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: 'name is required'
    })
  });
 
  test("should dispatch correct action input email", () => {
    const nameInput = wrapper.find('input[name="name"]');
    const emailInput = wrapper.find('input[name="email"]');

    nameInput.simulate("change", {
      target: {
        value: "Test input",
        name: "name",
      },
    });

    emailInput.simulate("change", {
      target: {
        value: "",
        name: "email",
      },
    });

    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });

    const actions = store.getActions();
   
    expect(actions[1]).toEqual({
      type: types.uiSetError,
      payload: "Email is required",
    });
  });
 
  test("should dispatch correct action input password not match", () => {
    const nameInput = wrapper.find('input[name="name"]');
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');
    const password2Input = wrapper.find('input[name="password2"]');

    nameInput.simulate("change", {
      target: {
        value: "Test input",
        name: "name",
      },
    });

    emailInput.simulate("change", {
      target: {
        value: "test@gmail.com",
        name: "email",
      },
    });

    passwordInput.simulate("change", {
      target: {
        value: "123456",
        name: "password",
      },
    });
  
    password2Input.simulate("change", {
      target: {
        value: "765432",
        name: "password",
      },
    });

    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });

    const actions = store.getActions();
    expect(actions[2]).toEqual({
      type: types.uiSetError,
      payload: 'passwor should be at least six characters and match each other'
    });
  });

  test('should show error box', () => { 
    const initState = {
      auth: {},
      ui: {
        loading: false,
        msgError: 'Email is not correct',
      },
    };
    
    const store = mockStore(initState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
    expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);
   })
});
