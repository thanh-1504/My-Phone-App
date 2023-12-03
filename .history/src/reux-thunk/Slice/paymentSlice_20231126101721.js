import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {current:0},
  reducers: {
    handle
  },
});

export default paymentSlice.reducer;
