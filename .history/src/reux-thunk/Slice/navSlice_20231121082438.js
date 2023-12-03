import { createSlice } from "@reduxjs/toolkit";
import { getDataBySlug } from "./request";

const navSlice = createSlice({
  name: "slice",
  initialState: { dataNav: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDataBySlug.f)
  }
});

export default navSlice.reducer