import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
const airPodSlice = createSlice({
  name: "airpod",
  initialState: { dataAirpod: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.dataAirpod = action.payload;
    });
  },
});
export const {} = airPodSlice.actions;
export default airPodSlice.reducer;
