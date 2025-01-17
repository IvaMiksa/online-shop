const CartItem = ({
  item,
  handleRemoveItem,
  handleIncreaseAmount,
  handleDecreaseAmount,
}) => {
  return (
    <div className="cart-item">
      <button data-testid="remove-from-cart-btn" onClick={() => handleRemoveItem(item)}>X</button>
      <div data-testid="product-title">{item.title}</div>
      <button data-testid="decrease-qty-btn" onClick={() => handleDecreaseAmount(item)}>-</button>
      <div data-testid="product-cart-qty">{item.amount}</div>
      <button data-testid="increase-qty-btn" onClick={() => handleIncreaseAmount(item.id)}>+</button>
      <div data-testid="product-price">{item.price}</div>
      <div data-testid="subtotal">{(item.price * item.amount).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
