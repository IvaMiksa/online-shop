import { useDispatch, useSelector } from "react-redux";
import { getProducts, setCurrentPage } from "../../store/productSlice";
import { useEffect } from "react";
import ProductSearch from "../../components/ProductSearch";
import ProductCard from "../../components/ProductCard";

const Shop = ({ handleAddToCart, handleAddToWishlist }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const search = useSelector((state) => state.product.search) || "";
  const currentPage = useSelector((store) => store.product.currentPage) || 1;
  const productsPerPage =
    useSelector((store) => store.product.productsPerPage) || 10;
  const categoryFilter =
    useSelector((store) => store.product.categoryFilter) || "";
  const brandFilter = useSelector((store) => store.product.brandFilter) || "";

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
            isWishlist: false,
          }));
          console.log(newProductData);

          dispatch(getProducts(newProductData));
        }) // console.log(data.products)
        .catch((error) => console.error(error));
    };

    fetchProducts();
  }, [dispatch]);

  // Search/filter products
  const filteredProducts = products.filter((product) => {
    
    const  isSearchMatch = product.title
      ?.toLowerCase()
      .includes(search?.toLowerCase() || "");

    const isCategoryMatch =
      categoryFilter === "" || categoryFilter === "All Categories"
        ? true
        : product.category === categoryFilter;

    const isBrandMatch =
      brandFilter === "" || brandFilter === "All Brands"
        ? true
        : product.brand === brandFilter;

    return isSearchMatch && isCategoryMatch && isBrandMatch;
  });


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
    <div className="m-5">
      <ProductSearch />
      <div className="grid grid-cols-4 p-2.5">
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
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded shadow hover:bg-gray-400 disabled:opacity-50 mr-2"
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPages || 1}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded shadow hover:bg-gray-400 disabled:opacity-50 ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
