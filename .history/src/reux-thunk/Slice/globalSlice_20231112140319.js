import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
import { handleGetData } from "./handler";
export const globalSlice = createSlice({
  name: "global",
  initialState: { dataIp: dataIphone },
  reducers: {
    handleGetDataIphone: (state, action) => {
      return state.dataIp;
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
