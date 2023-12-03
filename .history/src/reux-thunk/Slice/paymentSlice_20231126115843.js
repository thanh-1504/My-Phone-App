import { createSlice } from "@reduxjs/toolkit";

export const formatPrice = (price) => {
  let newPrice = price.split(".");
  let result = "";
  for (let i = 0; i < newPrice.length; i++) {
    result += newPrice[i];
  }
  console.log(result);
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
