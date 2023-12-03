import { createSlice } from "@reduxjs/toolkit";
import { handleFetchOtherProducts, handleGetDataById } from "./handler";

const productDetailSlice = createSlice({
  name: "detailSlice",
  initialState: { data: [], dataOtherProducts: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetDataById.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(handleFetchOtherProducts.fulfilled,)
  },
});
export const {} = productDetailSlice.actions;
export default productDetailSlice.reducer;
