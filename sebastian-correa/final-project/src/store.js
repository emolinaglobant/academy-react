import { configureStore } from '@reduxjs/toolkit';
import NavbarReducer from './components/Navbar/NavbarSlice';
import TrackReducer from './components/SearchResult/SearchResultSlice';

export default configureStore({
  reducer: {
    search: NavbarReducer,
    currentTrack: TrackReducer
  },
});
