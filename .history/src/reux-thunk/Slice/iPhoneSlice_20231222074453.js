import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.dataIp = action.payload;
    });
  },
});
export const {} = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
