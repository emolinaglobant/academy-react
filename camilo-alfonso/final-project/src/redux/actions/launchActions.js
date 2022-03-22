import apiLink from "../../apis/apiLink";
import { ActionTypes } from "./types";

export const fetchLaunches = () => async (dispatch) => {
  const response = await apiLink.get("/launches");
  dispatch({ type: ActionTypes.FETCH_LAUNCHES, payload: response.data });
};

export const setLaunches = (launches) => {
  return {
    type: ActionTypes.SET_LAUNCHES,
    payload: launches,
  };
};
