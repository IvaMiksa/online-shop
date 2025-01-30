import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setCategoryFilter,
  setBrandFilter,
} from "../store/productSlice";
import SearchBar from "./SearchBar";

function ProductSearch() {
  const dispatch = useDispatch();
  const search = useSelector((store) => store.product.search) || "";
  const categoryFilter = useSelector((store) => store.product.categoryFilter);
  const brandFilter = useSelector((store) => store.product.brandFilter);
  const products = useSelector((state) => state.product.products);

  const categories = [
    "All Categories",
    ...new Set(products.map((product) => product.category)),
  ];
  const brands = [
    "All Brands",
    ...new Set(products.map((product) => product.brand)),
  ];

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  const handleBrandChange = (e) => {
    dispatch(setBrandFilter(e.target.value));
  };

  return (
    <div
      /*className="w-full flex items-center gap-4"*/ className="w-full flex flex-wrap items-center justify-start gap-4"
    >
   
      <div /*className="w-1/2"*/ className="w-full sm:w-2/2 mx-4">
        <div className="relative w-full">
          <SearchBar
            value={search}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-full text-sm outline-none focus:border-palevioletred focus:ring-2 focus:ring-palevioletred transition"
            type="text"
          />
          
     
        </div>
      </div>


      <div
        /*className="w-1/2 flex gap-4"*/ className="w-full sm:w-1/2 flex gap-4"
      >
       
        <div className="w-1/4 ml-5">
          <select
            id="category"
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="w-full bg-palevioletred text-white p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-palevioletred focus:ring-2 focus:ring-palevioletred transition"
          >
            {categories.map((category, i) => (
              <option
                key={i}
                value={category === "All Categories" ? "" : category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

    
        <div className="w-1/4">
          <select
            id="brand"
            value={brandFilter}
            onChange={handleBrandChange}
            className="w-full bg-palevioletred text-white p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-palevioletred focus:ring-2 focus:ring-palevioletred transition"
          >
            {brands.map((brand, i) => (
              <option key={i} value={brand === "All Brands" ? "" : brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
