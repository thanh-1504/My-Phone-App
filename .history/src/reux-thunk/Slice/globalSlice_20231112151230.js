import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
import { handleGetData } from "./handler";
const globalSlice = createSlice({
  name: "global",
  initialState: { data: [] },
  reducers: {
    filterProduct: (state, action) => {
      state.data = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(handleGetData.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     });
  //   },
});
export const { handleGetDataIphone } = globalSlice.actions;
export default globalSlice.reducer;
