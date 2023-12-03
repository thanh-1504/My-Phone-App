import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./request";
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
    builder.addCase(handleGetData.)
  }
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
