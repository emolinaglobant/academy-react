import { ActionTypes } from "../actions/types";

const initialState = {
  rockets: [],
  loading: true,
};

export const rocketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKETS:
      return { ...state, rockets: payload, loading: false };
    default:
      return state;
  }
};

export const selectRocketReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_ROCKET:
      return { ...state, ...payload, loading: false };
    case ActionTypes.REMOVE_ROCKET:
      return {};
    default:
      return state;
  }
};
