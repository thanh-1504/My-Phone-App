import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./Slice/globalSlice";
import iPhoneSlice from "./Slice/iPhoneSlice";
import iPadSlice from "./Slice/iPadSlice";
import watchSlice from "./Slice/watchSlice";
import macSlice from "./Slice/macSlice";
import airpodsSlice from "./Slice/airpodsSlice";

export const reducer = combineReducers({
  global: globalSlice,
  iPhone: iPhoneSlice,
  iPad:iPadSlice,
  watch: watchSlice,
  mac: macSlice,
  airpod: airpodsSlice

});
