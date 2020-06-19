import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./listReducer";

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
});
