import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'dataRecolector',
    initialState: {
      people: null, 
      vehicles: null, 
      planets: null, 
      movies: null
    },
    reducers: {
      addData: (state, action) => {
        state[action.payload.type] = action.payload.data
      }
    }
  })
  
  export const { addData } = dataSlice.actions
  
  export default dataSlice.reducer
