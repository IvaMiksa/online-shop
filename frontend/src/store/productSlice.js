import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    cart: [],
    totalPrice: 0,
    search: "",
    currentPage: 1,
    productsPerPage: 12,
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProductToCart: (state, action) => {
      const newProduct = action.payload;
      const index = state.cart.findIndex((item) => item.id === newProduct.id);

      // If product not in cart => add it
      if (index === -1) {
        state.cart = [newProduct, ...state.cart];
      } else {
        // If product already in cart => increment its amount by 1
        state.cart[index].amount++;
      }
    },
    removeProductFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((product) => product.id !== id);
    },
    increaseAmount: (state, action) => {
      const id = action.payload;
      //console.log(id);
      const index = state.cart.findIndex((item) => item.id === id);
      console.log(index);
      state.cart[index].amount++;
    },
    decreaseAmount: (state, action) => {
      const id = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      state.cart[index].amount--;
    },
    calculateTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce((totalPrice, currentItem) => {
        const { price, amount } = currentItem;
        const totalItemPrice = price * amount;
        totalPrice += totalItemPrice;
        return totalPrice;
      }, 0);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setProductsPerPage: (state, action) => {
      state.productsPerPage = action.payload;
    },
  },
});

export const {
  getProducts,
  addProductToCart,
  removeProductFromCart,
  increaseAmount,
  decreaseAmount,
  calculateTotalPrice,
  setSearch,
  setCurrentPage,
  setProductsPerPage,
} = productSlice.actions;

export default productSlice.reducer;
