import { createSlice } from "@reduxjs/toolkit";
const airPodSlice = createSlice({
  name: "airpod",
  initialState: { dataAirpod: [] },
  reducers: {
   
  },
});
export const { handleGetDataAirpod } = airPodSlice.actions;
export default airPodSlice.reducer;
