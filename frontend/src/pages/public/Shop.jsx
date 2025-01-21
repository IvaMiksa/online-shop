import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProductToCart } from "../../store/productSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ProductSearch from "../../components/ProductSearch";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isAuthenticated = useSelector((store) => store.user.accessToken);
  const search = useSelector((state) => state.product.search) || "";

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
    if (isAuthenticated) {
      dispatch(addProductToCart(product));
      toast.success(`${product.title} successfully added to the cart!`);
    } else {
      toast.warn("Please register or log in to add products to your cart!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  // Search/filter products
  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(search?.toLowerCase() || "")
  );

  return (
    <>
      <ProductSearch />
      <div className="grid">
        {filteredProducts && filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.images[0]} alt="" width={80} height={80} />
                <div>{product.title}</div>
                <div className="product-info-wrapper">
                  <div>{product.price.toFixed(2)} CHF</div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          : "No products available"}
      </div>
    </>
  );
};

export default Shop;
