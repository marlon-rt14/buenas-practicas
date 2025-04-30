import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes, useLocation } from "react-router";
import LandingPage from "../pages/LandingPage";
import Lists from "../pages/Lists";
import { NotFoundPage } from "../pages/NotFoundPage";
import { OrdersPage } from "../pages/OrdersPage";
import { ProductsPage } from "../pages/ProductsPage";
import { UsersPage } from "../pages/UsersPage";
import { ErrorFallbackRouter } from "../components/ErrorBoundary";

export const Router = () => {
  const location = useLocation();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackRouter} resetKeys={[location.pathname]}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
};
