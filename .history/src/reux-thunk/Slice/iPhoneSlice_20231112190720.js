import { createSlice } from "@reduxjs/toolkit";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      state.dataIp = action.payload;
    },
    filterProduct: (state, action) => {},
  },
 
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
