import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../Components/TaskSlice'

export default configureStore({
  reducer: {
    manageTasks: tasksReducer
  }
})