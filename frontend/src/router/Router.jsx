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
import Wishlist from "../components/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../store/productSlice";
import { toast } from "react-toastify";

const Router = () => {
  useTokenVerification();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.user.accessToken);


   // Adding product to cart
    const handleAddToCart = (product) => {
      if (isAuthenticated) {
        dispatch(addProductToCart(product));
        toast.success(`${product.title} successfully added to the cart!`);
      } else {
        toast.warn("Please register or log in to add products to your cart!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    };

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
          <Route path="/shop" element={<Shop handleAddToCart={handleAddToCart}/>} />

          {/* Protected routes */}
          <Route element={<Protector />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist handleAddToCart={handleAddToCart} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
