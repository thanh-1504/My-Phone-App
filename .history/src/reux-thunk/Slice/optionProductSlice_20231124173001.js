import { createSlice } from "@reduxjs/toolkit";
import { handleGetDetailDataProduct } from "./handler";

const optionProductSlice = createSlice({
  name: "option",
  initialState: { dataOption: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleGetDetailDataProduct.fulfilled,)
  }
});

export default optionProductSlice.reducer;
