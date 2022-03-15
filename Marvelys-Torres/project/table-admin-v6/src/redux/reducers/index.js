import { combineReducers } from "redux";
import { dishReducer } from "./dishReducer";

const rootReducers = combineReducers({
  allDishes: dishReducer,
});

export default rootReducers;
