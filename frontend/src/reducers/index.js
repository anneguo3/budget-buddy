import { combineReducers } from "redux";
import aggregateReducer from "./aggregateReducer";
import entriesReducer from "./entriesReducer";

export default combineReducers({
  aggregateReducer,
  entriesReducer,
});
