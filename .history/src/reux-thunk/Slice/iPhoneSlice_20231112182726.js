import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      return [dataIphone];
    },
    filterProduct: (state, action) => {
      state.dataFilter = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(handleGetData.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     });
  //   },
});
export const { filterProduct } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
