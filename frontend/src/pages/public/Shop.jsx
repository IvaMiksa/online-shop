import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  setCurrentPage,
  addProductToWishlist,
} from "../../store/productSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ProductSearch from "../../components/ProductSearch";
import ProductCard from "../../components/ProductCard";

const Shop = ({handleAddToCart}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isAuthenticated = useSelector((store) => store.user.accessToken);
  const search = useSelector((state) => state.product.search) || "";
  const currentPage = useSelector((store) => store.product.currentPage) || 1;
  const productsPerPage =
    useSelector((store) => store.product.productsPerPage) || 10;

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


  // Add product to wishlist
  const handleAddToWishlist = (product) => {
    if (isAuthenticated) {
      dispatch(addProductToWishlist(product));
      toast.success(`${product.title} successfully added to the wishlist!`);
    }
  }

  // Search/filter products
  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(search?.toLowerCase() || "")
  );

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );
  const indexOfLastTodo = currentPage * productsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    indexOfFirstTodo,
    indexOfLastTodo
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <>
      <ProductSearch />
      <div className="grid">
        {paginatedProducts && paginatedProducts.length > 0
          ? paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                handleAddToWishlist={handleAddToWishlist}
                isShopProduct={true}
                isWishlistProduct={false}
              />
            ))
          : "No products available"}

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded shadow hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            {currentPage} / {totalPages || 1}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded shadow hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
