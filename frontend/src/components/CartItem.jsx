const CartItem = ({
  item,
  handleRemoveItem,
  handleIncreaseAmount,
  handleDecreaseAmount,
}) => {
  return (
    <div className="cart-item">
      <button onClick={() => handleRemoveItem(item.id)}>X</button>
      <div>{item.title}</div>
      <button onClick={() => handleDecreaseAmount(item)}>-</button>
      <div>{item.amount}</div>
      <button onClick={() => handleIncreaseAmount(item.id)}>+</button>
      <div>{item.price}</div>
      <div>{(item.price * item.amount).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
