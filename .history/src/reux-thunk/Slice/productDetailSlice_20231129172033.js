import { createSlice } from "@reduxjs/toolkit";
import { handleGetDataById } from "./handler";

const productDetailSlice = createSlice({
  name: "detailSlice",
  initialState: { data: [], dataOtherProducts: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetDataById.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(handle)
  },
});
export const {} = productDetailSlice.actions;
export default productDetailSlice.reducer;
