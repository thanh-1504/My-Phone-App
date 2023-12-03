import { createSlice } from "@reduxjs/toolkit";
const globalSlice = createSlice({
  name: "global",
  initialState: { data: [] },
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(handleGetData.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     });
  //   },
});
export const { filterProduct } = globalSlice.actions;
export default globalSlice.reducer;
