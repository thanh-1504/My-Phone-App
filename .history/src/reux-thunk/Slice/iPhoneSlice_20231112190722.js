import { createSlice } from "@reduxjs/toolkit";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      state.dataIp = action.payload;
    },
  },
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
