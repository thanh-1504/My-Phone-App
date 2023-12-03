import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "slice",
  initialState: { dataNav: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDataBySlug)
  }
});

export default navSlice.reducer