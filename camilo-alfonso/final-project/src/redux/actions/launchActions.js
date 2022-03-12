import { ActionTypes } from "./types";

export const setLaunches = (launches) => {
  return {
    type: ActionTypes.SET_LAUNCHES,
    payload: launches,
  };
};
