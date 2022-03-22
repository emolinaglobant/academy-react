import apiLink from "../../apis/apiLink";
import { ActionTypes } from "./types";

export const fetchAstronauts = () => async (dispatch) => {
  const response = await apiLink.get("/crew");
  dispatch({ type: ActionTypes.FETCH_ASTRONAUTS, payload: response.data });
};

export const setCrew = (astronauts) => {
  return {
    type: ActionTypes.SET_ASTRONAUTS,
    payload: astronauts,
  };
};
