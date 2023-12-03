import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore"; 
export const globalSlice = createSlice({
  name: "global",
  initialState: [{ data: 0 }],
  reducers: {
    addDataToFireBase:  await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
  },
});
