import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {current:0},
  reducers: {
    test: (state,action) => {
        
    }
  },
});

export default paymentSlice.reducer;
