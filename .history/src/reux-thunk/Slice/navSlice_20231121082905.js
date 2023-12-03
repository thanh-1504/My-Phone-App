import { createSlice } from "@reduxjs/toolkit";
import { handleGetDataBySlug } from "./handler";

const navSlice = createSlice({
  name: "navData",
  initialState: { dataNav: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetDataBySlug.fulfilled, (state, action) => {
      state.dataNav = action.payload;
    });
  },
});

export default navSlice.reducer;
