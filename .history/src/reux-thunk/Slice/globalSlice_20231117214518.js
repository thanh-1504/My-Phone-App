import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
const globalSlice = createSlice({
  name: "global",
  initialState: { dataMainPage: [data] },
  reducers: {
   
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(handleGetData.fulfilled, (state, action) => {
  //       state.data = action.payload;
  //     });
  //   },
});
export const {} = globalSlice.actions;
export default globalSlice.reducer;
