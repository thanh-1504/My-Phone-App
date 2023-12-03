import { doc, setDoc } from "firebase/firestore"; 

export async function addDataToFireBase() {
    await setDoc(doc(db, "cities", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
}