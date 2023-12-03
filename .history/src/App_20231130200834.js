import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsFilterPage from "./pages/ProductsFilterPage";
import ScrollToTop from "./ultils/ScrollToTop";

const MainPage = lazy(() => import("./pages/MainPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const PaymentOnMobilePage = lazy(() => import("./pages/PaymentOnMobilePage"));
function App() {
  return (
    <Suspense>
      <Routes>
      <ScrollToTop>
        
      </ScrollToTop>
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
