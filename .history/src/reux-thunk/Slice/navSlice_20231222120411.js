import { createSlice } from "@reduxjs/toolkit";
import {
  handleFilterPage,
  handleGetAllDataNav,
  handleGetData,
} from "./handler";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    data: [],
    allData: [],
    dataFilter: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleGetAllDataNav.fulfilled, (state, action) => {
        state.allData = action.payload;
      })
      .addCase(handleFilterPage.fulfilled, (state, action) => {
        state.dataFilter = action.payload;
      })
      .addCase(handleGetData.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});
export const { getNameBrand, getImgBanner } = navSlice.actions;
export default navSlice.reducer;
