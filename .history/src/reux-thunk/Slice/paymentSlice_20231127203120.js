import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: { isBuyProduct: false, dataProvince: [] },
  reducers: {
    handleBuyProduct: (state, action) => {
      state.isBuyProduct = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(handleFetchProvince)
  }
});
export const { handleBuyProduct } = paymentSlice.actions;
export default paymentSlice.reducer;
