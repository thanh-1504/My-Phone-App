import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
const macSlice = createSlice({
  name: "mac",
  initialState: { dataMac: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleGetData)
  }
});
export const {} = macSlice.actions;
export default macSlice.reducer;
