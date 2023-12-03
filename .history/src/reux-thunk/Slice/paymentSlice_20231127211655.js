import { createSlice } from "@reduxjs/toolkit";
import { handleFetchProvince } from "./handler";

const paymentSlice = createSlice({
  name: "payment",
  initialState: { isBuyProduct: false, dataProvince: [], show: false },
  reducers: {
    handleBuyProduct: (state, action) => {
      state.isBuyProduct = action.payload;
    },
    handleShow: (state, action) => {
      state.show = !state.show;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleFetchProvince.fulfilled, (state, action) => {
      state.dataProvince = action.payload;
    });
  },
});
export const { handleBuyProduct,handleShow } = paymentSlice.actions;
export default paymentSlice.reducer;
