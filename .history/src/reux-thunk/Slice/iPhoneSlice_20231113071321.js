import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./request";
import { handleGetData } from "./handler";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [] },
  reducers: {
    handleGetDataIphone: (state, action) => {
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      console.log(state);
    });
  },
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
