import { ActionTypes } from "./types";

export const setRoadster = (roadster) => {
  return {
    type: ActionTypes.SET_ROADSTER,
    payload: roadster,
  };
};
