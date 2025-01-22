import { useSelector } from "react-redux";

const ProductCard = ({
  product,
  handleAddToCart,
  handleAddToWishlist,
  isShopProduct,
  isWishlistProduct,
  handleRemoveFromWishlist,
}) => {

  return (
    <div className="product" key={product.id}>
      <img src={product.images[0]} alt="" width={80} height={80} />
      <div>{product.title}</div>
      <div className="product-info-wrapper">
        <div>{product.price.toFixed(2)} CHF</div>
        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        {isShopProduct && (
          <button onClick={() => handleAddToWishlist(product)}>
            Add to wishlist
          </button>
        )}
        {isWishlistProduct && (
          <button onClick={() => handleRemoveFromWishlist(product)}>
            Remove from wishlist
          </button>
        )}
        
      </div>
    </div>
  );
};

export default ProductCard;
