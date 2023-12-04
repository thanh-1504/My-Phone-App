import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBF6c8LPeujv82CK45sR-Xdf0ZfbIxYGjc",
  authDomain: "phone-selling-app-2e5b3.firebaseapp.com",
  projectId: "phone-selling-app-2e5b3",
  storageBucket: "phone-selling-app-2e5b3.appspot.com",
  messagingSenderId: "297601165788",
  appId: "1:297601165788:web:fb855fcb5e7b1c0be00719",
  measurementId: "G-QDGPDRZW9T"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);