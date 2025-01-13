import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem";
import {
  decreaseAmount,
  increaseAmount,
  removeProductFromCart,
} from "../../store/productSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cart);

  // Removing products from cart
  const handleRemoveItem = (id) => {
    dispatch(removeProductFromCart(id));
  };

  // Increasing amount
  const handleIncreaseAmount = (id) => {
    dispatch(increaseAmount(id));
  };

  // Decrease amount (qty < 1 covered)
  const handleDecreaseAmount = (item) => {
    if (item.amount === 1) {
      dispatch(removeProductFromCart(item.id));
    } else {
      dispatch(decreaseAmount(item.id));
    }
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
            handleIncreaseAmount={handleIncreaseAmount}
            handleDecreaseAmount={handleDecreaseAmount}
          />
        ))}
      </div>
      <div>Total:CHF</div>
    </div>
  );
};

export default Cart;
