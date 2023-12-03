import { createSlice } from "@reduxjs/toolkit";
const iPadSlice = createSlice({
  name: "iPad",
  initialState: { dataIpad: [] },
  reducers: {
    handleGetDataIpad: (state, action) => {
      state.dataIpad = action.payload;
    },
  },
});
export const { handleGetDataIpad } = iPadSlice.actions;
export default iPadSlice.reducer;
