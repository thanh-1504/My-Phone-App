import { createSlice } from "@reduxjs/toolkit";
import { fetchData, requestData } from "./request";
import { handleGetData } from "./handler";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [], dataTest: [] },
  reducers: {
    handleGetDataIphone: async (state, action) => {
      const data = await requestData();
      state.dataTest = data;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(handleGetData.fulfilled, (state, action) => {
  //     console.log(state);
  //   });
  // },
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
