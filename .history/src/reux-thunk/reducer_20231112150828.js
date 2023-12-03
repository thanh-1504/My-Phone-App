import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./Slice/globalSlice";

export const reducer = combineReducers({ global: globalSlice,iphone:iPhoneSlice });
