import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'userRecolector',
    initialState: {
      database: {admin: "admin123"},
      status: localStorage.getItem("status"),
      currentUser: localStorage.getItem("name")
    },
    reducers: {
      addUser: (state, action) => {
        state.database[action.payload.username] = action.payload.password
      },
      signIn: (state, action) =>{
        state.status = "200";
        state.currentUser = action.payload.username;
        localStorage.setItem("name", action.payload.username);
        localStorage.setItem("status", "200");
      },
      signOut: (state) => {
        state.status = null;
        localStorage.clear();
      }
    }
  })
  
  export const { addUser, signIn, signOut } = usersSlice.actions
  
  export default usersSlice.reducer
