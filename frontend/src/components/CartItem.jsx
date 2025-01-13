const CartItem = ({ item }) => {
  return (
    <div>
      <button>X</button>
      <div>{item.title}</div>
      <button>-</button>
      <div>{item.amount}</div>
      <button>+</button>
      <div>{item.price}</div>
      <div>{(item.price * item.amount).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
