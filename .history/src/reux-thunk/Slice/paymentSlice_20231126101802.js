import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: { current: 0 },
  reducers: {
    test: (state, action) => {
      state.current++;
    },
  },
});
export const {test } = 
export default paymentSlice.reducer;
