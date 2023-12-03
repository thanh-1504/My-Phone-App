import { createAction, createSlice } from "@reduxjs/toolkit";

const handlePayment = createAction("handlePaymentProduct", (number, price) => {
  return number++;
});
const paymentSlice = createSlice({
  name: "payment",
  initialState: { current: 0 },
  reducers: {
    handleIncrease: (state, action) => {
      state++;
    },
  },
  extraReducers
});
export const { handleIncrease } = paymentSlice.actions;
export default paymentSlice.reducer;
