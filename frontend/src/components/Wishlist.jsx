import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const Wishlist = ({ product, handleAddToCart }) => {
  const products = useSelector((state) => state.product.wishlist);
  return (
    <div className="grid">
      {products && products.length > 0
        ? products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              isShopProduct={false} 
            />
          ))
        : "No products saved in your wishlist."}
    </div>
  );
};

export default Wishlist;
