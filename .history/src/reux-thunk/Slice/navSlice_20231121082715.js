import { createSlice } from "@reduxjs/toolkit";
import { handleGetDataBySlug } from "./handler";

const navSlice = createSlice({
  name: "slice",
  initialState: { dataNav: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleGetDataBySlug)
  }
});

export default navSlice.reducer