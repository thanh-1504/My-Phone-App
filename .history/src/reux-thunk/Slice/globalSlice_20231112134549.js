import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
import { handleGetData } from "./handler";
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
