import { createSlice } from "@reduxjs/toolkit";
import { handleFetchProvince } from "./handler";

const paymentSlice = createSlice({
  name: "payment",
  initialState: { isBuyProduct: false, dataProvince: [] },
  reducers: {
    handleBuyProduct: (state, action) => {
      state.isBuyProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleFetchProvince.fulfilled, (state, action) => {
      state.dataProvince = action.payload;
    });
  },
});
export const { handleBuyProduct } = paymentSlice.actions;
export default paymentSlice.reducer;
