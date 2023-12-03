import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
const watchSlice = createSlice({
  name: "watch",
  initialState: { dataWatch: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.dataWatch = action.payload;
    });
  },
});
export const {} = watchSlice.actions;
export default watchSlice.reducer;
