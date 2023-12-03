import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [dataIphone] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      return [dataIphone];
    },
    filterProduct: (state, action) => {
      state.dataIp = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(handleGetData.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     });
  //   },
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
