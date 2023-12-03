import { createSlice } from "@reduxjs/toolkit";
const macSlice = createSlice({
  name: "watch",
  initialState: { dataWatch: [] },
  reducers: {
    handleGetDataWatch: (state, action) => {
      state.dataWatch = action.payload;
    },
  },
});
export const { handleGetDataWatch } = watchSlice.actions;
export default watchSlice.reducer;
