import { createSlice } from "@reduxjs/toolkit";


const paymentSlice = createSlice({
  name: "payment",
  initialState: { isClose: false },
  reducers: {
    handleClosePayment: (state, action) => {
      state++;
    },
  },
});
export const { handleIncrease } = paymentSlice.actions;
export default paymentSlice.reducer;
