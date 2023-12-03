import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchData, requestData } from "./request";
import { handleGetData } from "./handler";
const handleGetDataTest = createAction(
  "getDataTest",
  async function getDataTest() {
    const data = await requestData();
    console.log(data);
  }
);
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [], dataTest: [] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      state.dataIp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.dataTest = action.payload;
      console.log(state);
    });
  },
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
