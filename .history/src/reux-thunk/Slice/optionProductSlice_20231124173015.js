import { createSlice } from "@reduxjs/toolkit";
import { handleGetDetailDataProduct } from "./handler";

const optionProductSlice = createSlice({
  name: "option",
  initialState: { dataOption: [] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleGetDetailDataProduct.fulfilled,(action,payload) => {
        state.
    })
  }
});

export default optionProductSlice.reducer;
