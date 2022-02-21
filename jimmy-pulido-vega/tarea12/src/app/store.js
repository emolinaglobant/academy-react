import { configureStore } from "@reduxjs/toolkit";
import taskRducer from "../features/tasks/taskSlice";

export default configureStore({
  reducer: {
      task: taskRducer
  },
});
