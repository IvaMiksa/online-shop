import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProductToCart } from "../../store/productSlice";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  // Fetching products on mount
  useEffect(() => {
    const fetchProducts = () => {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          // Adding amount property to each product
          const newProductData = data.products.map((product) => ({
            ...product,
            amount: 1,
          }));
          console.log(newProductData);

          dispatch(getProducts(newProductData));
        }) // console.log(data.products)
        .catch((error) => console.error(error));
    };

    fetchProducts();
  }, [dispatch]);

   // Adding product to cart
   const handleAddToCart = (product) => {
     dispatch(addProductToCart(product));
   };

  return (
    <div>
      {products && products.length > 0
        ? products.map((product) => (
            <div key={product.id}>
              <img src={product.images[0]} alt="" width={80} height={80} />
              <div>{product.title}</div>
              <div>
                <div>{product.price.toFixed(2)} CHF</div>
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
              </div>
            </div>
          ))
        : "No products available"}
    </div>
  );
};

export default Shop;
