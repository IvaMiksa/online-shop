import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  handleAddToCart,
  handleAddToWishlist,
  isShopProduct,
  isWishlistProduct,
  handleRemoveFromWishlist,
}) => {
  const navigate = useNavigate();

  // Redirect to product details
  const redirectToProductDetails = (product) => {
    console.log("Redirecting to product details for:", product);
    navigate(`/product-details/${product.id}`);
    //navigate(`/product-details`);
  };

  return (
    <div
      key={product.id}
      onClick={() => redirectToProductDetails(product)}
      className="relative flex flex-col justify-between gap-2.5 p-2.5 m-2.5 rounded-lg bg-antiquewhite group"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        More Details
      </div>

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
