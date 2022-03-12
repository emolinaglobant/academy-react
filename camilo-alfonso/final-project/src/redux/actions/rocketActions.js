import { ActionTypes } from "./types";

export const setRockets = (rockets) => {
  return {
    type: ActionTypes.SET_ROCKETS,
    payload: rockets,
  };
};

export const selectRocket = (rocket) => {
  return {
    type: ActionTypes.SELECT_ROCKET,
    payload: rocket,
  };
};

export const removeRocket = () => {
  return {
    type: ActionTypes.REMOVE_ROCKET,
  };
};
