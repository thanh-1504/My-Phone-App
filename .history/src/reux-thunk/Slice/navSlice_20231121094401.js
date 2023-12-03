import { createSlice } from "@reduxjs/toolkit";
import { handleGetDataBySlug } from "./handler";

const navSlice = createSlice({
  name: "nav",
  initialState: { data: [], nameBrand: "" },
  reducers: {
    getNameBrand: (state, action) => {
      state.nameBrand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetDataBySlug.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export {getNameBrand} = navsl
export default navSlice.reducer;
