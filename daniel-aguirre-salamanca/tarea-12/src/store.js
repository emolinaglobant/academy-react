import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todosSlice";

export default configureStore({
    reducer:{
        todos: todosReducer
    }
});