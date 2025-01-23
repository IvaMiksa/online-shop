import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.user.accessToken);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("accessToken");
  };

  return (
    <header className="bg-antiquewhite flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-palevioletred text-white font-bold text-lg mr-4">
          DS
        </div>
        <span className="text-palevioletred font-extrabold text-2xl tracking-wide">
          Dream Shop
        </span>
      </div>

      <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-palevioletred text-white px-4 py-2 rounded"
              : "bg-white text-gray-600 px-4 py-2 rounded"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "bg-palevioletred text-white px-4 py-2 rounded"
              : "bg-white text-gray-600 px-4 py-2 rounded"
          }
        >
          SHOP
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? "bg-palevioletred text-white px-4 py-2 rounded"
              : "bg-white text-gray-600 px-4 py-2 rounded"
          }
        >
          CART
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive
              ? "bg-palevioletred text-white px-4 py-2 rounded"
              : "bg-white text-gray-600 px-4 py-2 rounded"
          }
        >
          WISHLIST
        </NavLink>
        {!isAuthenticated && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-palevioletred text-white px-4 py-2 rounded"
                : "bg-white text-gray-600 px-4 py-2 rounded"
            }
          >
            LOGIN
          </NavLink>
        )}
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded bg-white text-black cursor-pointer"
          >
            LOGOUT
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
