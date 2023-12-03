import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: { isBuy: false },
  reducers: {
    handleClosePayment: (state, action) => {
      state.isClose = action.payload;
    },
  },
});
export const { handleClosePayment } = paymentSlice.actions;
export default paymentSlice.reducer;
