import { createSlice } from "@reduxjs/toolkit";
import { handleGetData } from "./handler";
export const globalSlice = createSlice({
  name: "global",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetData.)
  },
});
