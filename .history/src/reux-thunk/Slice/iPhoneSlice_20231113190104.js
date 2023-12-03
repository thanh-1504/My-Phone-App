import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      state.dataIp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.dataIp = action.payload;
    });
  },
});
export const { handleGetDataIphone, handleGetDataTest } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
