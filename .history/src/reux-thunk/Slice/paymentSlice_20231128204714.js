import { createSlice } from "@reduxjs/toolkit";
import {
  handleFetchProvince,
  handleFetchWard,
  handlerFetchDistrict,
} from "./handler";
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
    infoBuyer: {},
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
    handleSetInfoBuyer: (state,action) => {
      action.
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchProvince.fulfilled, (state, action) => {
        state.dataProvince = action.payload;
      })
      .addCase(handlerFetchDistrict.fulfilled, (state, action) => {
        state.dataDistrict = action.payload;
      })
      .addCase(handleFetchWard.fulfilled, (state, action) => {
        state.dataWards = action.payload;
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
