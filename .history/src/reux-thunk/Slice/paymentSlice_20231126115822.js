import { createSlice } from "@reduxjs/toolkit";

export const formatPrice = (price) => {
  let newPrice = price.split(".");
  let newPrice1 = "";
  for (let i = 0; i < newPrice.length; i++) {
    newPrice1 += newPrice[i];
  }
  console.log(newPrice1);
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
