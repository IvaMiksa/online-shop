import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus
} from "@fortawesome/free-solid-svg-icons";

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
      data-testid="product-card"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer">
        More Details
      </div>

      <img
        src={product.images[0]}
        alt={product.title}
        className="self-center h-60 w-80 object-contain"
      />

      <div className="text-center font-medium">{product.title}</div>

      <div className="text-center text-gray-700">
        {product.price.toFixed(2)} CHF
      </div>

      <button
        className="mt-auto w-full bg-palevioletred text-white p-2 rounded hover:bg-palevioletredhover z-10"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart(product);
        }}
      >
        <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
