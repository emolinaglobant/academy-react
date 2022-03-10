import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Tests on authReducer", () => {
  test("should do login", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: "abc",
        displayName: "testAuth",
      },
    };

    const state = authReducer(initState, action);
    expect(state).toEqual({
      uid: "abc",
      name: "testAuth",
    });
  });

  test("should do logout", () => {
    const initState = {
      uid: 'kyc34xlkdfk12kdjf',
      name: 'John Doe'
    };

    const action = {
      type: types.logout,
      payload: {
        uid: "abc",
        displayName: "testAuth",
      },
    };

    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });

  test("should not do changes on state", () => {
    const initState = {
      uid: 'kyc34xlkdfk12kdjf',
      name: 'John Doe'
    };

    const action = {
      type: 'actionweird',
    };

    const state = authReducer(initState, action);

    expect(state).toEqual(initState);
  });
});
