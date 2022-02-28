import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const addTaskReducer = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTasks: (state, action) => {
            state.push(action.payload);
            return state     
        },
        removeTasks: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
})


export const {addTasks, removeTasks} = addTaskReducer.actions;
export const reducer = addTaskReducer.reducer
