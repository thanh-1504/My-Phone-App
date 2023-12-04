import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsFilterPage from "./pages/ProductsFilterPage";
const MainPage = lazy(() => import("./pages/MainPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const PaymentOnMobilePage = lazy(() => import("./pages/PaymentOnMobilePage"));
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF6c8LPeujv82CK45sR-Xdf0ZfbIxYGjc",
  authDomain: "phone-selling-app-2e5b3.firebaseapp.com",
  projectId: "phone-selling-app-2e5b3",
  storageBucket: "phone-selling-app-2e5b3.appspot.com",
  messagingSenderId: "297601165788",
  appId: "1:297601165788:web:fb855fcb5e7b1c0be00719",
  measurementId: "G-QDGPDRZW9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<MainPage></MainPage>} path="/"></Route>
        <Route
          element={<ProductsPage></ProductsPage>}
          path="/products/:typeProduct"
        ></Route>
        <Route
          element={<ProductsFilterPage></ProductsFilterPage>}
          path="/products/:typeProduct/:slug"
        ></Route>
        <Route
          element={<ProductDetailPage></ProductDetailPage>}
          path="/products/detail/:typeProduct/:modelProduct/:slug"
        ></Route>
        <Route
          element={<PaymentOnMobilePage></PaymentOnMobilePage>}
          path="/payment"
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
