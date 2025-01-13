import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    cart: [],
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
  },
});

export const { getProducts, addProductToCart, removeProductFromCart } =
  productSlice.actions;

export default productSlice.reducer;
