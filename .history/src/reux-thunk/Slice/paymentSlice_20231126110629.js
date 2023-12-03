import { createSlice } from "@reduxjs/toolkit";

export const handlePayment = (e, number, price) => {
  console.log(e.currentTarget);
  if (e.currentTarget.matches("plus--icon")) {
    console.log(true);
  }
};
const paymentSlice = createSlice({
  name: "payment",
  initialState: { current: 0 },
  reducers: {
    handleIncrease: (state, action) => {
      state++;
    },
  },
});
export const { handleIncrease } = paymentSlice.actions;
export default paymentSlice.reducer;
