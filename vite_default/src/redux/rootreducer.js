import commonSlice from "./slices/slice";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  common: commonSlice,
});

export default rootReducer;
