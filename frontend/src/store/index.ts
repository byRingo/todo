import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.ts";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
