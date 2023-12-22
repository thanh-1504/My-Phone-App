import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [], dataTest: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.dataIp = action.payload;
    })
    .addCase(handl)
  },
});
export const {} = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
