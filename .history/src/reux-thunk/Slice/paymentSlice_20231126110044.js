import { createSlice } from "@reduxjs/toolkit";

export const handlePayment = (number, price) => {};
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
