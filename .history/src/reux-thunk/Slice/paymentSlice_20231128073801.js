import { createSlice } from "@reduxjs/toolkit";
import { handleFetchProvince, handlerFetchDistrict } from "./handler";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    isBuyProduct: false,
    dataProvince: [],
    showAddress: {province: },
    dataDistrict: [],
  },
  reducers: {
    handleBuyProduct: (state, action) => {
      state.isBuyProduct = action.payload;
    },
    handleShow: (state, action) => {
      state.show = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchProvince.fulfilled, (state, action) => {
        state.dataProvince = action.payload;
      })
      .addCase(handlerFetchDistrict.fulfilled, (state, action) => {
        state.dataDistrict = action.payload;
      });
  },
});
export const { handleBuyProduct, handleShow } = paymentSlice.actions;
export default paymentSlice.reducer;
