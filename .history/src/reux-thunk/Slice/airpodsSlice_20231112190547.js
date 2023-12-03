import { createSlice } from "@reduxjs/toolkit";
const airPodSlice = createSlice({
  name: "airpod",
  initialState: { dataAirpod: [] },
  reducers: {
    handleGetData: (state, action) => {
      state.dataAirpod = action.payload;
    },
  },
});
export const { handleGetDataMac } = airPodSlice.actions;
export default airPodSlice.reducer;
