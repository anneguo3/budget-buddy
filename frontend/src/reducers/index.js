import { combineReducers } from "redux";
import aggregateReducer from "./aggregateReducer";
import entriesReducer from "./entriesReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  aggregateReducer,
  entriesReducer,
  profileReducer,
});
