import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
export const globalSlice = createSlice({
  name: "global",
  initialState: [{iPhone}],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      console.log(state);
    });
  },
});
