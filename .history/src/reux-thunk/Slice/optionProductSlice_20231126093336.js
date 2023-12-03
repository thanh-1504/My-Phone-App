import { createSlice } from "@reduxjs/toolkit";
import { handleGetDetailDataProduct } from "./handler";

const optionProductSlice = createSlice({
  name: "option",
  initialState: { dataOption: [], dataPayment: [],isBuy = false },
  reducers: {
    handleGetDataPayment: (state, action) => {
      state.dataPayment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetDetailDataProduct.fulfilled, (state, action) => {
      state.dataOption = action.payload;
    });
  },
});
export const  {handleGetDataPayment} = optionProductSlice.actions
export default optionProductSlice.reducer;
