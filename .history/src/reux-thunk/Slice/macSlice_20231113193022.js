import { createSlice } from "@reduxjs/toolkit";
const macSlice = createSlice({
  name: "mac",
  initialState: { dataMac: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handle)
  }
});
export const {} = macSlice.actions;
export default macSlice.reducer;
