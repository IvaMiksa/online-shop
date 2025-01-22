import { removeProductFromWishlist } from "../store/productSlice";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = ({ product, handleAddToCart }) => {
  const products = useSelector((state) => state.product.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (product) => {
    dispatch(removeProductFromWishlist(product.id));
  };
  return (
    <div className="grid">
      {products && products.length > 0
        ? products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              isShopProduct={false}
              isWishlistProduct={true}
              handleRemoveFromWishlist={handleRemoveFromWishlist}
            />
          ))
        : "No products saved in your wishlist."}
    </div>
  );
};

export default Wishlist;
