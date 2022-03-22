import apiLink from "../../apis/apiLink";
import { ActionTypes } from "./types";

export const fetchRockets = () => async (dispatch) => {
  const response = await apiLink.get("/rockets");
  dispatch({ type: ActionTypes.FETCH_ROCKETS, payload: response.data });
};

export const fetchRocket = (id) => async (dispatch) => {
  const response = await apiLink.get(`/rockets/${id}`);
  dispatch({ type: ActionTypes.SELECT_ROCKET, payload: response.data });
};

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
