import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'manageTasks',
  initialState: {
    tasks: ['HTML', 'CSS', 'JS', 'React']
  },
  reducers: {
    addTask: (state, value) => {
      state.tasks.push(value.payload)
    },
    removeTask: (state, position) => {
        state.tasks.splice(position.payload,1)
    }
  }
})

export const { addTask, removeTask } = taskSlice.actions

export default taskSlice.reducer