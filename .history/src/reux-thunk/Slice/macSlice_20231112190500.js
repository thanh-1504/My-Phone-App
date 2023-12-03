import { createSlice } from "@reduxjs/toolkit";
const macSlice = createSlice({
  name: "mac",
  initialState: { dataMac: [] },
  reducers: {
    handleGetDataMac: (state, action) => {
      state.dataWatch = action.payload;
    },
  },
});
export const { handleGetDataWatch } = macSlice.actions;
export default macSlice.reducer;
