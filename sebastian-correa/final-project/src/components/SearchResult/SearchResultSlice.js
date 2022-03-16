import { createSlice } from '@reduxjs/toolkit';

export const SearchResultSlice = createSlice({
  name: 'currentTrack',
  initialState: {},
  reducers: {
    setCurrentTrack: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setCurrentTrack } = SearchResultSlice.actions;
export default SearchResultSlice.reducer;
