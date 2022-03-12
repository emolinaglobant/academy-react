import { ActionTypes } from "../actions/types";

const initialState = {
  roadster: [],
  loading: true,
};

export const roadsterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROADSTER:
      return { ...state, roadster: payload, loading: false };
    default:
      return state;
  }
};
