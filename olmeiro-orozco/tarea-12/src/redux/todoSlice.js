import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todos',
  initialState:[],
  reducers: {
    addTodo:( state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        desc: action.payload.desc,
        done: false
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
  }
})

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;