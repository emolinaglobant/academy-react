import { combineReducers, createStore } from "redux";

const initialState = {
  todosList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todosList: [...state.todosList, action.payload],
      };
    case "GET_ALL":
      return state.todosList;
    case "DELETE_TODO":
      return {
        ...state,
        todosList: state.todosList.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todosList: state.todosList.map((todo) => {
          if (todo.id === +action.payload.updatedTodo.id) {
            const newTodo = { ...action.payload.updatedTodo };
            return newTodo;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = createStore(rootReducer);
