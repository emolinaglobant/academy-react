import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./ToDoSlice";

export default configureStore({
  reducer: {
    todos: ToDoReducer,
  },
});
