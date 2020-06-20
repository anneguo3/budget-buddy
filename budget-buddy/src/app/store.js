import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./listReducer";
import { aggregateReducer } from './aggregateReducer';

export const store = configureStore({
  reducer: {
    list: listReducer,
    aggregate: aggregateReducer,
  },
});
