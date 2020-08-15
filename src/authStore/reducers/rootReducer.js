import { combineReducers } from "redux";
import { businessDetailsReducer } from "./businessDetailsReducer";
import { businessDataReducer } from "./businessDataReducer";

export const rootReducer = combineReducers({
  businessDetailsReducer,
  businessDataReducer,
});
