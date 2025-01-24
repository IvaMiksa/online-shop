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
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="container mx-auto p-6">
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-gray-700 mt-20">
            Your cart is empty!
          </h2>
          <p className="text-gray-500 mt-2">
            Add some products to your cart to see them here.
          </p>
          <button
            className="mt-4 bg-palevioletred text-white py-2 px-4 rounded-lg hover:bg-palevioletredhover transition"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
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

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>CHF {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-4">
              <span>Packaging & Shipping</span>
              <span>CHF 7.90</span>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              <p>
                Free shipping? Add items worth{" "}
                <span className="font-semibold text-palevioletred">
                  CHF 31.05
                </span>{" "}
                to your cart.
              </p>
              <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden mt-2">
                <ProgressBar totalPrice={totalPrice}/>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Voucher Code"
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              />
              <button className="w-full bg-palevioletred text-white mt-2 p-2 rounded-lg hover:bg-palevioletredhover transition">
                Apply
              </button>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total*</span>
              <span>CHF {(totalPrice + 7.9).toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Includes 8.1% VAT: CHF {(totalPrice * 0.081).toFixed(2)}
            </p>
            <button className="w-full bg-palevioletred text-white mt-4 p-3 rounded-lg hover:bg-palevioletredhover transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
