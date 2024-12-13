import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/cart">CART</NavLink>
        <div>
          <FaCartShopping size={30} />
        </div>

        <NavLink to="/login">LOGIN</NavLink>
      </nav>
    </header>
  );
};

export default Header;
