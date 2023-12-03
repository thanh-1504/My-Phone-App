import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: { current: 0 },
  reducers: {
    handleIncrease: (state, action) => {
      return {
        ...state,
        state.
      }
    },
  },
});
export const { handleIncrease } = paymentSlice.actions;
export default paymentSlice.reducer;
