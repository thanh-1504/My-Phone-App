import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "detailSlice",
  initialState: {data: []},
  reducers: {},
  extraReducers: builder => {
    builder.addCase()
  }
});
export const {} = productDetailSlice.actions;
export default productDetailSlice.reducer;
