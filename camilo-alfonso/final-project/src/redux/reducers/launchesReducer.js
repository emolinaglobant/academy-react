import { ActionTypes } from "../actions/types";

const initialState = {
  launches: [],
  loading: true,
};

export const launchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LAUNCHES:
      return { ...state, launches: payload, loading: false };
    case ActionTypes.FETCH_LAUNCHES:
      return { ...state, launches: payload, loading: false };
    default:
      return state;
  }
};

export const selectLaunchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_LAUNCH:
      return { ...state, ...payload, loading: false };
    default:
      return state;
  }
};
