import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import globalSlice from "./Slice/globalSlice";
export const store = configureStore({
  reducer: { global: globalSlice },
});
