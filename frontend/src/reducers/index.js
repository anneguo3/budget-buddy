import { combineReducers } from "redux";
import aggregateReducer from "./aggregateReducer";
import reducer from "./reducer";

export default combineReducers({
  aggregateReducer,
  reducer
});
