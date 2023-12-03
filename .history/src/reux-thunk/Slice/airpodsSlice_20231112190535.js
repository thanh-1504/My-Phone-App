import { createSlice } from "@reduxjs/toolkit";
const airPodSlice = createSlice({
  name: "airpod",
  initialState: { dataMac: [] },
  reducers: {
    handleGetDataMac: (state, action) => {
      state.dataMac = action.payload;
    },
  },
});
export const { handleGetDataMac } = airPodSlice.actions;
export default airPodSlice.reducer;
