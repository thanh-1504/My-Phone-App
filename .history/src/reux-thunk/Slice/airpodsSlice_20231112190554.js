import { createSlice } from "@reduxjs/toolkit";
const airPodSlice = createSlice({
  name: "airpod",
  initialState: { dataAirpod: [] },
  reducers: {
    handleGetDataAirpod: (state, action) => {
      state.dataAirpod = action.payload;
    },
  },
});
export const { handleGetDataAirpod } = airPodSlice.actions;
export default airPodSlice.reducer;
