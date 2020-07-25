import { combineReducers } from "redux";
import aggregateReducer from "./aggregateReducer";
import reducer from "./reducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  aggregateReducer,
  reducer,
  profileReducer,
});
