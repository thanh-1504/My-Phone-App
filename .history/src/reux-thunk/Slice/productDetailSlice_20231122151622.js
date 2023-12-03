import { createSlice } from "@reduxjs/toolkit";
import { handleGetDataById } from "./handler";

const productDetailSlice = createSlice({
  name: "detailSlice",
  initialState: {data: []},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleGetDataById,)
  }
});
export const {} = productDetailSlice.actions;
export default productDetailSlice.reducer;
