import { Routes, Route } from "react-router-dom";
import Protector from "../pages/protected/Protector";
import NotFound from "../pages/public/NotFound";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/registration/LoginPage";
import RegisterPage from "../pages/registration/RegisterPage";
import RegisterValidationPage from "../pages/registration/RegisterValidationPage";
import Layout from "../components/Layout";
import useTokenVerification from "../hooks/useTokenVerification";
import Shop from "../pages/public/Shop";
import Cart from "../pages/public/Cart";

const Router = () => {
  useTokenVerification();

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Authentication and Registration Routes */}
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/registervalidation"
            element={<RegisterValidationPage />}
          />
          <Route path="/login" element={<LoginPage />} />

          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

          {/* Protected routes */}
          <Route element={<Protector />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
