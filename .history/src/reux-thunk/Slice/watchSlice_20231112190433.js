import { createSlice } from "@reduxjs/toolkit";
const watchSlice = createSlice({
  name: "watch",
  initialState: { dataWatch: [] },
  reducers: {
    handleGetDataWatch: (state, action) => {
      state.dataWatch = action.payload;
    },
},
});
export const { handleGetDataWatch } = iPadSlice.actions;
export default iPadSlice.reducer;
