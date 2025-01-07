import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
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
    <header>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/cart">CART</NavLink>
        <div>
          <FaCartShopping size={30} />
        </div>

        {!isAuthenticated && <NavLink to="/login">LOGIN</NavLink>}
        {isAuthenticated && <button onClick={handleLogout}>LOGOUT</button>}
      </nav>
    </header>
  );
};

export default Header;
