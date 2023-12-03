import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchData, requestData } from "./request";
import { handleGetData } from "./handler";
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [], dataTest: [] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      state.dataIp = action.payload;
    },
    handleGetDataTest: async (state, action) => {
      const data = await requestData();
      state.dataTest = await data;
      return data;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(handleGetData, (state, action) => {
  //     state.dataTest = action.payload;
  //   });
  // },
});
export const { handleGetDataIphone, handleGetDataTest } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
