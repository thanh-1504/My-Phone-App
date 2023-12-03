import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsFilterPage from "./pages/ProductsFilterPage";

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
          path="/products/:typeProduct"
        ></Route>
        <Route
          element={<ProductsFilterPage></ProductsFilterPage>}
          path="/products/:typeProduct/:slug"
        ></Route>
        <Route
          element={<ProductDetailPage></ProductDetailPage>}
          path="/products/detail/:modelProduct/:slug"
        ></Route>
        <Route
          element={<PaymentOnMobilePage></PaymentOnMobilePage>}
          path="/payem"
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
