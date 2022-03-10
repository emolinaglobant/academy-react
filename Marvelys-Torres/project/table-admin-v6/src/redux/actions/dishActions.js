import { ActionTypes } from "../constants/actionTypes";

export const setDishesAction = (dishes) => {
  return {
    type: ActionTypes.SET_DISHES,
    payload: dishes,
  };
};

export const selectDishAction = (dish) => {
  return {
    type: ActionTypes.SELECT_DISH,
    payload: dish,
  };
};

export const removeSelectedDishAction = (dish) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_DISH,
    payload: dish,
  };
};

export const incrementDishByOneAction = (id) => {
  return {
    type: ActionTypes.INCREMENT_DISH_BY_ONE,
    payload: id,
  };
};

export const decrementDishByOneAction = (id) => {
  return {
    type: ActionTypes.DECREMENT_DISH_BY_ONE,
    payload: id,
  };
};

export const selectWaiterAction = (waiter) => {
  return {
    type: ActionTypes.SELECT_WAITER,
    payload: waiter,
  };
};

export const getTotalAction = () => {
  return {
    type: ActionTypes.GET_TOTAL,
  };
};
export const resetAllAction = () => {
  return {
    type: ActionTypes.RESET_ALL,
  };
};
export const saveAtOrdersAction = (order) => {
  return {
    type: ActionTypes.SAVE_AT_ORDERS,
    payload: order
  };
};
