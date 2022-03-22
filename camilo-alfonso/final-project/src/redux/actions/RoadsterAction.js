import apiLink from "../../apis/apiLink";
import { ActionTypes } from "./types";

export const fetchRoadster = () => async (dispatch) => {
  const response = await apiLink.get("/roadster");
  dispatch({ type: ActionTypes.FETCH_ROADSTER, payload: response.data });
};

export const setRoadster = (roadster) => {
  return {
    type: ActionTypes.SET_ROADSTER,
    payload: roadster,
  };
};
