import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.product.cart);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            amount={item.amount}
            id={item.id}
          />
        ))}
      </div>
      <div>Total:CHF</div>
    </div>
  );
};

export default Cart;
