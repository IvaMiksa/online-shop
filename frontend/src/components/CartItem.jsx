import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({
  item,
  handleRemoveItem,
  handleIncreaseAmount,
  handleDecreaseAmount,
}) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
      <img
        src={item.images[0]}
        alt={item.title}
        className="h-16 w-16 object-cover rounded"
      />

      <div className="flex-grow ml-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-500 text-sm">SKU: {item.sku}</p>
        <p className="text-palevioletred text-sm font-medium">In Stock</p>
        <button
          className="text-gray-500 text-sm mt-2 hover:text-gray-300 underline"
          onClick={() => handleRemoveItem(item)}
        >
          <FontAwesomeIcon icon={faTimes} className="mr-1" />
          Remove from cart
        </button>
      </div>

      <div className="flex items-center">
        <button
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => handleDecreaseAmount(item)}
        >
          -
        </button>
        <span className="mx-2 text-lg">{item.amount}</span>
        <button
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => handleIncreaseAmount(item.id)}
        >
          +
        </button>
      </div>

      <div className="text-gray-700 font-medium ml-4">
        CHF {(item.price * item.amount).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
