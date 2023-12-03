import { createSlice } from "@reduxjs/toolkit";
const watchSlice = createSlice({
  name: "watch",
  initialState: { dataWatch: [] },
  reducers: {
    
  },
});
export const { handleGetDataWatch } = watchSlice.actions;
export default watchSlice.reducer;
