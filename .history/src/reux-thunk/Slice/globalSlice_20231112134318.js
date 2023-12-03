import { createSlice } from "@reduxjs/toolkit";
import { dataIphone, handleGetData } from "./handler";
export const globalSlice = createSlice({
  name: "global",
  initialState: [dataIphone],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      console.log(state.d);
    });
  },
});
