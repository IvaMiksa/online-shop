import { useDispatch, useSelector } from "react-redux";

import { setSearch } from "../store/productSlice";
import SearchBar from "./SearchBar";

function ProductSearch() {
  const dispatch = useDispatch();
  const search = useSelector((store) => store.product.search) || "";

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="w-full">
      <SearchBar
        value={search}
        onChange={handleSearchChange}
        placeholder="Search products"
        className="p-2 rounded-sm w-full"
        type="text"
      />
    </div>
  );
}

export default ProductSearch;
