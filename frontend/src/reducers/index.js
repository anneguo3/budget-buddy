import { combineReducers } from "redux";
import aggregateReducer from "./aggregateReducer";
import categoryReducer from "./categoryReducer";
import reducer from "./reducer";

export default combineReducers({
  aggregateReducer,
  // categoryReducer,
  reducer,
});
