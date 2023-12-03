import { createSlice } from "@reduxjs/toolkit";
import { handleFetchProvince, handlerFetchDistrict } from "./handler";
const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    isBuyProduct: false,
    dataProvince: [],
    showProvince: false,
    showDistrict: false,
    showWards: false,
    dataDistrict: [],
    dataWards: [],
  },
  reducers: {
    handleBuyProduct: (state, action) => {
      state.isBuyProduct = action.payload;
    },
    handleShowProvinces: (state, action) => {
      state.showProvince = action.payload;
    },
    handleShowDistricts: (state, action) => {
      state.showDistrict = action.payload;
    },
    handleShowWards: (state, action) => {
      state.showWards = action.payload;
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
      .addCase(handlerFetchDistrict.fulfilled, (state, action) => {
        state.dataDistrict = action.payload;
      });
  },
});
export const {
  handleBuyProduct,
  handleShowProvinces,
  handleShowDistricts,
  handleShowWards,
} = paymentSlice.actions;
export default paymentSlice.reducer;
