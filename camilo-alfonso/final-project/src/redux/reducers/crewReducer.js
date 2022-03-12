import { ActionTypes } from "../actions/types";

const initialState = {
  astronauts: [],
  loading: true,
};

export const crewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ASTRONAUTS:
      return { ...state, astronauts: payload, loading: false };
    default:
      return state;
  }
};

export const selectCrewReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_ASTRONAUT:
      return { ...state, ...payload, loading: false };
    default:
      return state;
  }
};
