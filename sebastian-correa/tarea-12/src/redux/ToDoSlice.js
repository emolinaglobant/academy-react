import { createSlice } from "@reduxjs/toolkit";

export const ToDoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      if (action.payload.name) {
        let id = state.length + 1 || 1;
        state.push({ id, ...action.payload });
      }
    },
    updateToDoStatus: (state, action) => {
      state.filter((todo) => {
        if (todo.id === action.payload.id) {
          todo.status = action.payload.status;
        }
      });
    },
  },
});

export const { addToDo, updateToDoStatus } = ToDoSlice.actions;
export default ToDoSlice.reducer;
