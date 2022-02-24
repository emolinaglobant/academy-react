import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: { value: [] },
  reducers : {
      createTodo: (state, newTodo) =>{
          state.value = [...state.value, newTodo.payload]
      },
      deleteTodo: (state, todoDeleteIndex) => {
        state.value = state.value.filter((item, index) => index != todoDeleteIndex.payload);
      }

  }

});

export const { createTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer;

