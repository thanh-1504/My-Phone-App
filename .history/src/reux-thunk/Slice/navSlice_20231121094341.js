import { createSlice } from "@reduxjs/toolkit";
import { handleGetDataBySlug } from "./handler";

const navSlice = createSlice({
  name: "nav",
  initialState: { data: [], nameBrand: "" },
  reducers: {
    getNameBrand: (state,action) => {
      state.name
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetDataBySlug.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default navSlice.reducer;
