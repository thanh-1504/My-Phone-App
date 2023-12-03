import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
const iPadSlice = createSlice({
  name: "iPad",
  initialState: { dataIpad: [] },
  reducers: {
    handleGetDataIpad: (state, action) => {

      state.dataIpad = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(handleGetData)
  }
});
export const { handleGetDataIpad } = iPadSlice.actions;
export default iPadSlice.reducer;
