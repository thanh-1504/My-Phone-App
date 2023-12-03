import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
export const globalSlice = createSlice({
  name: "global",
  initialState: [dataIphone],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      console.log(state[dataIphone]);
    });
  },
});
