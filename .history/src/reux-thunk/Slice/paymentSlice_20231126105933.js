import { createAction, createSlice } from "@reduxjs/toolkit";

export const handlePayment = createAction("handlePaymentProduct", (number, price) => {
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
  extraReducers: (builder) => {
    builder.addCase(handlePayment, (state, action) => {
      console.log(state);
    });
  },
});
export const { handleIncrease } = paymentSlice.actions;
export default paymentSlice.reducer;
