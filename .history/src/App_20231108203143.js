import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const MainPage = lazy(() => import("./pages/MainPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const PaymentOnMobilePage = lazy(() => import("./pages/PaymentOnMobilePage"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<MainPage></MainPage>} path="/"></Route>
        <Route
          element={<ProductsPage></ProductsPage>}
          path="/products/:slug"
        ></Route>
        <Route
          element={<ProductDetailPage></ProductDetailPage>}
          path="/test"
        ></Route>
        <Route
          element={<PaymentOnMobilePage></PaymentOnMobilePage>}
          path="/test2"
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
