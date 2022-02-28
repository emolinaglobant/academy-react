import { createSlice } from "@reduxjs/toolkit";
import data from "./Data"

export const TaskActions = createSlice({
  name: "tasks",
  initialState: {
    value: data,
  },
  reducers: {
    newToDo: (state, action) => {
    let newId = `${state.value.length + 1}`;
      let newToDo = {
        id: newId,
        name: action.payload.newTaskName,
      };
      state.value.push(newToDo);
    },
  },
});

export const { newToDo } = TaskActions.actions;
export default TaskActions.reducer;