import { createSlice } from "@reduxjs/toolkit";
import toDoList from "../../data/data";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    value: toDoList,
  },
  reducers: {
    newTask: (state, action) => {
      let newId =
        state.value.length < 10
          ? `0${state.value.length + 1}`
          : `${state.value.length + 1}`;
      let newTask = {
        id: newId,
        name: action.payload.newTaskName,
        description: action.payload.newTaskDescription,
      };
      state.value.unshift(newTask);
    },
  },
});

export const { newTask } = taskSlice.actions;
export default taskSlice.reducer;
