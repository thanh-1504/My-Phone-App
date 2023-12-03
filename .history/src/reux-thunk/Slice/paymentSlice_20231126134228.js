import { createSlice } from "@reduxjs/toolkit";


const paymentSlice = createSlice({
  name: "payment",
  initialState: { isClose: 0 },
  reducers: {
    handleIncrease: (state, action) => {
      state++;
    },
  },
});
export const { handleIncrease } = paymentSlice.actions;
export default paymentSlice.reducer;
