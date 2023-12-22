import { createSlice } from "@reduxjs/toolkit";
import {
  handleFilterPage,
  handleGetAllDataNav,
  handleGetData,
  handleGetDataBySlug,
} from "./handler";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    data: [],
    dataTest: [],
    imgSrcBanner: "",
    allData: [],
    dataFilter: {},
  },
  reducers: {
    getNameBrand: (state, action) => {
      state.nameBrand = action.payload;
    },
    getImgBanner: (state, action) => {
      state.imgSrcBanner = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetDataBySlug.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(handleGetAllDataNav.fulfilled, (state, action) => {
        state.allData = action.payload;
      })
      .addCase(handleFilterPage.fulfilled, (state, action) => {
        state.dataFilter = action.payload;
      })
      .addCase(handleGetData.fulfilled, (state, action) => {
        state.data = action.payload;
      });
      ;
  },
});
export const { getNameBrand, getImgBanner } = navSlice.actions;
export default navSlice.reducer;
