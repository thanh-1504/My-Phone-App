import { createSlice } from "@reduxjs/toolkit";
import { dataIphone, handleGetData } from "";
export const globalSlice = createSlice({
  name: "global",
  initialState: [dataIphone],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      console.log(state.dataIphone);
    });
  },
});
