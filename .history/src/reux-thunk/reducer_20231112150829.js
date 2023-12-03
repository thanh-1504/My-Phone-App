import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./Slice/globalSlice";
import iPhoneSlice from "./Slice/iPhoneSlice";

export const reducer = combineReducers({
  global: globalSlice,
  iphone: iPhoneSlice,
});
