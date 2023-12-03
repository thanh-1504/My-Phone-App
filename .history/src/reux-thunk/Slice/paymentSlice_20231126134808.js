import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: { isBuyProduct: false },
  reducers: {
    handleBuyProduct: (state, action) => {
      state.isBuyProduct = action.payload;
    },
  },
});
export const { handleClosePayment } = paymentSlice.actions;
export default paymentSlice.reducer;
