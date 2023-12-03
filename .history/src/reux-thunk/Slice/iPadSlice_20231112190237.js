import { createSlice } from "@reduxjs/toolkit";
const iPadSlice = createSlice({
  name: "iPad",
  initialState: { dataIpad: [] },
  reducers: {
    handleGetDataIpad: (state, action) => {
      state.dataIp = action.payload;
    },
    filterProduct: (state, action) => {},
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(handleGetData.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     });
  //   },
});
export const { handleGetDataIphone } = iPadSlice.actions;
export default iPadSlice.reducer;
