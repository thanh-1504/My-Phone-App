import { createSlice } from "@reduxjs/toolkit";
const airP = createSlice({
  name: "mac",
  initialState: { dataMac: [] },
  reducers: {
    handleGetDataMac: (state, action) => {
      state.dataMac = action.payload;
    },
  },
});
export const { handleGetDataMac } = macSlice.actions;
export default macSlice.reducer;
