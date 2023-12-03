import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchData, requestData } from "./request";
import { handleGetData } from "./handler";
import { handleGetDataTest } from "../../section/SectionIphone";

const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [], dataTest: [] },
  reducers: {
    handleGetDataIphone: (state, action) => {
      state.dataIp = action.payload;
    },
    handleGetDataTest: (state,action) => {
      
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetData, (state, action) => {
      state.dataTest = action.payload;
    });
  },
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
