import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem";
import { removeProductFromCart } from "../../store/productSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cart);
  
  // Removing products from cart
  const handleRemoveItem = (id) => {
    dispatch(removeProductFromCart(id));
  };

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
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div>Total:CHF</div>
    </div>
  );
};

export default Cart;
