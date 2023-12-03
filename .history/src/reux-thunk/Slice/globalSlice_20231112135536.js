import { createSlice } from "@reduxjs/toolkit";
import { dataIphone } from "../../constant";
import { handleGetData } from "./handler";
export const globalSlice = createSlice({
  name: "global",
  initialState: { data: [] },
  reducers: {
    handleGetDataIphone: (state,action) => {
        
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
