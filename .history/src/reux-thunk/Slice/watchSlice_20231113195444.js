import { createSlice } from "@reduxjs/toolkit";
const watchSlice = createSlice({
  name: "watch",
  initialState: { dataWatch: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase()
  }
});
export const {} = watchSlice.actions;
export default watchSlice.reducer;
