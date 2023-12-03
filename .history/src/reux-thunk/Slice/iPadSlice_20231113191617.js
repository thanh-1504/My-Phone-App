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
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.dataIpad = action.payload;
    });
  },
});
export const {} = iPadSlice.actions;
export default iPadSlice.reducer;
