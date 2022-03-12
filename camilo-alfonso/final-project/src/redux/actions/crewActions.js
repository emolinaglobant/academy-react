import { ActionTypes } from "./types";

export const setCrew = (astronauts) => {
  return {
    type: ActionTypes.SET_ASTRONAUTS,
    payload: astronauts,
  };
};
