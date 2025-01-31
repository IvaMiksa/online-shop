import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const Wishlist = ({ product, handleAddToCart, handleRemoveFromWishlist }) => {
  const products = useSelector((state) => state.product.wishlist);

  return (
    <div className="grid grid-cols-4 p-2.5">
      {products && products.length > 0
        ? products.map(
            (product) =>
              product && (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  isShopProduct={false}
                  isWishlistProduct={true}
                  handleRemoveFromWishlist={handleRemoveFromWishlist}
                />
              )
          )
        : "No products saved in your wishlist."}
    </div>
  );
};

export default Wishlist;
