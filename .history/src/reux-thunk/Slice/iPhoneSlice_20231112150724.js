import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
const globalSlice = createSlice({
  name: "global",
  initialState: { dataIp: [dataIphone] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      return [dataIphone];
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
