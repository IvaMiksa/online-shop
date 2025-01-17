import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem";
import {
  calculateTotalPrice,
  decreaseAmount,
  increaseAmount,
  removeProductFromCart,
} from "../../store/productSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cart);
  const totalPrice = useSelector((store) => store.product.totalPrice);

  // Removing products from cart
  const handleRemoveItem = (item) => {
    dispatch(removeProductFromCart(item.id));
    toast.success(`${item.title} successfully removed from the cart!`);
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

  // Calculate total price
  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cartItems]);

  return (
    <div className="cart">
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
      <div data-testid="total" className="total">Total: {totalPrice.toFixed(2)} CHF</div>
    </div>
  );
};

export default Cart;
