import { createSlice } from '@reduxjs/toolkit';

export const NavbarSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearch: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setSearch } = NavbarSlice.actions;
export default NavbarSlice.reducer;
