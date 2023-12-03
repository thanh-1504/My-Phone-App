import { createSlice } from "@reduxjs/toolkit";
import { handleGetDataBySlug } from "./handler";

const navSlice = createSlice({
  name: "nav",
  initialState: { data: [], nameBrand: "", imgSrcBanner: "" },
  reducers: {
    getNameBrand: (state, action) => {
      state.nameBrand = action.payload;
    },
    getImgBanner: (state, action) => {
      state.imgSrcBanner = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetDataBySlug.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    .addcase
  },
});
export const { getNameBrand, getImgBanner } = navSlice.actions;
export default navSlice.reducer;
