import { Routes, Route } from "react-router-dom";
import Protector from "../pages/protected/Protector";
import NotFound from "../pages/public/NotFound";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/registration/LoginPage";
import RegisterPage from "../pages/registration/RegisterPage";
import RegisterValidationPage from "../pages/registration/RegisterValidationPage";
import Layout from "../components/Layout";

const Router = () => {
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

          {/* Protected routes */}
          <Route element={<Protector />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
