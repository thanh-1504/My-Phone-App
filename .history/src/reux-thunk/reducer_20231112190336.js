import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./Slice/globalSlice";
import iPhoneSlice from "./Slice/iPhoneSlice";
import iPadSlice from "./Slice/iPadSlice";

export const reducer = combineReducers({
  global: globalSlice,
  iPhone: iPhoneSlice,
  iPad:iPadSlice,
  watch:watchSli
});
