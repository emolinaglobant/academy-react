import { configureStore } from "@reduxjs/toolkit";
import Rducer from "../utils/TaskActions";

export default configureStore({
  reducer: {
      task: Rducer
  },
});