import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "./features/dataSlice";
import usersReducer from './features/usersSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    users: usersReducer
  }
})