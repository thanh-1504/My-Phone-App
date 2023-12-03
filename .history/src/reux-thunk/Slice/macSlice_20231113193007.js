import { createSlice } from "@reduxjs/toolkit";
const macSlice = createSlice({
  name: "mac",
  initialState: { dataMac: [] },
  reducers: {},
});
export const { handleGetDataMac } = macSlice.actions;
export default macSlice.reducer;
