import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
import { handleGetData } from "./handler";
export const globalSlice = createSlice({
  name: "global",
  initialState: [dataIphone],
  reducers: {
    handleGetDataIphone: (state, action) => {
      return state[0];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default globalSlice.reducer;
