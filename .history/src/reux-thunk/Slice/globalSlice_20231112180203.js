import { createSlice } from "@reduxjs/toolkit";
const globalSlice = createSlice({
  name: "global",
  initialState: { dataMainPage: [data] },
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(handleGetData.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     });
  //   },
});
export const {} = globalSlice.actions;
export default globalSlice.reducer;
