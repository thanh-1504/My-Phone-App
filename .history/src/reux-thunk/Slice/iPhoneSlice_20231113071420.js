import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./request";
import { handleGetData } from "./handler";
import { useDispatch } from "react-redux";
const dispatch = useDispatch()
const iPhoneSlice = createSlice({
  name: "iPhone",
  initialState: { dataIp: [] },
  reducers: {
    handleGetDataIphone: async (state, action) => {
      const data = await dispatch(handleGetData());
      console.log(data.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      console.log(state);
    });
  },
});
export const { handleGetDataIphone } = iPhoneSlice.actions;
export default iPhoneSlice.reducer;
